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
exports.Types = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const requests_entity_1 = require("./requests.entity");
const objects_entity_1 = require("./objects.entity");
let Types = class Types {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Types.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Types.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Types.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Types.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => requests_entity_1.Requests, (requests) => requests.type),
    __metadata("design:type", Array)
], Types.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => objects_entity_1.Itens, Itens => Itens.type),
    __metadata("design:type", Array)
], Types.prototype, "objects", void 0);
Types = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Types);
exports.Types = Types;
