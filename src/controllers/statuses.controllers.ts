import { Request, Response } from "express";
import { createStatusesService } from "../services/statuses/createStatuses.service";
import { listStatusesService } from "../services/statuses/listStatuses.service";

const createStatusesController = async (req: Request, res: Response) => {
    const { name } = req.body;
    const output = await createStatusesService(name);
    return res.status(201).json(output);
};

const listStatusesController = async (req: Request, res: Response) => {
    const output = await listStatusesService();
    return res.status(200).json(output);
}

export { createStatusesController, listStatusesController };