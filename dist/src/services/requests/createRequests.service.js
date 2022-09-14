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
exports.createRequestsService = void 0;
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const requests_entity_1 = require("../../entities/requests.entity");
const types_entity_1 = require("../../entities/types.entity");
const appError_1 = require("../../erros/appError");
const createRequestsService = ({ typeId, institutionId, quantity, description }) => __awaiter(void 0, void 0, void 0, function* () {
    //checks input
    if (!typeId || !quantity || !description) {
        throw new appError_1.AppError(400, "Requests must have typeId, quantity and description");
    }
    if (typeof quantity != "number" && typeof description != "string") {
        throw new appError_1.AppError(400, "quantity must be a number and description a string");
    }
    //finds and checks type
    const typesRepository = data_source_1.AppDataSource.getRepository(types_entity_1.Types);
    const type = yield typesRepository.findOne({ where: { id: typeId } });
    if (!type)
        throw new appError_1.AppError(404, "Type not found");
    if (!type.isActive)
        throw new appError_1.AppError(400, "Type is not active");
    //finds and checks institution
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions);
    const institution = yield institutionsRepository.findOne({ where: { id: institutionId } });
    if (!institution)
        throw new appError_1.AppError(404, "Institution not found");
    if (!institution.isActive)
        throw new appError_1.AppError(400, "Institution is not active");
    //creates request
    const requestsRepository = data_source_1.AppDataSource.getRepository(requests_entity_1.Requests);
    const newRequest = new requests_entity_1.Requests();
    newRequest.quantity = quantity;
    newRequest.description = description;
    newRequest.type = type;
    newRequest.institution = institution;
    const createdRequest = yield requestsRepository.save(newRequest);
    return createdRequest;
});
exports.createRequestsService = createRequestsService;
