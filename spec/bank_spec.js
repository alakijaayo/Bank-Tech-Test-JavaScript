const mocha = require('mocha');
const chai = require('chai');
const Bank = require('../src/bank');
var assert = require('chai').assert;


describe ("Bank", function() {
  var bank
});

beforeEach(function() {
  bank = new Bank();
});

it('starts with a balance of 0', function() {
  assert.equal(bank.myBalance(), 0)
})

it('shows your balance when requested', function() {
  bank.deposit(50)
  assert.equal(bank.myBalance(), 50);
}) ;
