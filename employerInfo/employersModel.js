const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    update,
    findById,
    remove
}

function find() {
    return db('employers');
}

async function add(employer) {
    const [id] = await db('employers').insert(employer);

    return findById(id)
}

function findById(id) {
    return db('employers').where({ id }).first();
}

function update(changes, id) {
    return db('employers').where({ id }).update(changes);
}

function remove(id) {
    return db('employers').where({ id }).del();
}

