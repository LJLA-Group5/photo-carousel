const fs = require('fs');
const path = require('path');

// 200K edges since there are 200K userLists (1M favoriteListings so on average 5 listings per list)
const edgeFromUsersStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoEdgeFromUsersData.json'));
// edgeFromUsersStream.write('_from, _to\n');
let edgeFromUsersCount = 200000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const genEdgeFromUsers = () => {
  if (edgeFromUsersCount === 0) return edgeFromUsersStream.end();
  let edgeFromUsersEntry = {
    _from : `users/${genNumBtwn(1, 10000000)}`,
    _to : `userLists/${genNumBtwn(1, 200000)}`
  }
  // const edgeFromUsersEntry = `${_from}, ${_to}\n`;
  const streamOkay = edgeFromUsersStream.write(`${JSON.stringify(edgeFromUsersEntry)}\n`);
  edgeFromUsersCount -= 1;
  if (!streamOkay) edgeFromUsersStream.once('drain', genEdgeFromUsers);
  else genEdgeFromUsers();
}

genEdgeFromUsers();