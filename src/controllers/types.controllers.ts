import { Request, Response } from "express";
import { createTypesService } from "../services/types/createTypes.service";


const createTypesController = async (req: Request, res: Response) => {
    const {name, description} = req.body;
    const output = await createTypesService({name, description});
    return res.status(201).json(output);
}

export { createTypesController }
