"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("express-async-errors");
const errorHandling_middleware_1 = require("./middlewares/errorHandling.middleware");
const appError_1 = require("./erros/appError");
require("express-async-errors");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.get("/test", (req, res) => {
    return res.status(200).json({ message: "hello world!" });
});
app.get("/error", (req, res) => {
    throw new appError_1.AppError(400, "Error working");
});
(0, routes_1.appRoutes)(app);
app.use(errorHandling_middleware_1.errorHandlingMiddleware);
