import { Express } from "express";
import { institutionsRoutes } from "./institutions.routes";
import { typesRoutes } from "./types.route";

function appRoutes(app: Express) {
    typesRoutes(app);
    institutionsRoutes(app);
};

export { appRoutes };
