import { Request, Response } from 'express'
import { AppError} from '../erros/appError'
import "express-async-errors"

import listObjectsService from '../services/objects/listObjects.service'
import { createObjectsService } from '../services/objects/createObjects.service'
import { deleteObjectsService } from '../services/objects/deleteObjects.service'
import { updateObjectsService } from '../services/objects/updateObjects.service'


export const listObjectsControler = async (req: Request, res: Response) => {

    const listAdresses =  await listObjectsService()
    
    return res.status(200).send(listAdresses)
}

export const createObjectsController = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { typeId, name, description } = req.body;
    const output = await createObjectsService({userId, typeId, name, description});
    return res.status(201).json(output);
}

export const deleteObjectsController = async (req: Request, res: Response) => {
    const {userId, objectId} = req.params;
    await deleteObjectsService({userId, objectId});
    return res.status(204).send();
}

export const updateObjectsController = async (req: Request, res: Response) => {
    const {userId, objectId} = req.params;
    const { typeId,  name, description} = req.body;
    const output = await updateObjectsService({userId, objectId, typeId,  name, description});
    return res.status(200).json(output);
}

