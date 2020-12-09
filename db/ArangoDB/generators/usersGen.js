const fs = require('fs');
const faker = require('faker');
const path = require('path');

// const debug = require('debug')('app:gen:arango');

// 10M users
const usersStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoUsersData.csv'));
usersStream.write('_key, userName\n');
let userCount = 10000000;

const genUsers = () => {
  if (userCount === 0) return usersStream.end();
  const _key = userCount;
  const userName = faker.internet.userName();
  const userEntry = `${_key}, ${userName}\n`;
  const streamOkay = usersStream.write(userEntry);
  userCount -= 1;
  if (!streamOkay) usersStream.once('drain', genUsers);
  else genUsers();
}

genUsers();