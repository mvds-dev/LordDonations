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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const appError_1 = require("../../erros/appError");
//Isso aqui precisa ser arrumado
const institutionUpdateService = ({ id, name, email, cnpj, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions);
    const institutions = yield institutionsRepository.find();
    if (!name && !email && !cnpj) {
        throw new appError_1.AppError(400, "Nothing to update");
    }
    const institution = institutions.find((institution) => institution.id === id);
    if (!institution) {
        throw new appError_1.AppError(404, "Institution not found");
    }
    if (!(institution === null || institution === void 0 ? void 0 : institution.isActive)) {
        throw new appError_1.AppError(400, "Institution is deactivated");
    }
    const emailAlreadyExists = institutions.find((institution) => institution.email === email);
    if (emailAlreadyExists) {
        throw new appError_1.AppError(400, "Email already exists");
    }
    const cnpjAlreadyExists = institutions.find((institution) => institution.cnpj === cnpj);
    if (cnpjAlreadyExists) {
        throw new appError_1.AppError(400, "CNPJ already exists");
    }
    if (institution.email === email) {
        throw new appError_1.AppError(409, "Try a different email");
    }
    if (institution.name === name) {
        throw new appError_1.AppError(409, "Try a different name");
    }
    let newPassword = password;
    if (password) {
        newPassword = yield (0, bcrypt_1.hash)(password, 10);
    }
    return institutionsRepository.save({
        id: id,
        name,
        email,
        cnpj,
        password: newPassword
    });
});
exports.default = institutionUpdateService;
