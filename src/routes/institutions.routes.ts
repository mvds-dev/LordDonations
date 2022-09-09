import {
	institutionCreateController,
	institutionDeleteController,
	institutionsListController,
} from "../controllers/institutions.controllers";
import { Express } from "express";

const institutionsRoutes = (app: Express) => {
	app.post("/institutions", institutionCreateController);
	app.get("/institutions", institutionsListController);
	app.delete("/institutions/:id", institutionDeleteController);
};

export { institutionsRoutes };
