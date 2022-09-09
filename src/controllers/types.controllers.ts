import { Request, Response } from "express";
import { createTypesService } from "../services/types/createTypes.service";
import { listTypesService } from "../services/types/listTypes.service";
import { deleteTypesService } from "../services/types/deleteTypes.service";


const createTypesController = async (req: Request, res: Response) => {
    const {name, description} = req.body;
    const output = await createTypesService({name, description});
    return res.status(201).json(output);
}

const listTypesController = async (req: Request, res: Response) => {
    const output = await listTypesService();
    return res.status(200).json(output);
}

const deleteTypesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteTypesService(id);
    return res.status(204).send();
}

export { createTypesController, listTypesController, deleteTypesController }
