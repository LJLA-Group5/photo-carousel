const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:psql');

// 200K userLists (1M favoriteListings so on average 5 listings per list)
const userListsStream = fs.createWriteStream(path.join(__dirname, '/../data/psqlUserListsData.csv'));
userListsStream.write('listId, userId, listName\n');
let userListsCount = 200000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const randomLists = ['ski cabins', 'beach villas', 'romantic stays', 'birthday places', 'party venues', 'glamping', 'nature spots', 'oceanside stays', 'unique spots', 'cozy cabins', 'weekend trips', 'girls trip'];

const genUserLists = () => {
  if (userListsCount === 0) return userListsStream.end();
  // random users will have lists, some users will have more than one list and some will have no lists
  const listId = userListsCount;
  const userId = genNumBtwn(1, 10000000);
  const listName = randomLists[listId % 12];
  const userListsEntry = `${listId}, ${userId}, ${listName}\n`;
  const streamOkay = userListsStream.write(userListsEntry);
  userListsCount -= 1;
  if (!streamOkay) userListsStream.once('drain', genUserLists);
  else genUserLists();
}

genUserLists();