import { MigrationInterface, QueryRunner } from "typeorm";

export class objectDescriptionToString1662857907024 implements MigrationInterface {
    name = 'objectDescriptionToString1662857907024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objects" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "objects" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objects" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "objects" ADD "description" integer NOT NULL`);
    }

}
