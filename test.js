'use strict';
var assert = require('assert');
var dargs = require('./');

var fixture = {
	a: 'foo',
	b: true,
	c: false,
	d: 5,
	e: ['foo', 'bar'],
	f: null,
	g: undefined,
	h: 'with a space',
	i: "let's try quotes",
	camelCaseCamel: true
};

describe('dargs()', function () {
	it('convert options to cli flags', function () {
		var actual = dargs(fixture);
		var expected = [
			"--a='foo'",
			"--b",
			"--d='5'",
			"--e='foo'",
			"--e='bar'",
			"--h='with a space'",
			"--i='let'\''s try quotes'",
			"--camel-case-camel"
		];
		assert.deepEqual(actual, expected);
	});

	it('exclude options', function () {
		var actual = dargs(fixture, ['b', 'e', 'h', 'i']);
		var expected = [
			"--a='foo'",
			"--d='5'",
			"--camel-case-camel"
		];
		assert.deepEqual(actual, expected);
	});
});
