import { AppError } from "../erros/appError";
import { Request, Response, NextFunction } from "express";


function errorHandlingMiddleware(error: AppError, req: Request, res: Response, _:NextFunction){
    if(error instanceof AppError) {
        const {statusCode, message}:AppError = error;
        return res.status(statusCode).json({status: "error", code: statusCode, message});
    };

    return res.status(500).json({
        status:"error",
        code: 500,
        message: "Internal server error"
    });
};

export {errorHandlingMiddleware};