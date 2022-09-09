import { Request, Response } from "express";
import "express-async-errors";
import adressesCreateService from "../services/adresses/createAdresses.service";


const adressesControler = async (req: Request, res: Response) => {
    const {city, state, number, cep, district} = req.body;
    const newUser =  await adressesCreateService({city, state, number, cep, district});
    
    return res.status(201).send(newUser);
}

export default adressesControler