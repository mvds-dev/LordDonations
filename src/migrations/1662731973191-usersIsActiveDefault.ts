import { MigrationInterface, QueryRunner } from "typeorm";

export class usersIsActiveDefault1662731973191 implements MigrationInterface {
    name = 'usersIsActiveDefault1662731973191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
