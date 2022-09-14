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
exports.loginUserController = exports.updateUsersController = exports.listUsersController = exports.deleteUserController = exports.createUserController = void 0;
const createUsers_service_1 = __importDefault(require("../services/users/createUsers.service"));
const deleteUser_service_1 = __importDefault(require("../services/users/deleteUser.service"));
const getUsers_service_1 = __importDefault(require("../services/users/getUsers.service"));
const loginUsers_service_1 = __importDefault(require("../services/users/loginUsers.service"));
const updateUsers_service_1 = require("../services/users/updateUsers.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("userController");
    const { name, age, cpf, email, password } = req.body;
    const user = yield (0, createUsers_service_1.default)({ name, age, cpf, email, password });
    return res.status(201).json(user);
});
exports.createUserController = createUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    yield (0, deleteUser_service_1.default)({ id });
    return res.status(204).json("");
});
exports.deleteUserController = deleteUserController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, getUsers_service_1.default)();
    return res.json(user);
});
exports.listUsersController = listUsersController;
const updateUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const { name, age, email, cpf, password } = req.body;
    const output = yield (0, updateUsers_service_1.updateUsersService)({
        id,
        name,
        age,
        email,
        cpf,
        password,
    });
    return res.status(200).json(output);
});
exports.updateUsersController = updateUsersController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const token = yield (0, loginUsers_service_1.default)(email, password);
    return res.status(200).json(token);
});
exports.loginUserController = loginUserController;
