DROP SCHEMA airbnb CASCADE;
CREATE SCHEMA airbnb;

-- 10M listings
CREATE TABLE airbnb.listingDetails (
  listingId SERIAL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingLocation VARCHAR(100) NOT NULL,
  listingStars REAL,
  listingNumReviews SMALLINT,
  photos VARCHAR[]
);

CREATE TABLE airbnb.users (
  userId SERIAL PRIMARY KEY,
  userName VARCHAR(100) NOT NULL
);

CREATE TABLE airbnb.userLists (
  listName VARCHAR(100) NOT NULL,
  userId INT REFERENCES users(userId),
);

-- join table
CREATE TABLE airbnb.favoriteListings (
  favoriteId SERIAL PRIMARY KEY,
  listName VARCHAR(100) REFERENCES userLists(listName),
  listingId INT REFERENCES listingDetails(listingId),
  order SMALLINT NOT NULL
  -- order 1 is favorite pic
);

-- will benchmark embedded photo arr and seperate photo table later, but for now since query speed for patch/post does not matter since I will not need to change the order of the photos or add/delete a photo, I will use an embedded photo arr
-- CREATE TABLE airbnb.listingPhotos (
--   photoId SERIAL PRIMARY KEY,
--   listingId INT REFERENCES listingDetails(listingId),
--   photoUrl VARCHAR(250) NOT NULL,
-- );