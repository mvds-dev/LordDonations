"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusesRoutes = void 0;
const statuses_controllers_1 = require("../controllers/statuses.controllers");
const statuses_controllers_2 = require("../controllers/statuses.controllers");
const statusesRoutes = (app) => {
    app.post("/statuses", statuses_controllers_1.createStatusesController);
    app.get("/statuses", statuses_controllers_1.listStatusesController);
    app.delete("/statuses/:id", statuses_controllers_2.deleteStatusesController);
    app.patch("/statuses/:id", statuses_controllers_1.updateStatusesController);
};
exports.statusesRoutes = statusesRoutes;
