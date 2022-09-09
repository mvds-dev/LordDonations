import { Request, Response } from "express";
import institutionsCreateService from "../services/institutions/institutionsCreate.service";
import institutionsListService from "../services/institutions/institutionsList.service";
import institutionsList from "../services/institutions/institutionsList.service";

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
