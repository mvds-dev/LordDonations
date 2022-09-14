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
exports.updateObjectsController = exports.deleteObjectsController = exports.createObjectsController = exports.listObjectsControler = void 0;
require("express-async-errors");
const listObjects_service_1 = __importDefault(require("../services/objects/listObjects.service"));
const createObjects_service_1 = require("../services/objects/createObjects.service");
const deleteObjects_service_1 = require("../services/objects/deleteObjects.service");
const updateObjects_service_1 = require("../services/objects/updateObjects.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const listObjectsControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAdresses = yield (0, listObjects_service_1.default)();
    return res.status(200).send(listAdresses);
});
exports.listObjectsControler = listObjectsControler;
const createObjectsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const userId = id;
    const { typeId, name, description } = req.body;
    const output = yield (0, createObjects_service_1.createObjectsService)({ userId, typeId, name, description });
    return res.status(201).json(output);
});
exports.createObjectsController = createObjectsController;
const deleteObjectsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { objectId } = req.params;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const userId = id;
    yield (0, deleteObjects_service_1.deleteObjectsService)({ userId, objectId });
    return res.status(204).send();
});
exports.deleteObjectsController = deleteObjectsController;
const updateObjectsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { objectId } = req.params;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = jsonwebtoken_1.default.decode(token);
    const userId = id;
    const { typeId, name, description } = req.body;
    const output = yield (0, updateObjects_service_1.updateObjectsService)({ userId, objectId, typeId, name, description });
    return res.status(200).json(output);
});
exports.updateObjectsController = updateObjectsController;
