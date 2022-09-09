import { Express } from "express";

import { adressesRoutes } from "./adresses.routes";

function appRoutes(app: Express) {
    adressesRoutes(app)

    
};

export {appRoutes};