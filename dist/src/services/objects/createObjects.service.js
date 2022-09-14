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
exports.createObjectsService = void 0;
const data_source_1 = require("../../data-source");
const objects_entity_1 = require("../../entities/objects.entity");
const types_entity_1 = require("../../entities/types.entity");
const users_entity_1 = require("../../entities/users.entity");
const appError_1 = require("../../erros/appError");
const createObjectsService = ({ typeId, userId, description, name }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!description || !name)
        throw new appError_1.AppError(400, "object must have name and description");
    if (!typeId || !userId)
        throw new appError_1.AppError(400, "object must have typeId and userId");
    //checks types
    const typesRepository = data_source_1.AppDataSource.getRepository(types_entity_1.Types);
    const type = yield typesRepository.findOne({ where: { id: typeId } });
    if (!type)
        throw new appError_1.AppError(404, "Type not found");
    if (!type.isActive)
        throw new appError_1.AppError(400, "Type is not active");
    //checks user
    const userRepository = data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    const user = yield userRepository.findOne({ where: { id: userId } });
    if (!user)
        throw new appError_1.AppError(404, "User not found");
    if (!user.isActive)
        throw new appError_1.AppError(400, "User is not active");
    //creation
    const newObject = new objects_entity_1.Itens();
    newObject.name = name;
    newObject.description = description;
    newObject.user = user;
    newObject.type = type;
    const objectsRepository = data_source_1.AppDataSource.getRepository(objects_entity_1.Itens);
    const createdObject = yield objectsRepository.save(newObject);
    return createdObject;
});
exports.createObjectsService = createObjectsService;
