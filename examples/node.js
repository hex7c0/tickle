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

    res.end('counter=' + tickle(req));
}).listen(3000,'127.0.0.1');
console.log('starting "hello world" on port 3000');
