import { Express } from "express";
import institutionsRoutes from "./institutions.routes";

function appRoutes(app: Express) {
	app.use("/institutions", institutionsRoutes());
}

export { appRoutes };
