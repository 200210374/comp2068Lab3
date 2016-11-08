/**
 * Created by Brandon Roy on 21/10/2016.
 */

var express = require('express');
var router = express.Router();

var players = require('../models/player');

router.get('/players', function(req, res, next) {
    players.find(function(err, teams) {
        if (err) {
            console.log(err);
            res.redirect('error');
        }
        else {

            res.render('players', {
                title: 'players',
                players: players
            })
        }
    });
});


module.exports = router;
