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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const appError_1 = require("../../erros/appError");
require("dotenv/config");
const institutionLoginService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions);
    const institutions = yield institutionsRepository.find();
    const account = institutions.find((institution) => institution.email === email);
    if (!email || !password) {
        throw new appError_1.AppError(400, "Email or password is missing");
    }
    if (!account) {
        throw new appError_1.AppError(403, "Wrong email/password");
    }
    if (!bcrypt_1.default.compareSync(password, account.password)) {
        throw new appError_1.AppError(403, "Wrong email/password");
    }
    if (!(account === null || account === void 0 ? void 0 : account.isActive)) {
        throw new appError_1.AppError(403, "institution is deactivated");
    }
    const token = jsonwebtoken_1.default.sign({ id: account.id, userType: "institution" }, String(process.env.SECRET_KEY), {
        expiresIn: "24h",
    });
    return token;
});
exports.default = institutionLoginService;
