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
const data_source_1 = require("../../data-source");
const users_entity_1 = require("../../entities/users.entity");
const appError_1 = require("../../erros/appError");
const bcrypt_1 = require("bcrypt");
const createUserService = ({ name, age, cpf, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    if (!name || !age || !cpf || !email || !password) {
        throw new appError_1.AppError(400, "Request in wrong format");
    }
    if (!password) {
        throw new appError_1.AppError(401, "Password is a required field");
    }
    //this array syntaxt for find is the equivalent to the "or" operator
    const userAlreadyExists = yield userRepository.findOneBy({ email: email });
    console.log("ServiceFind");
    if (userAlreadyExists) {
        throw new appError_1.AppError(401, "User already exists");
    }
    const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
    console.log("Hash Service");
    const user = userRepository.create({
        name,
        email,
        age,
        cpf,
        password: hashedPassword,
    });
    console.log("Create User");
    yield userRepository.save(user);
    console.log("Save");
    return user;
});
exports.default = createUserService;
