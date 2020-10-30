const { table } = require("console");

exports.up = function (knex) {
    return knex.schema
        .createTable('employers', tbl => {
            tbl.increments();
            tbl.string('name_title', 128).notNullable();
            tbl.string('company', 128).notNullable();
            tbl.string('phone_number', 15).notNullable().unique();
            tbl.string('email', 128).notNullable().unique();
            tbl.string('comm_instructions');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('employers');

};
