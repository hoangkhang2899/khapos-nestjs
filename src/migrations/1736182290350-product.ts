import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1736182290350 implements MigrationInterface {
    name = 'Product1736182290350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "siteId" character varying NOT NULL, "createdBy" character varying, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying, "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" numeric(18,2) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
