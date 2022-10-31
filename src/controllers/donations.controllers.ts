import { Request, Response } from 'express'
import "express-async-errors"
import jwt from "jsonwebtoken";

import listDonationsService from '../services/donations/listDonations.service'
import { donateToInstitutionService } from '../services/donations/donateToInstitution.service'

export const listDonationsControler = async (req: Request, res: Response) => {

    const listDonations =  await listDonationsService()
    
    return res.status(200).send(listDonations)
}

export const donateToInstitutionController = async (req: Request, res: Response) => {
    const {institutionId} = req.params;

    const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const userId = id;

    const { objectId } = req.body;

    const output = await donateToInstitutionService({institutionId, userId, objectId});
    return res.status(200).json(output);
}
