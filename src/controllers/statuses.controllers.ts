import { Request, Response } from "express";
import { createStatusesService } from "../services/statuses/createStatuses.service";

const createStatusesController = async (req: Request, res: Response) => {
    const { name } = req.body;
    const output = await createStatusesService(name);
    return res.status(201).json(output);
};

export { createStatusesController };