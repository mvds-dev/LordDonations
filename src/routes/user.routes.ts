import { Express } from "express";
import { createObjectsController, deleteObjectsController, updateObjectsController } from "../controllers/objects.controllers";
import { createUserController, deleteUserController, listUsersController, updateUsersController, loginUserController } from "../controllers/users.controllers";
import { verifyUserAuthMiddleware } from "../middlewares/verifyAuth.middleware";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
    app.delete("/users/:id", verifyUserAuthMiddleware, deleteUserController);
    app.get("/users", listUsersController);
    app.patch("/users", verifyUserAuthMiddleware, updateUsersController);

    app.post("/users/login", loginUserController);

    //objects
    app.post("/objects", verifyUserAuthMiddleware, createObjectsController);
    app.delete("/objects/:objectId", verifyUserAuthMiddleware,deleteObjectsController);
    app.patch("/objects/:objectId", verifyUserAuthMiddleware, updateObjectsController);
};

export {userRoutes};