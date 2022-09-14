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
exports.createStatusesService = void 0;
const data_source_1 = require("../../data-source");
const status_entity_1 = require("../../entities/status.entity");
const appError_1 = require("../../erros/appError");
const createStatusesService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name) {
        throw new appError_1.AppError(400, "status must have a name");
    }
    const statusesRepository = data_source_1.AppDataSource.getRepository(status_entity_1.Status);
    const isNameAlreadyRegistered = yield statusesRepository.findOne({ where: { name: name } });
    if (isNameAlreadyRegistered)
        throw new appError_1.AppError(409, "Name is already registered");
    const newStatus = new status_entity_1.Status();
    newStatus.name = name;
    const statusCreated = yield statusesRepository.save(newStatus);
    return statusCreated;
});
exports.createStatusesService = createStatusesService;
