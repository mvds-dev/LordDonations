import { Express } from "express";
import { createUserController } from "../controllers/users.controllers";

function userRoutes(app: Express) {
    app.post("/users", createUserController);
};

export {userRoutes};