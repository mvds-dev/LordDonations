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
exports.deleteRequestsService = void 0;
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const requests_entity_1 = require("../../entities/requests.entity");
const appError_1 = require("../../erros/appError");
const deleteRequestsService = (requestId, institutionId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!requestId || !institutionId)
        throw new appError_1.AppError(400, "wrong format");
    //checks institution
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions);
    const institution = yield institutionsRepository.findOne({ where: { id: institutionId }, relations: { requests: true } });
    if (!institution)
        throw new appError_1.AppError(404, "Institution not found");
    //checks request
    const request = institution.requests.find(request => request.id === requestId);
    if (!request)
        throw new appError_1.AppError(404, "Request not found");
    //deletes request
    const requestsRepository = data_source_1.AppDataSource.getRepository(requests_entity_1.Requests);
    yield requestsRepository.delete(requestId);
});
exports.deleteRequestsService = deleteRequestsService;
