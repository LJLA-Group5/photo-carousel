const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:arango');

// 10M listings
const listingsStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoListingsData.json'));
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
// kept listingStars as string and listingNumReviews as number since that is what the front end expects
const genListings = () => {
  if (listingCount === 0) return listingsStream.end();
  let listingEntry = {
    _key: `${listingCount}`,
    listingName: faker.lorem.words(3),
    listingLocation: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    listingStars: getListingStars(),
    listingNumReviews: genNumBtwn(10, 1000),
    // get a random number of photos per listing between 10 and 30
    photos : getPhotoUrls(genNumBtwn(10, 30))
  }
  const streamOkay = listingsStream.write(`${JSON.stringify(listingEntry)}\n`);
  listingCount -= 1;
  if (!streamOkay) listingsStream.once('drain', genListings);
  else genListings();
}

genListings();