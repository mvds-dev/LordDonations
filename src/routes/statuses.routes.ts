import { createStatusesController, listStatusesController, updateStatusesController } from "../controllers/statuses.controllers";
import { Express } from "express";
import { deleteStatusesController } from "../controllers/statuses.controllers";

const statusesRoutes = (app: Express) => {
    app.post("/statuses", createStatusesController);
    app.get("/statuses", listStatusesController);
    app.delete("/statuses/:id", deleteStatusesController);
    app.patch("/statuses/:id", updateStatusesController);
}

export { statusesRoutes };
