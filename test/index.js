'use strict';

const test = require('ava');
const score = require('..');

test('Full match', t => {
	t.is(score('abc', 'ab'), 1);
	t.is(score('abc', 'bc'), 1);
	t.is(score('abc', 'abc'), 1);
});

test('Fuzzy match', t => {
	t.true(score('abc', 'ac') > 0);
	t.true(score('abc', 'ac') < 1);
});

test('Coherent exponential score', t => {
	t.true(score('01234', '014') > score('01234', '024'));
});

test('Config', t => {
	t.is(score.config({ignoreCase: false})('abc', 'ABC'), 0);
	t.is(score.config({ignoreCase: true})('abc', 'ABC'), 1);
});

test('Config defaults', t => {
	const ignoreCase = true;
	t.is(score('abc', 'ABC'), ignoreCase ? 1 : 0);
});

test('Empty query', t => {
	t.is(score('abc', ''), 0);
	t.is(score('', ''), 0);
});
