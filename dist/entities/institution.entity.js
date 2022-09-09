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
exports.Institutions = void 0;
const typeorm_1 = require("typeorm");
const Addresses_entities_1 = require("./Addresses.entities");
const requests_entity_1 = require("./requests.entity");
const objects_entity_1 = require("./objects.entity");
let Institutions = class Institutions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Institutions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Institutions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Institutions.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Institutions.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Institutions.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "createAt" }),
    __metadata("design:type", Date)
], Institutions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updatedAt" }),
    __metadata("design:type", Date)
], Institutions.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => requests_entity_1.Requests, (requests) => requests.institution, { onDelete: "SET NULL" }),
    __metadata("design:type", Array)
], Institutions.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Institutions.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Addresses_entities_1.Addresseses, {
        eager: true //,onDelete:"CASCADE"
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Addresses_entities_1.Addresseses)
], Institutions.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => objects_entity_1.Itens, Itens => Itens.institution),
    __metadata("design:type", Array)
], Institutions.prototype, "objects", void 0);
Institutions = __decorate([
    (0, typeorm_1.Entity)("institutions")
], Institutions);
exports.Institutions = Institutions;
