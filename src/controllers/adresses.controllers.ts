import { Request, Response } from 'express'
import { AppError, handleError } from '../erros/appError'
import "express-async-errors"
import adressesCreateService from '../services/adresses/createAdresses.service'


const adressesControler = async (req: Request, res: Response) => {

    try {

        const {city, state, number, cep, district} = req.body
    
        const newUser =  await adressesCreateService({city, state, number, cep, district})
        
        return res.status(201).send(newUser)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }


}

export default adressesControler