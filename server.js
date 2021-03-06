/**
 * Created by RFreeman on 9/22/2016.
 */
// reference connect package
var connect = require('connect');
var url = require('url');
var accounting = require('accounting');

// instantiate a new connect object - we don't need "new"
var app = connect();

// set up a hello function to handle http requests
var hello = function(req, res, next) {
  res.end('Hello');
};

var goodbye = function(req, res, next) {
    res.end('Goodbye');
};

var fallback = function(req, res, next) {
    res.end('All other requests');
};

var calculateTax = function(req, res, next) {
    // get the subtotal from url's querystring
    var qs = url.parse(req.url, true).query;
    var subTotal = qs.subtotal;

    // calculate tax
    var tax = subTotal * .13;

    // calculate total
    var total = parseFloat(subTotal) + parseFloat(tax);

    // display the values
    res.end('SubTotal: ' + accounting.formatMoney(subTotal) + '\n' +
            'Tax: ' + accounting.formatMoney(tax) + '\n' +
            'Total: ' + accounting.formatMoney(total));
};

// execute the appropriate function based on the http request
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/tax', calculateTax);
app.use(fallback); // this is when no url is specified

// start the server on port 3000
app.listen(3000);

// display a message that our server is running
console.log('Connect running on port 3000');


