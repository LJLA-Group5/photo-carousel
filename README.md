# Airbnb Item Detail Page: Photo Carousel

Front-End: TimothyAkana

Back-End: Lucyyxc

## Table of Contents

1. [API Docs](#API)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## API

1. Create / POST: add favorite
    * __Endpoint__: '/api/photo-carousel/favorites/'
    * __Path Params__: none
    * __Request Body__: Expects JSON with the following keys
    ```json
        {
          userId: Number,
          listName: String,
          favoriteLists: Array,
          favoritePicture: String,
        }
    ```
    * __Response Object__: Status code 201
    ```json
        {
          _id: Number,
          userId: Number,
          listName: String,
          favoriteLists: Array,
          favoritePicture: String,
        }
    ```
1. Read / GET: get listing photos
    * __Endpoint__: '/api/photo-carousel/:id/photos/'
    * __Path Params__: listingId
    * __Request Body__: { listingId: id }
    * __Response Object__: JSON
    ```json
        {
          id: Number,
          listingId: Number,
          photo: String,
          description: String,
          listingName: String,
          listingStars: Number,
          listingNumReviews: Number,
          listingLocation: String,
        }
    ```
1. Read / GET: get user favorites
    * __Endpoint__: '/api/photo-carousel/favorites/:userId/'
    * __Path Params__: userId
    * __Request Body__: { userId: userId }
    * __Response Object__: JSON
    ```json
        {
          _id: Number,
          userId: Number,
          listName: String,
          favoriteLists: Array,
          favoritePicture: String,
        }
    ```
1. Update / PUT: update user favorites
    * __Endpoint__: '/api/photo-carousel/favorites/'
    * __Path Params__: none
    * __Request Body__: { userId: userId, listName: listName }
    * __Response Object__: { userId: userId, listName: listName }

1. Delete / DELETE: delete listing
    * __Endpoint__: '/api/photo-carousel/:id/photos/'
    * __Path Params__: listingId
    * __Request Body__: { listingId: id }
    * __Response Object__: Status code 204

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Style Guide
Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).


