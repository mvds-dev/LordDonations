import {
	institutionCreateController,
	institutionDeleteController,
	institutionLoginController,
	institutionsListController,
} from "../controllers/institutions.controllers";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
	app.delete("/institutions/:id", institutionDeleteController);
	app.post("/institutions/login", institutionLoginController);
};

export { institutionsRoutes };
