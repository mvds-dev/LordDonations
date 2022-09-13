import {
	institutionCreateController,
	institutionDeleteController,
	institutionDonationController,
	institutionLoginController,
	institutionReceivesObjectController,
	institutionsListController,
	institutionUpdateController,
	listDonatedObjectsController,
} from "../controllers/institutions.controllers";
import { verifyInstitutionAuthMiddleware } from "../middlewares/verifyInstitutionAuth.middleware";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
	app.delete(
		"/institutions",
		verifyInstitutionAuthMiddleware,
		institutionDeleteController,
	);
	app.post("/institutions/login", institutionLoginController);
	app.patch(
		"/institutions",
		verifyInstitutionAuthMiddleware,
		institutionUpdateController,
	);
	app.get(
		"/institutions/donations/donated",
		verifyInstitutionAuthMiddleware,
		listDonatedObjectsController,
	);
	app.post("/institutions/donations/:id", verifyInstitutionAuthMiddleware, institutionDonationController)
	app.patch("/institutions/donations/received/:objectId", verifyInstitutionAuthMiddleware, institutionReceivesObjectController);
};

export { institutionsRoutes };
