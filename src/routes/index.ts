import { Express } from "express";
import { institutionsRoutes } from "./institutions.routes";

function appRoutes(app: Express) {
	institutionsRoutes(app);
}

export { appRoutes };
