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
exports.FixUserTable1662724435486 = void 0;
class FixUserTable1662724435486 {
    constructor() {
        this.name = 'FixUserTable1662724435486';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "addresseses" ("id" uuid NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "number" character varying NOT NULL, "cep" character varying NOT NULL, "district" character varying NOT NULL, CONSTRAINT "PK_ced74f801093e7aee7db11aefbf" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "statuses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_037e43ea842b18ce4e5f4dcfd06" UNIQUE ("name"), CONSTRAINT "PK_2fd3770acdb67736f1a3e3d5399" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "cpf" character varying NOT NULL, "isActive" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "objects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" integer NOT NULL, "statusId" uuid, "userId" uuid, "typeId" uuid, "institutionId" uuid, CONSTRAINT "PK_87b86663af0123508099f0d970a" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "types" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_fa170fda66d232af69b7f880c9e" UNIQUE ("name"), CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "requests" ("id" uuid NOT NULL, "quantity" integer NOT NULL DEFAULT '0', "description" character varying, "institutionId" uuid, "typeId" uuid NOT NULL, CONSTRAINT "PK_0428f484e96f9e6a55955f29b5f" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "institutions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cnpj" character varying NOT NULL, "password" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "addressId" uuid, CONSTRAINT "UQ_8d110b8f5288cfb6d0e10d938cb" UNIQUE ("email"), CONSTRAINT "REL_8e500098fa33bf92132cd66ca2" UNIQUE ("addressId"), CONSTRAINT "PK_0be7539dcdba335470dc05e9690" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresseses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD CONSTRAINT "FK_181665419c155b44fdd9ab9b40f" FOREIGN KEY ("statusId") REFERENCES "statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD CONSTRAINT "FK_34208be3b063059a9c01d592aff" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD CONSTRAINT "FK_a355e7505a0635a6d850f1f3ebb" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "objects" ADD CONSTRAINT "FK_8daf11546d8bb043799c3cf00b4" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_30f41add9c308e44fed5cb9dd80" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_8b20410fffaab92ff12b1973538" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "institutions" ADD CONSTRAINT "FK_8e500098fa33bf92132cd66ca2d" FOREIGN KEY ("addressId") REFERENCES "addresseses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "institutions" DROP CONSTRAINT "FK_8e500098fa33bf92132cd66ca2d"`);
            yield queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_8b20410fffaab92ff12b1973538"`);
            yield queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_30f41add9c308e44fed5cb9dd80"`);
            yield queryRunner.query(`ALTER TABLE "objects" DROP CONSTRAINT "FK_8daf11546d8bb043799c3cf00b4"`);
            yield queryRunner.query(`ALTER TABLE "objects" DROP CONSTRAINT "FK_a355e7505a0635a6d850f1f3ebb"`);
            yield queryRunner.query(`ALTER TABLE "objects" DROP CONSTRAINT "FK_34208be3b063059a9c01d592aff"`);
            yield queryRunner.query(`ALTER TABLE "objects" DROP CONSTRAINT "FK_181665419c155b44fdd9ab9b40f"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
            yield queryRunner.query(`DROP TABLE "institutions"`);
            yield queryRunner.query(`DROP TABLE "requests"`);
            yield queryRunner.query(`DROP TABLE "types"`);
            yield queryRunner.query(`DROP TABLE "objects"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "statuses"`);
            yield queryRunner.query(`DROP TABLE "addresseses"`);
        });
    }
}
exports.FixUserTable1662724435486 = FixUserTable1662724435486;
