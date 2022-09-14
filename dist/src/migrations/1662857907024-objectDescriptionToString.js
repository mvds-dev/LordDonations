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
exports.objectDescriptionToString1662857907024 = void 0;
class objectDescriptionToString1662857907024 {
    constructor() {
        this.name = 'objectDescriptionToString1662857907024';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "objects" DROP COLUMN "description"`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD "description" character varying NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "objects" DROP COLUMN "description"`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD "description" integer NOT NULL`);
        });
    }
}
exports.objectDescriptionToString1662857907024 = objectDescriptionToString1662857907024;
