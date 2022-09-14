import { createTypesController, deleteTypesController, updateTypesController } from "../controllers/types.controllers";
import { listTypesController } from "../controllers/types.controllers";
import { Express } from "express";

const typesRoutes = (app: Express) => {
    app.post("/types", createTypesController);
    app.get("/types", listTypesController);
    app.delete("/types/:id", deleteTypesController);
    app.patch("/types/:id", updateTypesController);
}

export { typesRoutes };