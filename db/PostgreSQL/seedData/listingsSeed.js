const seeder = require('./seeder');

const listingsTable = `
  DROP TABLE IF EXISTS listings;
  CREATE TABLE listings (
    listingId SERIAL PRIMARY KEY,
    listingName VARCHAR(60) NOT NULL,
    listingLocation VARCHAR(60) NOT NULL,
    listingStars REAL,
    listingNumReviews SMALLINT,
    photos TEXT[]
  );
`;

const importData = `
  COPY listings (listingId, listingName, listingLocation, listingStars, listingNumReviews, photos)
  FROM '${process.env.PG_LISTINGS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seeder('listings', listingsTable, importData);
