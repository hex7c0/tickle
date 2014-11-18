'use strict';
/**
 * @file middleware test
 * @module tickle
 * @package tickle
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
  var tickle = require('..'); // use require('tickle')
  var app = require('express')();
  var request = require('supertest');
  var assert = require('assert');
} catch (MODULE_NOT_FOUND) {
  console.error(MODULE_NOT_FOUND);
  process.exit(1);
}

/*
 * test module
 */
describe('middleware', function() {

  before(function(done) {

    app.use(tickle);
    app.get('/', function(req, res) {

      res.send(String(req.tickle));
    });
    app.get('/a', function(req, res) {

      res.send(String(req.tickle));
    });
    app.get('/admin', function(req, res) {

      res.send(String(global.tickle.tpr()));
    });
    done();
  });

  it('"/a" - should return 1', function(done) {

    request(app).get('/a').expect(200).end(function(err, res) {

      if (err)
        throw err;
      assert.equal(Number(res.text), 1);
      done();
    });
  });
  it('"/admin" - should return `tpr()`', function(done) {

    request(app).get('/admin').expect(200).end(function(err, res) {

      if (err)
        throw err;
      assert.equal(isNaN(res.text), false);
      done();
    });
  });

  describe('multiple times', function() {

    it('"/" - 1°', function(done) {

      request(app).get('/').expect(200, done);
    });
    it('"/" - should return 2 with `add`', function(done) {

      assert.equal(global.tickle.add('/'), 2);
      done();
    });
    it('"/" - should return 3', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(Number(res.text), 3);
        done();
      });
    });
    it('"/" - 4°', function(done) {

      request(app).get('/').expect(200, done);
    });
    it('"/" - should return 5', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(Number(res.text), 5);
        done();
      });
    });
  });
});
