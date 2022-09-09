import { Express } from "express";

import { adressesRoutes } from "./adresses.routes";
import { userRoutes } from "./user.routes";
import { institutionsRoutes } from "./institutions.routes";
import { typesRoutes } from "./types.route";

function appRoutes(app: Express) {
    userRoutes(app)
    typesRoutes(app);
    institutionsRoutes(app);
    adressesRoutes(app);
};

export { appRoutes };
