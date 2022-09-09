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
exports.Requests = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const institution_entity_1 = require("./institution.entity");
const types_entity_1 = require("./types.entity");
let Requests = class Requests {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Requests.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Requests.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => institution_entity_1.Institutions, (institution) => institution.requests, {
        onDelete: "SET NULL",
    }),
    __metadata("design:type", institution_entity_1.Institutions)
], Requests.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => types_entity_1.Types, (types) => types.request, { nullable: false }),
    __metadata("design:type", types_entity_1.Types)
], Requests.prototype, "type", void 0);
Requests = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Requests);
exports.Requests = Requests;
