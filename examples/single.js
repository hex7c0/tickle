'use strict';
/**
 * @file express example
 * @module tickle
 * @package tickle
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var tickle = require('../index.min.js'); // use require('tickle') instead
    var app = require('express')();
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

// express routing
app.get('/',tickle,function(req,res) {

    res.send('counter=' + req.tickle);
});
app.get('/admin',function(req,res) {

    // snow undefined
    res.send('counter=' + req.tickle);
});
// server starting
app.listen(3000);
console.log('starting "hello world" on port 3000');
