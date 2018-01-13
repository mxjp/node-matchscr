# matchscore
[![Travis](https://img.shields.io/travis/mpt0/node-matchscore.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/matchscore.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/l/matchscore.svg?style=flat-square)]()

Configurable fuzzy string matching and scoring

## Installation
```js
npm install matchscore
```

## Usage
```js
const score = require('matchscore');

score('Hello World!', 'world'); // -> 1
score('Hello World!', 'lll'); // ~> 0.745
```

### Explaination
The returned score is a number between 0 and 1 where 0 stands for no match and 1 for a complete contiguous occurrence of the query strings in the searched string. The more the query string is divided, the lower the score.

### Configuration
The config function returns a different score function with the custom configuration applied.
The configuration below is the default.
```js
const score = require('matchscore').config({
	ignoreCase: true
});
```
