import { Express } from "express";
import { createUserController, deleteUserController, listUsersController } from "../controllers/users.controllers";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
    app.delete("/users/:id", deleteUserController);
    app.get("/users", listUsersController)
};

export {userRoutes};