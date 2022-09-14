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
exports.updateRequestsController = exports.deleteRequestsController = exports.createRequestsController = exports.listRequestsController = void 0;
const listRequests_service_1 = require("../services/requests/listRequests.service");
const createRequests_service_1 = require("../services/requests/createRequests.service");
const deleteRequests_service_1 = require("../services/requests/deleteRequests.service");
const updateRequests_service_1 = require("../services/requests/updateRequests.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const listRequestsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield (0, listRequests_service_1.listRequestsServices)();
    return res.status(200).json(output);
});
exports.listRequestsController = listRequestsController;
const createRequestsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const institutionId = id;
    const { typeId, quantity, description } = req.body;
    const output = yield (0, createRequests_service_1.createRequestsService)({ typeId, institutionId, quantity, description });
    return res.status(201).json(output);
});
exports.createRequestsController = createRequestsController;
const deleteRequestsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { requestId } = req.params;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const institutionId = id;
    yield (0, deleteRequests_service_1.deleteRequestsService)(requestId, institutionId);
    return res.status(204).send();
});
exports.deleteRequestsController = deleteRequestsController;
const updateRequestsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, description } = req.body;
    const { requestId } = req.params;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const institutionId = id;
    const output = yield (0, updateRequests_service_1.updateRequestsService)({ institutionId, requestId, quantity, description });
    return res.status(200).json(output);
});
exports.updateRequestsController = updateRequestsController;
