const seeder = require('./seeder');

const favoriteListingsTable = `
  DROP TABLE IF EXISTS favoriteListings;
  CREATE TABLE favoriteListings (
    favoriteId SERIAL PRIMARY KEY,
    listId INT REFERENCES userLists(listId),
    listingId INT REFERENCES listings(listingId)
  );
`;

const importData = `
  COPY favoriteListings (favoriteId, listId, listingId)
  FROM '${process.env.PG_FAVORITE_LISTINGS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seeder('favoriteListings', favoriteListingsTable, importData);