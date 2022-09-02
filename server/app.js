const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const seedrandom = require('seedrandom');
const config = require('./config');
const CityModel = require('./models/Cities');

const app = express();
app.use(cors());

mongoose.connect(config.mongoDBConnectionString);

const port = process.env.PORT || config.serverPort;

app.get('/city-api/getTodaysCity', (_req, res) => {
    // seed the random number generator with today's date
    const rng = seedrandom(new Date().toISOString().slice(0, 10));
    const randomNumber = rng();
    const todayIndex = Math.floor(randomNumber * 257)
    // TODO add .skip(todayIndex) when DB is populated
    CityModel.findOne().select('name').exec((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
})