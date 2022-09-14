"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const users_controllers_1 = require("../controllers/users.controllers");
const verifyUserAuth_middleware_1 = require("../middlewares/verifyUserAuth.middleware");
function userRoutes(app) {
    app.post("/users", users_controllers_1.createUserController);
    app.delete("/users/:id", verifyUserAuth_middleware_1.verifyUserAuthMiddleware, users_controllers_1.deleteUserController);
    app.get("/users", users_controllers_1.listUsersController);
    app.patch("/users", verifyUserAuth_middleware_1.verifyUserAuthMiddleware, users_controllers_1.updateUsersController);
    app.post("/users/login", users_controllers_1.loginUserController);
    //objects
}
exports.userRoutes = userRoutes;
;
