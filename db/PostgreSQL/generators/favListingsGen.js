const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:psql');

// 1M favorite listings (200K userLists so on average 5 listings per list)
const favoriteListingsStream = fs.createWriteStream(path.join(__dirname, '/../data/psqlfavoriteListingsData.csv'));
favoriteListingsStream.write('favoriteId, listId, listingId, order\n');
let favoriteListingCount = 1000000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const genFavoriteListings = () => {
  if (favoriteListingCount === 0) return favoriteListingsStream.end();
  const favoriteId = favoriteListingCount;
  const listId = genNumBtwn(1, 200000);
  const listingId = genNumBtwn(1, 10000000);
  const order = favoriteListingCount;
  const favoriteListingEntry = `${favoriteId}, ${listId}, ${listingId}, ${order}\n`;
  const streamOkay = favoriteListingsStream.write(favoriteListingEntry);
  favoriteListingCount -= 1;
  if (!streamOkay) favoriteListingsStream.once('drain', genFavoriteListings);
  else genFavoriteListings();
}

genFavoriteListings();