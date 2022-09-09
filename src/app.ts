import express from "express";
import { appRoutes } from "./routes";

import { Request, Response } from "express";

import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";
import { AppError } from "./erros/appError";

const app = express();
app.use(express.json());

// app.get("/test", (req: Request, res: Response) => {
// 	return res.status(200).json({ message: "hello world!" });
// });

// app.get("/error", (req: Request, res: Response) => {
// 	throw new AppError(400, "Error working");
// });

appRoutes(app);
app.use(errorHandlingMiddleware);

export { app };
