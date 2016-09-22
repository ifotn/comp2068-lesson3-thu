/**
 * Created by RFreeman on 9/22/2016.
 */
var message = 'Hello';

/* create a public function that outputs our variable
by using the keyword "exports" this function will be
available to the rest of our application */
exports.sayHello = function() {
    console.log(message);
}

// this version is private and can't be called from another file
var privateHello = function() {
    console.log(message);
}