import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1618402933577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:" INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY",
                    generationStrategy:'increment'
                },
                {
                    name:"email",
                    type:"varchar",
                    isUnique:true,
                },
                {
                    name:"password",
                    type:"varchar",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users');

    }

}
