"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const addresses_routes_1 = require("./addresses.routes");
const user_routes_1 = require("./user.routes");
const institutions_routes_1 = require("./institutions.routes");
const types_route_1 = require("./types.route");
const objects_routes_1 = require("./objects.routes");
const statuses_routes_1 = require("./statuses.routes");
const requests_routes_1 = require("./requests.routes");
function appRoutes(app) {
    (0, user_routes_1.userRoutes)(app);
    (0, types_route_1.typesRoutes)(app);
    (0, institutions_routes_1.institutionsRoutes)(app);
    (0, addresses_routes_1.adressesRoutes)(app);
    (0, objects_routes_1.objectsRoutes)(app);
    (0, statuses_routes_1.statusesRoutes)(app);
    (0, requests_routes_1.requestsRoutes)(app);
}
exports.appRoutes = appRoutes;
;
