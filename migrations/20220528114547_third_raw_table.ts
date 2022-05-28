import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`CREATE TABLE accounts (
        user_id serial PRIMARY KEY,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
    );`);

    return knex.schema.renameTable('accounts', 'accounts2');

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("accounts2")
}

