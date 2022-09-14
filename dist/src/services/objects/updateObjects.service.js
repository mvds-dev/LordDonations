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
exports.updateObjectsService = void 0;
const data_source_1 = require("../../data-source");
const objects_entity_1 = require("../../entities/objects.entity");
const appError_1 = require("../../erros/appError");
const types_entity_1 = require("../../entities/types.entity");
const updateObjectsService = ({ userId, objectId, typeId, name, description }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId || !objectId)
        throw new appError_1.AppError(400, "must have userId and objectId");
    if (!typeId && !name && !description)
        throw new appError_1.AppError(400, "nothing to update");
    //checks user and object
    const objectsRepository = data_source_1.AppDataSource.getRepository(objects_entity_1.Itens);
    const object = yield objectsRepository.findOne({ where: { id: objectId }, relations: { user: true } });
    if (!object)
        throw new appError_1.AppError(404, "object not found");
    if (object.user.id != userId)
        throw new appError_1.AppError(404, "user not found");
    if (!object.user.isActive)
        throw new appError_1.AppError(400, "user is not active");
    //checks type
    const typesRepository = data_source_1.AppDataSource.getRepository(types_entity_1.Types);
    let type;
    if (typeId) {
        type = yield typesRepository.findOne({ where: { id: typeId } });
        if (!type)
            throw new appError_1.AppError(404, "type not found");
    }
    yield objectsRepository.update(objectId, { name, description, type });
    return { message: "Object updated" };
});
exports.updateObjectsService = updateObjectsService;
