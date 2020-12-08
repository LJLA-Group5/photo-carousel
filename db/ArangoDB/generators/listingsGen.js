const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:psql');

// 10M listings
const listingsStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoListingsData.csv'));
listingsStream.write('listingId, listingName, listingLocation, listingStars, listingNumReviews, photos\n');
let listingCount = 10000000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);
const getListingStars = () => (Math.random() * 5).toFixed(2);
const getPhotoUrls = (numPhotos) => {
  const getUrl = () => `https://s3-us-west-1.amazonaws.com/sdc.airbnb/SDC+pictures/${genNumBtwn(1, 1000)}airbnb.jpg`;
  let photoArr = [];
  while (numPhotos > 0) {
    photoArr.push(getUrl());
    numPhotos--;
  }
  return photoArr;
}

const genListings = () => {
  if (listingCount === 0) return listingsStream.end();
  const listingId = listingCount;
  const listingName = faker.lorem.words(3);
  const listingLocation = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
  const listingStars = getListingStars();
  const listingNumReviews = genNumBtwn(10, 1000);
  // get a random number of photos per listing between 10 and 30
  const photos = getPhotoUrls(genNumBtwn(10, 30));
  const listingEntry = `${listingId}, ${listingName}, ${listingLocation}, ${listingStars}, ${listingNumReviews}, ${photos}\n`;
  const streamOkay = listingsStream.write(listingEntry);
  listingCount -= 1;
  if (!streamOkay) listingsStream.once('drain', genListings);
  else genListings();
}

genListings();