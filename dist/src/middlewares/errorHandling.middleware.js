"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const appError_1 = require("../erros/appError");
function errorHandlingMiddleware(error, req, res, _) {
    if (error instanceof appError_1.AppError) {
        const { statusCode, message } = error;
        return res.status(statusCode).json({ status: "error", code: statusCode, message });
    }
    ;
    return res.status(500).json({
        status: "error",
        code: 500,
        message: "Internal server error"
    });
}
exports.errorHandlingMiddleware = errorHandlingMiddleware;
;
