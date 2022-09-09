import {
	institutionCreateController,
	institutionsListController,
} from "../controllers/institutions.controllers";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
};

export { institutionsRoutes };
