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
exports.institutionCreateController = void 0;
const institutionsCreate_service_1 = __importDefault(require("../services/institutions/institutionsCreate.service"));
const institutionCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newInstitution = yield (0, institutionsCreate_service_1.default)(data);
    return res.status(201).send(newInstitution);
});
exports.institutionCreateController = institutionCreateController;
