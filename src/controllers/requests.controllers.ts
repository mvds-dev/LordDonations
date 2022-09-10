import { listRequestsServices } from "../services/requests/listRequests.service";
import { Request, Response } from "express";
import { createRequestsService } from "../services/requests/createRequests.service";
import { IRequestsCreate } from "../interfaces/requests";
import { deleteRequestsService } from "../services/requests/deleteRequests.service";

const listRequestsController = async (req: Request, res: Response) => {
    const output = await listRequestsServices();
    return res.status(200).json(output);
}

const createRequestsController = async (req: Request, res: Response) => {
    const institutionId = req.params.id;
    const {typeId, quantity, description}:IRequestsCreate = req.body;
    const output = await createRequestsService({typeId, institutionId, quantity, description});
    return res.status(201).json(output);
}

const deleteRequestsController = async (req: Request, res: Response) => {
    const {institutionId, requestId} = req.params;
    await deleteRequestsService(requestId, institutionId);
    return res.status(204).send();
}

export { listRequestsController, createRequestsController, deleteRequestsController };