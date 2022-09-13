import { Request, Response } from "express";
import { AppError } from "../erros/appError";
import "express-async-errors";

import listObjectsService from "../services/objects/listObjects.service";
import { createObjectsService } from "../services/objects/createObjects.service";
import { deleteObjectsService } from "../services/objects/deleteObjects.service";
import { updateObjectsService } from "../services/objects/updateObjects.service";

import jwt from "jsonwebtoken";
import listObjectsByTypeService from "../services/objects/getObjectsByType.service";

export const listObjectsControler = async (req: Request, res: Response) => {
	const listAdresses = await listObjectsService();

	return res.status(200).send(listAdresses);
};

export const createObjectsController = async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const userId = id;

	const { typeId, name, description, statusId } = req.body;
	const output = await createObjectsService({
		userId,
		typeId,
		name,
		description,
	});
	return res.status(201).json(output);
};

export const deleteObjectsController = async (req: Request, res: Response) => {
	const { objectId } = req.params;

	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const userId = id;

	await deleteObjectsService({ userId, objectId });
	return res.status(204).send();
};

export const updateObjectsController = async (req: Request, res: Response) => {
	const { objectId } = req.params;

	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const userId = id;

	const { typeId, name, description } = req.body;
	const output = await updateObjectsService({
		userId,
		objectId,
		typeId,
		name,
		description,
	});
	return res.status(200).json(output);
};

export const getObjectsByTypeController = async (
	req: Request,
	res: Response,
) => {
	const { typeId } = req.params;
	console.log(typeId);
	const objects = await listObjectsByTypeService(typeId);
	return res.status(200).send(objects);
};
