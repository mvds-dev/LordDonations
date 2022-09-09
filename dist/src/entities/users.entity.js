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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Addresses_entities_1 = require("./Addresses.entities");
const objects_entity_1 = require("./objects.entity");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Users.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Users.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "createdAt" }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updatedAt" }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Addresses_entities_1.Addresseses, {
        eager: true //,onDelete:"CASCADE"
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Addresses_entities_1.Addresseses)
], Users.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => objects_entity_1.Itens, Itens => Itens.user),
    __metadata("design:type", Array)
], Users.prototype, "objects", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
