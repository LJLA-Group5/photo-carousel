const db = require('./connection.js');

module.exports = {
  getPhotos: (req, res, next) => {
    db.pool.query('SELECT * FROM listings WHERE listingId = $1', [req.params.id], (err, results) => {
      if (err) {
        console.log('err getting photos', err);
        res.sendStatus(404);
      } else {
        res.status(200).json(results.rows);
      }
    });
  },

  // getFavorites: (req, res) => {
  //   db.UserFavorite.find({ userId: req.params.userId }, (err, results) => {
  //     if (err) {
  //       res.sendStatus(404);
  //     } else {
  //       res.json(results);
  //     }
  //   });
  // },

  // postFavorite: (req, res) => {
  //   db.UserFavorite.create(req.body, (err, results) => {
  //     if (err) {
  //       res.sendStatus(400);
  //     } else {
  //       res.json(results);
  //     }
  //   });
  // },

  // updateFavorite: (req, res) => {
  //   const { userId, listName } = req.body;
  //   db.UserFavorite.updateOne({ userId, listName }, req.body, (err) => {
  //     if (err) {
  //       res.sendStatus(400);
  //     } else {
  //       res.json(req.body);
  //     }
  //   });
  // },
};
