import { Express } from "express";
import { createUserController, deleteUserController, listUsersController, updateUsersController } from "../controllers/users.controllers";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
    app.delete("/users/:id", deleteUserController);
    app.get("/users", listUsersController);
    app.patch("/users/:id", updateUsersController);
};

export {userRoutes};