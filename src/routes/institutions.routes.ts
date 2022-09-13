import {
	institutionCreateController,
	institutionDeleteController,
	institutionDonationController,
	institutionLoginController,
	institutionsListController,
	institutionUpdateController,
} from "../controllers/institutions.controllers";
import { createRequestsController, deleteRequestsController, updateRequestsController } from "../controllers/requests.controllers";
import { verifyInstitutionAuthMiddleware } from "../middlewares/verifyInstitutionAuth.middleware";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
	app.delete("/institutions", verifyInstitutionAuthMiddleware, institutionDeleteController);
	app.post("/institutions/login", institutionLoginController);
	app.patch("/institutions", verifyInstitutionAuthMiddleware, institutionUpdateController);
	app.post("/institutions/donations/:id", verifyInstitutionAuthMiddleware, institutionDonationController)
};

export { institutionsRoutes };
