var Database = require('arangojs').Database;
db = new Database();
db.useBasicAuth('root', '');

db.dropDatabase('airbnb');

db.createDatabase('airbnb')
  .then(cb)
  function cb() {
    db.useDatabase('airbnb');

    var listingSchema = {
      'rule': {
        'type': 'object',
        'properties': {
          'listingId': {
            'type': 'number',
          },
          'listingName': {
            'type': 'string',
          },
          'listingLocation': {
            'type': 'string',
          },
          'listingStars': {
            'type': 'number',
          },
          'listingNumReviews': {
            'type': 'number',
          },
          'photos': {
            // arr of urls
            'type': 'array',
          },
        },
      },
    }

    var listingCollection = db.collection('listings');
    listingCollection.create({ 'schema': listingSchema })
      .then(() => console.log('success on creating listing collection!'))
      .catch(() => console.log('sad no listing collection'))

  var userSchema = {
    'rule': {
      'type': 'object',
      'properties': {
        'userId': {
          'type': 'number'
        },
        'userName': {
          'type': 'string'
        },
        'favLists': {
          'type': 'array',
          'list': {
            'title': 'list',
            'type': 'object',
            'properties': {
              'listId': {
                'type': 'number'
              },
              'listName': {
                'type': 'string'
              },
              'favorites': {
                'type': 'array',
                'items': {
                  'type': 'number',
                  'description': 'listingId of favorite'
                }
              }
            }
          }
        }
      }
    }
  }
  var userCollection = db.collection('users');
  userCollection.create({ 'schema': userSchema })
    .then(() => console.log('success on creating users collection!'))
    .catch(() => console.log('sad no users collection'))
};

