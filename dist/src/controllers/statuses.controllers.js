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
exports.updateStatusesController = exports.deleteStatusesController = exports.listStatusesController = exports.createStatusesController = void 0;
const createStatuses_service_1 = require("../services/statuses/createStatuses.service");
const listStatuses_service_1 = require("../services/statuses/listStatuses.service");
const deleteStatuses_service_1 = require("../services/statuses/deleteStatuses.service");
const updateStatuses_service_1 = require("../services/statuses/updateStatuses.service");
const createStatusesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const output = yield (0, createStatuses_service_1.createStatusesService)(name);
    return res.status(201).json(output);
});
exports.createStatusesController = createStatusesController;
const listStatusesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield (0, listStatuses_service_1.listStatusesService)();
    return res.status(200).json(output);
});
exports.listStatusesController = listStatusesController;
const deleteStatusesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, deleteStatuses_service_1.deleteStatusesService)(id);
    return res.status(204).send();
});
exports.deleteStatusesController = deleteStatusesController;
const updateStatusesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    const output = yield (0, updateStatuses_service_1.updateStatusesService)({ id, name });
    return res.status(200).json(output);
});
exports.updateStatusesController = updateStatusesController;
