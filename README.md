# [tickle](http://supergiovane.tk/#/tickle)

[![NPM version](https://badge.fury.io/js/tickle.svg)](http://badge.fury.io/js/tickle)
[![Build Status](https://travis-ci.org/hex7c0/tickle.svg?branch=master)](https://travis-ci.org/hex7c0/tickle)
[![devDependency Status](https://david-dm.org/hex7c0/tickle/dev-status.svg)](https://david-dm.org/hex7c0/tickle#info=devDependencies)

Request counter for [nodejs](http://nodejs.org), independent for every route.

## Installation

Install through NPM

```bash
npm install tickle
```
or
```bash
git clone git://github.com/hex7c0/tickle.git
```

## API

inside expressjs project
```js
var tickle = require('tickle');
var app = require('express')();

app.use(tickle);
```

Class is stored inside _GLOBAL_ **Object**.
One istance for environment.
```js
GLOBAL.tickle;
```

### Methods

reset all counter
```js
GLOBAL.tickle.reset();
```
get time per request
```js
GLOBAL.tickle.tpr();
```
routing information are stored inside an **Object**
```js
GLOBAL.tickle.route;
```

## Examples

Take a look at my [examples](https://github.com/hex7c0/tickle/tree/master/examples)

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
