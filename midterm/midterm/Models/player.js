/**
 * Created by Brandon Roy on 21/10/2016.
 */

var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name'
    },

    lastName: {
        type: String,
        required: 'last name'
    },

    playerNumber: {
        type: Number,
        min: 0
    },

});
module.exports = mongoose.model('players', playerSchema);