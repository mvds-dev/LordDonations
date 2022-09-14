"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoutes = void 0;
const types_controllers_1 = require("../controllers/types.controllers");
const types_controllers_2 = require("../controllers/types.controllers");
const typesRoutes = (app) => {
    app.post("/types", types_controllers_1.createTypesController);
    app.get("/types", types_controllers_2.listTypesController);
    app.delete("/types/:id", types_controllers_1.deleteTypesController);
    app.patch("/types/:id", types_controllers_1.updateTypesController);
};
exports.typesRoutes = typesRoutes;
