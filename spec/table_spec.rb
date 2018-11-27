const mocha = require('mocha');
const expect = require('chai').expect;
const Table = require('../src/table');
var assert = require('chai').assert;

describe ("Table", function {
  var table
});

beforeEach(function() {
  table = new Table();
});
