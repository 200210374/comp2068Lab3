/**
 * Created by Brandon Roy on 23/09/2016.
 */

var connect = require('connect');


var url = require('url');
var accounting = require('accounting');

var app = new connect();

var hello =function(res, next) {
res.end('HelloWorld');

}

var generic = function (res, next) {
    res.end('nodemon is running');
    res.render('/default.html');
}

    var goodbye = function(res, next) {
        res.end('Goodbye world');
}

var calculatetax = function(req, res, next) {
var qs = url.parse(req, url, true).query;
    var subTotal = qs.subtotal;
    //http:localhost.3000/calculatetax?subtotal=39.99

    var tax = parseFloat (subTotal) * 0.13;
    //calculate total
    var total = parseFloat(tax) + parseFloat(subTotal);

    res.end('subTotal: ' + accounting.formatMoney(subTotal) + + '\n' +
    'Tax' + tax + '\n' + 'total: ' + total);


};

app.use(generic);
app.use('/hello', hello);
app.use('/goodbeye', goodbye);
app.use('/caclulatetax', calculatetax);

app.use(hello);

app.listen(3000);

console.log('connect running on port 3000');
