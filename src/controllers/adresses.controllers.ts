import { Request, Response } from 'express'
import { AppError} from '../erros/appError'
import "express-async-errors"

import adressesCreateService from '../services/adresses/createAdresses.service'
import listAdressesService from '../services/adresses/listAdresses.service'


export const adressesControler = async (req: Request, res: Response) => {

    const {city, state, number, cep, district} = req.body

    const newAdresses =  await adressesCreateService({city, state, number, cep, district})
    
    return res.status(201).send(newAdresses)

}


export const listAdressesControler = async (req: Request, res: Response) => {

    const listAdresses =  await listAdressesService()
    
    return res.status(201).send(listAdresses)

}
