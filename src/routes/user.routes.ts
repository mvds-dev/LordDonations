import { Express } from "express";
import { createObjectsController, deleteObjectsController, updateObjectsController } from "../controllers/objects.controllers";
import { createUserController, deleteUserController, listUsersController, updateUsersController, loginUserController } from "../controllers/users.controllers";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
    app.delete("/users/:id", deleteUserController);
    app.get("/users", listUsersController);
    app.patch("/users/:id", updateUsersController);

    app.post("/users/login", loginUserController);

    //objects
    app.post("/users/:userId/objects", createObjectsController);
    app.delete("/users/:userId/objects/:objectId", deleteObjectsController);
    app.patch("/users/:userId/objects/:objectId", updateObjectsController);
};

export {userRoutes};