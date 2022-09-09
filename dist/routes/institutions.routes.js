"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionsRoutes = void 0;
const institutions_controllers_1 = require("../controllers/institutions.controllers");
const institutionsRoutes = (app) => {
    app.post("/institutions", institutions_controllers_1.institutionCreateController);
};
exports.institutionsRoutes = institutionsRoutes;
