"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoutes = void 0;
const types_controllers_1 = require("../controllers/types.controllers");
const typesRoutes = (app) => {
    app.post("/types", types_controllers_1.createTypesController);
};
exports.typesRoutes = typesRoutes;
