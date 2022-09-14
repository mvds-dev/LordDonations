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
exports.updateTypesController = exports.deleteTypesController = exports.listTypesController = exports.createTypesController = void 0;
const createTypes_service_1 = require("../services/types/createTypes.service");
const listTypes_service_1 = require("../services/types/listTypes.service");
const deleteTypes_service_1 = require("../services/types/deleteTypes.service");
const updateTypes_service_1 = require("../services/types/updateTypes.service");
const createTypesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const output = yield (0, createTypes_service_1.createTypesService)({ name, description });
    return res.status(201).json(output);
});
exports.createTypesController = createTypesController;
const listTypesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield (0, listTypes_service_1.listTypesService)();
    return res.status(200).json(output);
});
exports.listTypesController = listTypesController;
const deleteTypesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, deleteTypes_service_1.deleteTypesService)(id);
    return res.status(204).send();
});
exports.deleteTypesController = deleteTypesController;
const updateTypesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description } = req.body;
    const output = yield (0, updateTypes_service_1.updateTypesService)({ id, name, description });
    return res.status(200).json(output);
});
exports.updateTypesController = updateTypesController;
