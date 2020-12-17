// require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('../db/controller.js');

const PORT = 3001;
const PATH = path.join(__dirname, '/../client/dist');
const app = express();

app.get('/loaderio-f62bcf56d2bf715737f4d966bc4bc47f', (req, res) => {res.send('loaderio-f62bcf56d2bf715737f4d966bc4bc47f')});

app.use('/:id/', express.static(PATH));
app.use(bodyParser.json());

app.get('/api/photo-carousel/:id/photos/', database.getPhotos);

// app.get('/api/photo-carousel/favorites/:userId/', database.getFavorites);

// app.post('/api/photo-carousel/favorites/', database.postFavorite);

// app.put('/api/photo-carousel/favorites/', database.updateFavorite);

app.listen(PORT, () => { console.log('server is listening at port ', PORT); });
