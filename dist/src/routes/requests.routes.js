"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestsRoutes = void 0;
const requests_controllers_1 = require("../controllers/requests.controllers");
const requests_controllers_2 = require("../controllers/requests.controllers");
const requests_controllers_3 = require("../controllers/requests.controllers");
const requests_controllers_4 = require("../controllers/requests.controllers");
const requestsRoutes = (app) => {
    app.get("/requests", requests_controllers_1.listRequestsController);
    app.post("/requests", requests_controllers_2.createRequestsController);
    app.delete("/requests/:requestId", requests_controllers_3.deleteRequestsController);
    app.patch("/requests/:requestId", requests_controllers_4.updateRequestsController);
};
exports.requestsRoutes = requestsRoutes;
