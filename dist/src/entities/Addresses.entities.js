"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresseses = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Addresseses = class Addresseses {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Addresseses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Addresseses.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Addresseses.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Addresseses.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Addresseses.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Addresseses.prototype, "district", void 0);
Addresseses = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Addresseses);
exports.Addresseses = Addresseses;
