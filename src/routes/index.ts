import { Express } from "express";

import { adressesRoutes } from "./addresses.routes";
import { userRoutes } from "./user.routes";
import { institutionsRoutes } from "./institutions.routes";
import { typesRoutes } from "./types.route";
import { objectsRoutes } from "./objects.routes";

function appRoutes(app: Express) {
    userRoutes(app)
    typesRoutes(app);
    institutionsRoutes(app);
    adressesRoutes(app);
    objectsRoutes(app);
};

export { appRoutes };
