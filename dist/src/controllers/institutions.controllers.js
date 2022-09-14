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
exports.institutionUpdateController = exports.institutionLoginController = exports.institutionDeleteController = exports.institutionsListController = exports.institutionCreateController = void 0;
const institutionDelete_service_1 = __importDefault(require("../services/institutions/institutionDelete.service"));
const institutionLogin_service_1 = __importDefault(require("../services/institutions/institutionLogin.service"));
const institutionsCreate_service_1 = __importDefault(require("../services/institutions/institutionsCreate.service"));
const institutionsList_service_1 = __importDefault(require("../services/institutions/institutionsList.service"));
const institutionUpdate_service_1 = __importDefault(require("../services/institutions/institutionUpdate.service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const institutionCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newInstitution = yield (0, institutionsCreate_service_1.default)(data);
    return res.status(201).send(newInstitution);
});
exports.institutionCreateController = institutionCreateController;
const institutionsListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const institutionsList = yield (0, institutionsList_service_1.default)();
    return res.status(200).send(institutionsList);
});
exports.institutionsListController = institutionsListController;
const institutionDeleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    yield (0, institutionDelete_service_1.default)(id);
    return res.status(202).json({ message: "Institution deleted with success!" });
});
exports.institutionDeleteController = institutionDeleteController;
const institutionLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const institutionLogin = yield (0, institutionLogin_service_1.default)(data);
    return res.status(202).send({ token: institutionLogin });
});
exports.institutionLoginController = institutionLoginController;
const institutionUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    data.id = id;
    const updatedInstitution = yield (0, institutionUpdate_service_1.default)(data);
    return res
        .status(202)
        .send({ message: "Institution updated!", updatedInstitution });
});
exports.institutionUpdateController = institutionUpdateController;
