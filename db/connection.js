const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: '13.57.42.153', // change it to ip address of VM
  database: 'airbnb',
  password: 'mypass',
  port: 5432
})

pool.connect(function(err) {
  if (err) {
    console.log('err connecting:' + err);
    return;
  }
  console.log('connected to psql!');
})

module.exports.pool = pool;





// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/photoCarousel', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('connected to mongoose!'));

// const photoCarouselSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     unique: true,
//   },
//   listingId: Number,
//   photo: String,
//   description: String,
//   listingName: String,
//   listingStars: Number,
//   listingNumReviews: Number,
//   listingLocation: String,
// });

// const userFavoritesSchema = new mongoose.Schema({
//   userId: Number,
//   listName: String,
//   favoriteLists: Array,
//   favoritePicture: String,
// });

// const PhotoCarousel = mongoose.model('photoCarousel', photoCarouselSchema);
// const UserFavorite = mongoose.model('userFavorites', userFavoritesSchema);

// module.exports.PhotoCarousel = PhotoCarousel;
// module.exports.UserFavorite = UserFavorite;
