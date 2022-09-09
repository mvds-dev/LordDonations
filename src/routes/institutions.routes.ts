import { institutionCreateController } from "../controllers/institutions.controllers";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
};

export { institutionsRoutes };
