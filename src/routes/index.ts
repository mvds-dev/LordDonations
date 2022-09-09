import { Express } from "express";

import { adressesRoutes } from "./adresses.routes";

function appRoutes(app: Express) {
    app.use('/', adressesRoutes())

    
};

export {appRoutes};