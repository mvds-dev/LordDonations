import { listRequestsController } from "../controllers/requests.controllers";
import { createRequestsController } from "../controllers/requests.controllers";
import { deleteRequestsController } from "../controllers/requests.controllers";
import { updateRequestsController } from "../controllers/requests.controllers";
import { Express } from "express";

const requestsRoutes = (app: Express) => {
    app.get("/requests", listRequestsController);
    app.post("/requests", createRequestsController);
	app.delete("/requests/:requestId", deleteRequestsController);
	app.patch("/requests/:requestId", updateRequestsController);
}

export { requestsRoutes };