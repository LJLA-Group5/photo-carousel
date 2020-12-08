const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:psql');

// 200K userLists (1M favoriteListings so on average 5 listings per list)
const userListsStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoUserListsData.csv'));
userListsStream.write('listId, userId, faveList\n');
let userListsCount = 200000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const randomLists = ['ski cabins', 'beach villas', 'romantic stays', 'birthday places', 'party venues', 'glamping', 'nature spots', 'oceanside stays', 'unique spots', 'cozy cabins', 'weekend trips', 'girls trip'];

const genUserLists = () => {
  if (userListsCount === 0) return userListsStream.end();
  // random users will have lists, some users will have more than one list and some will have no lists
  // helper will add a random number of listings to each list (1 - 10)
  const addListings = (numListings) => {
    let listingArr = [];
    while (numListings > 0) {
      listingArr.push({from: `userId/${userId}`, to: `listingId/${genNumBtwn(1, 10000000)}`})
      numListings--;
    }
    return listingArr;
  }
  const listId = userListsCount;
  const userId = genNumBtwn(1, 10000000);
  const faveList = {
    listName: randomLists[listId % 12],
    favorites: addListings(genNumBtwn(1, 10))
  };
  const userListsEntry = `${listId}, ${userId}, ${JSON.stringify(faveList)}\n`;
  const streamOkay = userListsStream.write(userListsEntry);
  userListsCount -= 1;
  if (!streamOkay) userListsStream.once('drain', genUserLists);
  else genUserLists();
}

genUserLists();