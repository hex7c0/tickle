'use strict';
/**
 * @file express example
 * @module tickle
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var tickle = require('..'); // use require('tickle') instead
var app = require('express')();

app.use(tickle); // use like middleware

// express routing
app.get('/', function(req, res) {

  res.send('counter=' + req.tickle);
}).get('/admin', function(req, res) {

  res.send('counter=' + req.tickle);
}).get('/all', function(req, res) {

  res.send(JSON.stringify(GLOBAL.tickle.route));
}).listen(3000);
console.log('starting "hello world" on port 3000');
