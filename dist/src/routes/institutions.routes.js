"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionsRoutes = void 0;
const institutions_controllers_1 = require("../controllers/institutions.controllers");
const verifyInstitutionAuth_middleware_1 = require("../middlewares/verifyInstitutionAuth.middleware");
const institutionsRoutes = (app) => {
    app.post("/institutions", institutions_controllers_1.institutionCreateController);
    app.get("/institutions", institutions_controllers_1.institutionsListController);
    app.delete("/institutions", verifyInstitutionAuth_middleware_1.verifyInstitutionAuthMiddleware, institutions_controllers_1.institutionDeleteController);
    app.post("/institutions/login", institutions_controllers_1.institutionLoginController);
    app.patch("/institutions", verifyInstitutionAuth_middleware_1.verifyInstitutionAuthMiddleware, institutions_controllers_1.institutionUpdateController);
};
exports.institutionsRoutes = institutionsRoutes;
