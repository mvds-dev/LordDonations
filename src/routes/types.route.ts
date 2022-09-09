import { createTypesController } from "../controllers/types.controllers";
import { Express } from "express";

const typesRoutes = (app: Express) => {
    app.post("/types", createTypesController);
}

export { typesRoutes };