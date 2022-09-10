import { createStatusesController } from "../controllers/statuses.controllers";
import { Express } from "express";

const statusesRoutes = (app: Express) => {
    app.post("/statuses", createStatusesController);
}

export { statusesRoutes };
