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
const data_source_1 = require("../../data-source");
const Addresses_entities_1 = require("../../entities/Addresses.entities");
const appError_1 = require("../../erros/appError");
const updateAdressesService = (id, { city, state, number, cep, district }) => __awaiter(void 0, void 0, void 0, function* () {
    const AddressesesRepository = data_source_1.AppDataSource.getRepository(Addresses_entities_1.Addresseses);
    const DadosAddresseses = yield AddressesesRepository.find();
    const idExist = DadosAddresseses.find(user => user.id === id);
    if (!idExist) {
        throw new appError_1.AppError(404, "Address not found");
    }
    const dadosUpdateAdresses = {
        id: id,
        city,
        state,
        number,
        cep,
        district,
    };
    const updateUser = yield AddressesesRepository.save(dadosUpdateAdresses);
    return updateUser;
});
exports.default = updateAdressesService;
