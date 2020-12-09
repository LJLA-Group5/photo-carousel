const seeder = require('./seeder');

const usersTable = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(40) NOT NULL
  );
`;

const importData = `
  COPY users (userId, userName)
  FROM '${process.env.PG_USERS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;
seeder('users', usersTable, importData);