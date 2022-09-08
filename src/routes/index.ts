import { Express } from "express";
import { typesRoutes } from "./types.route";

function appRoutes(app: Express) {
    typesRoutes(app);
};

export {appRoutes};