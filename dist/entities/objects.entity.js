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
exports.Itens = void 0;
const typeorm_1 = require("typeorm");
const status_entity_1 = require("./status.entity");
const types_entity_1 = require("./types.entity");
const users_entity_1 = require("./users.entity");
const institution_entity_1 = require("./institution.entity");
let Itens = class Itens {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Itens.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Itens.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Itens.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, (Status) => Status.objects),
    __metadata("design:type", status_entity_1.Status)
], Itens.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (Users) => Users.objects),
    __metadata("design:type", users_entity_1.Users)
], Itens.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => types_entity_1.Types, (Types) => Types.objects),
    __metadata("design:type", types_entity_1.Types)
], Itens.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => institution_entity_1.Institutions, (Institutions) => Institutions.objects),
    __metadata("design:type", institution_entity_1.Institutions)
], Itens.prototype, "institution", void 0);
Itens = __decorate([
    (0, typeorm_1.Entity)('objects')
], Itens);
exports.Itens = Itens;
