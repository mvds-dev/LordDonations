import { Request, Response } from 'express'
import { AppError} from '../erros/appError'
import "express-async-errors"

import adressesCreateService from '../services/adresses/createAdresses.service'
import listAdressesService from '../services/adresses/listAdresses.service'
import deleteAdressesService from '../services/adresses/deleteAdresses.service'
import updateAdressesService from '../services/adresses/updateAdresses.services'

import jwt from "jsonwebtoken";


export const createAdressesControler = async (req: Request, res: Response) => {

    const {city, state, number, cep, district} = req.body

    const newAdresses =  await adressesCreateService({city, state, number, cep, district})
    
    return res.status(201).send(newAdresses)

}

export const listAdressesControler = async (req: Request, res: Response) => {

    const listAdresses =  await listAdressesService()
    
    return res.status(201).send(listAdresses)
}

export const deleteAdressesControler = async (req: Request, res: Response) => {
    // console.log(typeof req.params.id)

    const deleteAdresses =  await deleteAdressesService(req.params.id)
    
    return res.status(204).send()
}

export const updateAdressesControler = async (req: Request, res: Response) => {

    const {city, state , number, cep, district} = req.body

    const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string};
    const tokenId = id;
    const addressId = req.params.id;

    const listAdresses =  await updateAdressesService({addressId, tokenId},{city ,state , number, cep, district})
    
    return res.status(201).send(listAdresses)
}
