"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const institution_entity_1 = require("../../entities/institution.entity");
const institutionsListService = () => {
    const institutionsRepository = data_source_1.AppDataSource.getRepository(institution_entity_1.Institutions)
        .createQueryBuilder("institution")
        .select([
        "institution.id",
        "institution.name",
        "institution.email",
        "institution.cnpj",
        "institution.address",
        "institution.isActive",
        "institution.createdAt",
        "institution.updatedAt",
    ])
        .getMany();
    return institutionsRepository;
};
exports.default = institutionsListService;
