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
exports.deleteStatusesService = void 0;
const data_source_1 = require("../../data-source");
const status_entity_1 = require("../../entities/status.entity");
const appError_1 = require("../../erros/appError");
const deleteStatusesService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new appError_1.AppError(400, "Id is required");
    const statusesRepository = data_source_1.AppDataSource.getRepository(status_entity_1.Status);
    const { affected } = yield statusesRepository.delete(id);
    if (affected === 0)
        throw new appError_1.AppError(404, "Status not found");
});
exports.deleteStatusesService = deleteStatusesService;
