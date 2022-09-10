import { Express } from "express";

import { adressesRoutes } from "./addresses.routes";
import { userRoutes } from "./user.routes";
import { institutionsRoutes } from "./institutions.routes";
import { typesRoutes } from "./types.route";
import { objectsRoutes } from "./objects.routes";
import { statusesRoutes } from "./statuses.routes";
import { requestsRoutes } from "./requests.routes";

function appRoutes(app: Express) {
    userRoutes(app)
    typesRoutes(app);
    institutionsRoutes(app);
    adressesRoutes(app);
    objectsRoutes(app);
    statusesRoutes(app);
    requestsRoutes(app);
};

export { appRoutes };
