import { listRequestsServices } from "../services/requests/listRequests.service";
import { Request, Response } from "express";

const listRequestsController = async (req: Request, res: Response) => {
    const output = await listRequestsServices();
    return res.status(200).json(output);
}

export { listRequestsController };