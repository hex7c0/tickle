#tickle [![Build Status](https://travis-ci.org/hex7c0/tickle.svg?branch=master)](https://travis-ci.org/hex7c0/tickle) [![NPM version](https://badge.fury.io/js/tickle.svg)](http://badge.fury.io/js/tickle)

request counter for [nodejs](http://nodejs.org), indipendent for every route

## Installation

Install through NPM

```
npm install tickle
```
or
```
git clone git://github.com/hex7c0/tickle.git
```

## API

inside expressjs project
```js
var tickle = require('tickle');
var app = require('express')();

app.use(tickle);
```

#### Class is stored inside _GLOBAL_ var

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

#### Examples

Take a look at my [examples](https://github.com/hex7c0/tickle/tree/master/examples)

## License
Copyright (c) 2014 hex7c0

Licensed under the GPLv3 license
