"use strict";
/**
 * @file nodejs example
 * @package tickle
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
    var tickle = require('../index.js'); // use require('tickle') instead
    var http = require('http');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * use function
 */
http.createServer(function(req,res) {

    var counter = tickle(req);
    res.end('counter=' + counter);

    // start testing ab benchmark
    if (counter == 1) {
        GLOBAL.tickle.tpr();
    }
    if (counter == 3001) {
        console.log('time per request ' + GLOBAL.tickle.tpr())
    }
    // end testing ab benchmark
}).listen(3000,'127.0.0.1');
console.log('starting "hello world" on port 3000');
