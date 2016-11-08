/**
 * Created by Brandon Roy on 23/09/2016.
 */



var accounting = require('accounting');

var amount = 98.2458;

amount = accounting.formatMoney(amount, { "symbol": ""});

console.log(amount)