import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('test', function (table) {
        table.increments('id');
        table.string('test_first_name', 255).notNullable();
        table.string('test_name', 255).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("test")
}

