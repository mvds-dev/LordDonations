import { Express } from "express";
import { userRoutes } from "./user.routes";

function appRoutes(app: Express) {
    userRoutes(app)
};

export {appRoutes};