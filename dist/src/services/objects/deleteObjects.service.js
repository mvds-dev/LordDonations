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
exports.deleteObjectsService = void 0;
const data_source_1 = require("../../data-source");
const objects_entity_1 = require("../../entities/objects.entity");
const appError_1 = require("../../erros/appError");
const deleteObjectsService = ({ userId, objectId }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId || !objectId)
        throw new appError_1.AppError(400, "Request must have userId and objectId");
    //checking user and objects
    const objectsRepository = data_source_1.AppDataSource.getRepository(objects_entity_1.Itens);
    const object = yield objectsRepository.findOne({ where: { id: objectId }, relations: { user: true } });
    if (!object)
        throw new appError_1.AppError(404, "Object not found");
    if (object.user.id !== userId)
        throw new appError_1.AppError(404, "User not found");
    //deleting
    yield objectsRepository.delete(objectId);
});
exports.deleteObjectsService = deleteObjectsService;
