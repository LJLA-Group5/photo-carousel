const seeder = require('./seeder');

const userListsTable = `
  DROP TABLE IF EXISTS userLists;
  CREATE TABLE userLists (
    listId SERIAL PRIMARY KEY,
    userId INT REFERENCES users(userId),
    listName VARCHAR(40) NOT NULL
  );
`;

const importData = `
  COPY userLists (listId, userId, listName)
  FROM '${process.env.PG_USER_LISTS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seeder('userLists', userListsTable, importData);