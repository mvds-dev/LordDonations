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
exports.updateTypesService = void 0;
const data_source_1 = require("../../data-source");
const types_entity_1 = require("../../entities/types.entity");
const appError_1 = require("../../erros/appError");
const updateTypesService = ({ id, name, description }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id && !name && !description) {
        throw new appError_1.AppError(400, "Request must have a least one type property");
    }
    const typesRepository = data_source_1.AppDataSource.getRepository(types_entity_1.Types);
    const { affected } = yield typesRepository.update(id, { name, description });
    if (affected === 0)
        throw new appError_1.AppError(404, "Type not found");
    return { message: "Type updated" };
});
exports.updateTypesService = updateTypesService;
