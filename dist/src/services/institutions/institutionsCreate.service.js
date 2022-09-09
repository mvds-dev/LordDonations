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
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const appError_1 = require("../../erros/appError");
const institutionsCreateService = ({ name, email, password, cnpj, }) => __awaiter(void 0, void 0, void 0, function* () {
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions);
    const institutions = yield institutionsRepository.find();
    const emailAlreadyExists = institutions.find((institution) => institution.email === email);
    if (emailAlreadyExists) {
        throw new appError_1.AppError(400, "Email already exists");
    }
    const cnpjAlreadyExists = institutions.find((institution) => institution.cnpj === cnpj);
    if (cnpjAlreadyExists) {
        throw new appError_1.AppError(400, "CNPJ already exists");
    }
    if (!name || !email || !password || !cnpj) {
        throw new appError_1.AppError(400, "Some data is missing");
    }
    const institution = new institution_entity_1.Institutions();
    institution.name = name;
    institution.email = email;
    institution.password = bcrypt_1.default.hashSync(password, 10);
    institution.cnpj = cnpj;
    institution.isActive = true;
    institutionsRepository.create(institution);
    yield institutionsRepository.save(institution);
    const institutionResponse = {
        id: institution.id,
        name: institution.name,
        email: institution.email,
        cnpj: institution.cnpj,
        isActive: institution.isActive,
        createdAt: institution.createdAt,
        updatedAt: institution.updatedAt,
    };
    return institutionResponse;
});
exports.default = institutionsCreateService;
