const fs = require('fs');
const path = require('path');

// 1M edges since there are 200K userLists and 1M favoriteListings so on average 5 listings per list
const edgeFromUserListsStream = fs.createWriteStream(path.join(__dirname, '/../data/arangoEdgeFromUserListsData.json'));
// edgeFromUserListsStream.write('_from, _to\n');
let edgeFromUserListsCount = 1000000;

const genNumBtwn = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const genEdgeFromUserLists = () => {
  if (edgeFromUserListsCount === 0) return edgeFromUserListsStream.end();
  let edgeFromUserListsEntry = {
    _from : `userLists/${genNumBtwn(1, 200000)}`,
    _to : `listings/${genNumBtwn(1, 10000000)}`
  }
  // const edgeFromUserListsEntry = `${_from}, ${_to}\n`;
  const streamOkay = edgeFromUserListsStream.write(`${JSON.stringify(edgeFromUserListsEntry)}\n`);
  edgeFromUserListsCount -= 1;
  if (!streamOkay) edgeFromUserListsStream.once('drain', genEdgeFromUserLists);
  else genEdgeFromUserLists();
}

genEdgeFromUserLists();