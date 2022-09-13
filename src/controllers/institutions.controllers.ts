import { Request, Response } from "express";
import institutionDeleteService from "../services/institutions/institutionDelete.service";
import institutionLoginService from "../services/institutions/institutionLogin.service";
import institutionsCreateService from "../services/institutions/institutionsCreate.service";
import institutionsListService from "../services/institutions/institutionsList.service";
import institutionUpdateService from "../services/institutions/institutionUpdate.service";
import institutionDonationService from "../services/institutions/institutionsDonations.service";
import { instanceToPlain } from "class-transformer";


import jwt from "jsonwebtoken";

export const institutionCreateController = async (
	req: Request,
	res: Response,
) => {
	const data = req.body;

	const newInstitution = await institutionsCreateService(data);

	return res.status(201).send(instanceToPlain(newInstitution));
};

export const institutionsListController = async (
	req: Request,
	res: Response,
) => {
	const institutionsList = await institutionsListService();

	return res.status(200).send(instanceToPlain(institutionsList));
};

export const institutionDeleteController = async (
	req: Request,
	res: Response,
) => {
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };

	await institutionDeleteService(id);

	return res.status(202).json({ message: "Institution deleted with success!" });
};

export const institutionLoginController = async (
	req: Request,
	res: Response,
) => {
	const data = req.body;
	const institutionLogin = await institutionLoginService(data);

	return res.status(202).send({ token: institutionLogin });
};

export const institutionUpdateController = async (
	req: Request,
	res: Response,
) => {
	const data = req.body;

	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	data.id = id;

	const updatedInstitution = await institutionUpdateService(data);

	return res
		.status(202)
		.send({ message: "Institution updated!", updatedInstitution });
};

export const institutionDonationController = async ( req: Request, res: Response) =>{
	const objectID = req.params
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
    const { id } = jwt.decode(token) as {id: string};
	const institutionId = id

	const institutionDonation = await institutionDonationService(objectID, institutionId);

	return res.status(200).send({message: "Item acquired!", institutionDonation })
}