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
const users_entity_1 = require("../../entities/users.entity");
const appError_1 = require("../../erros/appError");
const deleteUserService = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    const user = yield userRepository.findOne({ where: { id: id } });
    if (!user) {
        throw new appError_1.AppError(404, "User does not exist");
    }
    if ((user === null || user === void 0 ? void 0 : user.isActive) == false) {
        throw new appError_1.AppError(400, "Inactive User");
    }
    yield userRepository.update({ id: id }, {
        isActive: false
    });
});
exports.default = deleteUserService;
