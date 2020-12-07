DROP SCHEMA airbnb CASCADE;
CREATE SCHEMA airbnb;

-- 10M listings
CREATE TABLE airbnb.listingDetails (
  listingId SERIAL PRIMARY KEY,
  listingName VARCHAR(60) NOT NULL,
  listingLocation VARCHAR(60) NOT NULL,
  listingStars REAL,
  listingNumReviews SMALLINT,
  photos VARCHAR[]
);

CREATE TABLE airbnb.users (
  userId SERIAL PRIMARY KEY,
  userName VARCHAR(40) NOT NULL
);

CREATE TABLE airbnb.userLists (
  listId SERIAL PRIMARY KEY,
  userId INT REFERENCES users(userId),
  listName VARCHAR(40) NOT NULL
);

-- join table
CREATE TABLE airbnb.favoriteListings (
  favoriteId SERIAL PRIMARY KEY,
  listId INT REFERENCES userLists(listId),
  listingId INT REFERENCES listingDetails(listingId),
  order SERIAL SMALLINT NOT NULL
  -- smallest order is favorite pic (first liked)
);

-- will benchmark embedded photo arr and seperate photo table later, but for now since query speed for patch/post does not matter since I will not need to change the order of the photos or add/delete a photo, I will use an embedded photo arr
-- CREATE TABLE airbnb.listingPhotos (
--   photoId SERIAL PRIMARY KEY,
--   listingId INT REFERENCES listingDetails(listingId),
--   photoUrl VARCHAR(250) NOT NULL,
-- );