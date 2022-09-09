"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const institutions_routes_1 = require("./institutions.routes");
const types_route_1 = require("./types.route");
function appRoutes(app) {
    (0, types_route_1.typesRoutes)(app);
    (0, institutions_routes_1.institutionsRoutes)(app);
}
exports.appRoutes = appRoutes;
;
