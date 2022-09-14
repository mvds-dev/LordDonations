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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdressesControler = exports.deleteAdressesControler = exports.listAdressesControler = exports.createAdressesControler = void 0;
require("express-async-errors");
const createAdresses_service_1 = __importDefault(require("../services/adresses/createAdresses.service"));
const listAdresses_service_1 = __importDefault(require("../services/adresses/listAdresses.service"));
const deleteAdresses_service_1 = __importDefault(require("../services/adresses/deleteAdresses.service"));
const updateAdresses_services_1 = __importDefault(require("../services/adresses/updateAdresses.services"));
const createAdressesControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, state, number, cep, district } = req.body;
    const newAdresses = yield (0, createAdresses_service_1.default)({ city, state, number, cep, district });
    return res.status(201).send(newAdresses);
});
exports.createAdressesControler = createAdressesControler;
const listAdressesControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAdresses = yield (0, listAdresses_service_1.default)();
    return res.status(201).send(listAdresses);
});
exports.listAdressesControler = listAdressesControler;
const deleteAdressesControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(typeof req.params.id)
    const deleteAdresses = yield (0, deleteAdresses_service_1.default)(req.params.id);
    return res.status(204).send();
});
exports.deleteAdressesControler = deleteAdressesControler;
const updateAdressesControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, state, number, cep, district } = req.body;
    const listAdresses = yield (0, updateAdresses_services_1.default)(req.params.id, { city, state, number, cep, district });
    return res.status(201).send(listAdresses);
});
exports.updateAdressesControler = updateAdressesControler;
