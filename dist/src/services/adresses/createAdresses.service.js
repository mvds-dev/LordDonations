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
const appError_1 = require("../../erros/appError");
const Addresses_entities_1 = require("../../entities/Addresses.entities");
const uuid_1 = require("uuid");
// // import bcrypt from "bcrypt";
const adressesCreateService = ({ city, state, number, cep, district }) => __awaiter(void 0, void 0, void 0, function* () {
    const AddressesesRepository = data_source_1.AppDataSource.getRepository(Addresses_entities_1.Addresseses);
    if (!city || !state || !number || !cep || !district) {
        throw new appError_1.AppError(400, "Wrong format");
    }
    const DadosAddresseses = yield AddressesesRepository.find();
    const cepAlreadyExists = DadosAddresseses.find(user => user.cep === cep);
    // const numberAlreadyExists = DadosAddresseses.find(user => user.number === number)
    if (cepAlreadyExists) {
        throw new appError_1.AppError(409, "address already exists");
    }
    const myID = (0, uuid_1.v4)();
    const newAddresseses = {
        "id": myID,
        "city": city,
        "state": state,
        "number": number,
        "cep": cep,
        "district": district
    };
    AddressesesRepository.create(newAddresseses);
    yield AddressesesRepository.save(newAddresseses);
    return newAddresseses;
});
exports.default = adressesCreateService;
