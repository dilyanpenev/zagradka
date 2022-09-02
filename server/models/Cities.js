const mongoose = require('mongoose');
const config = require('../config');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    oblast: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    railway: {
        type: Boolean,
        required: true,
    },
});

// Duplicate the ID field.
CitySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

CitySchema.set('toJSON', {
    virtuals: true
});

const CityModel = mongoose.model(config.cityCollectionName, CitySchema);
module.exports = CityModel;