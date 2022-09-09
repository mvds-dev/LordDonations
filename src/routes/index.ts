import { Express } from "express";

import { userRoutes } from "./user.routes";
import { institutionsRoutes } from "./institutions.routes";
import { typesRoutes } from "./types.route";

function appRoutes(app: Express) {
    userRoutes(app)
    typesRoutes(app);
    institutionsRoutes(app);
};

export { appRoutes };
