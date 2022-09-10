import { createStatusesController, listStatusesController } from "../controllers/statuses.controllers";
import { Express } from "express";
import { deleteStatusesController } from "../controllers/statuses.controllers";

const statusesRoutes = (app: Express) => {
    app.post("/statuses", createStatusesController);
    app.get("/statuses", listStatusesController);
    app.delete("/statuses/:id", deleteStatusesController);
}

export { statusesRoutes };
