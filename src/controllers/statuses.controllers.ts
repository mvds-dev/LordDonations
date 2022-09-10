import { Request, Response } from "express";
import { createStatusesService } from "../services/statuses/createStatuses.service";
import { listStatusesService } from "../services/statuses/listStatuses.service";
import { deleteStatusesService } from "../services/statuses/deleteStatuses.service";
import { updateStatusesService } from "../services/statuses/updateStatuses.service";

const createStatusesController = async (req: Request, res: Response) => {
    const { name } = req.body;
    const output = await createStatusesService(name);
    return res.status(201).json(output);
};

const listStatusesController = async (req: Request, res: Response) => {
    const output = await listStatusesService();
    return res.status(200).json(output);
}

const deleteStatusesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteStatusesService(id);
    return res.status(204).send();
}

const updateStatusesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const output = await updateStatusesService({id, name});
    return res.status(200).json(output);
}

export { createStatusesController, listStatusesController, deleteStatusesController, updateStatusesController };