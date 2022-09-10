import { listRequestsController } from "../controllers/requests.controllers";
import { Express } from "express";

const requestsRoutes = (app: Express) => {
    app.get("/requests", listRequestsController);
}

export { requestsRoutes };