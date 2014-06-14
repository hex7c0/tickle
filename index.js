"use strict";
/**
 * @file tickle main
 * @module tickle
 * @package tickle
 * @subpackage main
 * @version 1.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */

if (!GLOBAL.tickle) {
    GLOBAL.tickle = new tickle;
}

/*
 * functions
 */
function tickle() {

    this._all = 0;
    this.route = {};
};
tickle.prototype.reset = function() {

    this._all = 0;
    return;
};
tickle.prototype.add = function(path) {

    if (!this.route[path]++) {
        this.route[path] = 1;
        return 1;
    }
    return this.route[path];
};
/**
 * / * option setting
 * 
 * @exports main
 * @function main
 * @param {Object} req - client request
 * @param {Object} [res] - response to client
 * @param {next} [next] - continue routes
 * @return {Integer|Functions}
 */
module.exports = function(req,res,next) {

    var globo = GLOBAL.tickle;
    globo._all++;
    req.tickle = globo.add(req.url);
    try {
        return next();
    } catch (TypeError) {
        return req.tickle;
    }
};
