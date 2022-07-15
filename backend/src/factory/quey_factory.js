const util = require('util');
const connection = require('../../config/connection');
const query = util.promisify(connection.query).bind(connection);

async function factory(sql) {
    try {
        let sql_query = sql;
        const res = await query(sql_query);
        return res
        console.log(query);
    } catch (err) {
        console.log(`There was an error ${err}`);
        return err;
    }
}

module.exports = {
    connection,
    factory
}