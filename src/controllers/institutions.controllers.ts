import { Request, Response } from "express";
import institutionsCreateService from "../services/institutions/institutionsCreate.service";

export const institutionCreateController = async (
	req: Request,
	res: Response,
) => {
	const data = req.body;

	const newInstitution = await institutionsCreateService(data);

	return res.status(201).send(newInstitution);
};
