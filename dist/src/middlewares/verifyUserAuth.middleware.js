"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../erros/appError");
require("dotenv/config");
const verifyUserAuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(" ")[1];
    if (!token)
        throw new appError_1.AppError(401, "missing authorization");
    try {
        const verify = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        if (verify.userType !== "user")
            throw new Error();
        if (verify)
            next();
    }
    catch (_a) {
        throw new appError_1.AppError(401, "Invalid token");
    }
});
exports.verifyUserAuthMiddleware = verifyUserAuthMiddleware;
