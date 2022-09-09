import { Request, Response } from "express";
import institutionDeleteService from "../services/institutions/institutionDelete.service";
import institutionsCreateService from "../services/institutions/institutionsCreate.service";
import institutionsListService from "../services/institutions/institutionsList.service";

export const institutionCreateController = async (
	req: Request,
	res: Response,
) => {
	const data = req.body;

	const newInstitution = await institutionsCreateService(data);

	return res.status(201).send(newInstitution);
};

export const institutionsListController = async (
	req: Request,
	res: Response,
) => {
	const institutionsList = await institutionsListService();

	return res.status(200).send(institutionsList);
};

export const institutionDeleteController = async (
	req: Request,
	res: Response,
) => {
	const { id } = req.params;
	const institutionDeleted = await institutionDeleteService(id);

	return res.status(202).json({ message: "Institution deleted with success!" });
};
