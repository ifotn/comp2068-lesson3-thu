/**
 * Created by RFreeman on 9/22/2016.
 */
// link to the accounting npm package
var accounting = require('accounting');

// create a numeric variable
var amount = 9.99897;

// display the amount
console.log(accounting.formatMoney(amount));
