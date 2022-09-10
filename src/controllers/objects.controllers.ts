import { Request, Response } from 'express'
import { AppError} from '../erros/appError'
import "express-async-errors"

import listObjectsService from '../services/objects/listObjects.service'


export const listObjectsControler = async (req: Request, res: Response) => {

    const listAdresses =  await listObjectsService()
    
    return res.status(201).send(listAdresses)
}