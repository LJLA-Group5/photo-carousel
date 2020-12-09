require('dotenv').config({path:`${__dirname}/../../../.env`});const debug = require('debug')('app:psql:seed');
// PostgreSQL's node client
const {Client} = require('pg');

async function seeder(table, genTableQuery, getDataQuery) {
  const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASS,
    port: process.env.PG_PORT,
  });
  try {
    debug(`Seeding ${table}`);
    await client.connect();
    debug(`Connected to ${process.env.PG_DB}`);
    await client.query(genTableQuery);
    debug(`Generated ${table} table`);
    await client.query(getDataQuery);
    debug(`Imported ${table} data`);
  } catch (err) {
    console.log(err);
  }
  client.end();
  debug(`Success! Finished seeding ${table}`);
};


module.exports = seeder;