'use strict';
/**
 * @file middleware test
 * @module tickle
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var tickle = require('..');
var app = require('express')();
var request = require('supertest');
var assert = require('assert');

/*
 * test module
 */
describe('middleware', function() {

  before(function(done) {

    app.use(tickle).get('/', function(req, res) {

      res.send(String(req.tickle));
    }).get('/a', function(req, res) {

      res.send(String(req.tickle));
    }).get('/admin', function(req, res) {

      res.send(String(global.tickle.tpr()));
    });
    done();
  });
  it('"/a" - should return 1', function(done) {

    request(app).get('/a').expect(200).end(function(err, res) {

      if (err) throw err;
      assert.equal(global.tickle.all, 1);
      assert.equal(Number(res.text), 1);
      done();
    });
  });
  it('"/admin" - should return `tpr()`', function(done) {

    request(app).get('/admin').expect(200).end(function(err, res) {

      if (err) throw err;
      assert.equal(global.tickle.all, 2);
      assert.equal(isNaN(res.text), false);
      done();
    });
  });
  it('should return "route" Object', function(done) {

    assert.equal(typeof global.tickle.route, 'object');
    assert.equal(global.tickle.route['/a'], 1);
    assert.equal(global.tickle.route['/admin'], 1);
    assert.equal(global.tickle.route['/'], undefined);
    assert.equal(Object.keys(global.tickle.route).length, 2);
    done();
  });

  describe('multiple times', function() {

    it('"/" - 1°', function(done) {

      assert.equal(global.tickle.all, 2); // before add
      request(app).get('/').expect(200, done);
    });
    it('"/" - should return 2 with `add`', function(done) {

      assert.equal(global.tickle.all, 3); // before add
      assert.equal(global.tickle.add('/'), 2);
      done();
    });
    it('"/" - should return 3', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err) throw err;
        assert.equal(global.tickle.all, 5);
        assert.equal(Number(res.text), 3);
        done();
      });
    });
    it('"/" - 4°', function(done) {

      assert.equal(global.tickle.all, 5); // before add
      request(app).get('/').expect(200, done);
    });
    it('"/" - should return 5', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err) throw err;
        assert.equal(global.tickle.all, 7);
        assert.equal(Number(res.text), 5);
        done();
      });
    });
    it('should return "route" Object', function(done) {

      assert.equal(typeof global.tickle.route, 'object');
      assert.equal(Object.keys(global.tickle.route).length, 3);
      done();
    });
    it('should return 7 times and call `reset()`', function(done) {

      assert.equal(global.tickle.all, 7);
      assert.equal(global.tickle.reset(), null);
      done();
    });
    it('should return "route" Object after `reset()`', function(done) {

      assert.equal(typeof global.tickle.route, 'object');
      assert.equal(Object.keys(global.tickle.route).length, 0);
      done();
    });
    it('"/admin" - should return `tpr()` after `reset()`', function(done) {

      request(app).get('/admin').expect(200).end(function(err, res) {

        if (err) throw err;
        assert.equal(global.tickle.all, 1);
        assert.equal(isNaN(res.text), false);
        done();
      });
    });
  });
});
