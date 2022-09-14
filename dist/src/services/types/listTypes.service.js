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
exports.listTypesService = void 0;
const data_source_1 = require("../../data-source");
const types_entity_1 = require("../../entities/types.entity");
const listTypesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const typesRepository = data_source_1.AppDataSource.getRepository(types_entity_1.Types);
    const types = typesRepository.find();
    return types;
});
exports.listTypesService = listTypesService;
