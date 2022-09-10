import { createStatusesController, listStatusesController } from "../controllers/statuses.controllers";
import { Express } from "express";

const statusesRoutes = (app: Express) => {
    app.post("/statuses", createStatusesController);
    app.get("/statuses", listStatusesController);
}

export { statusesRoutes };
