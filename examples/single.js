'use strict';
/**
 * @file single example
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

app.get('/', tickle, function(req, res) { // express routing

  res.send('counter=' + req.tickle);
}).get('/admin', function(req, res) {

  // snow undefined
  res.send('counter=' + req.tickle);
}).listen(3000);
console.log('starting "hello world" on port 3000');
