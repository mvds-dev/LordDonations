import {
	institutionCreateController,
	institutionDeleteController,
	institutionLoginController,
	institutionsListController,
	institutionUpdateController,
} from "../controllers/institutions.controllers";
import { createRequestsController, deleteRequestsController, updateRequestsController } from "../controllers/requests.controllers";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
	app.delete("/institutions/:id", institutionDeleteController);
	app.post("/institutions/login", institutionLoginController);
	app.patch("/institutions/:id", institutionUpdateController);

	//change this to use token
	//requests
	app.post("/institutions/:id/requests", createRequestsController);
	app.delete("/institutions/:institutionId/requests/:requestId", deleteRequestsController);
	app.patch("/institutions/:institutionId/requests/:requestId", updateRequestsController);
};

export { institutionsRoutes };
