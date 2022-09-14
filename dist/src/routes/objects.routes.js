"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectsRoutes = void 0;
const objects_controllers_1 = require("../controllers/objects.controllers");
const verifyUserAuth_middleware_1 = require("../middlewares/verifyUserAuth.middleware");
const objects_controllers_2 = require("../controllers/objects.controllers");
const objects_controllers_3 = require("../controllers/objects.controllers");
const objects_controllers_4 = require("../controllers/objects.controllers");
const objectsRoutes = (app) => {
    app.get('/objects', objects_controllers_1.listObjectsControler);
    app.delete("/objects/:objectId", verifyUserAuth_middleware_1.verifyUserAuthMiddleware, objects_controllers_2.deleteObjectsController);
    app.post("/objects", verifyUserAuth_middleware_1.verifyUserAuthMiddleware, objects_controllers_4.createObjectsController);
    app.patch("/objects/:objectId", verifyUserAuth_middleware_1.verifyUserAuthMiddleware, objects_controllers_3.updateObjectsController);
};
exports.objectsRoutes = objectsRoutes;
