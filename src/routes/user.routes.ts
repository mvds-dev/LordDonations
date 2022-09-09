import { Express } from "express";
import { createUserController, deleteUserController } from "../controllers/users.controllers";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
    app.delete("/users/:id", deleteUserController);
};

export {userRoutes};