const mocha = require('mocha');
const expect = require('chai').expect;
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
})

it('raises an error if amount put in deposit is negative', function() {
  expect(function () { bank.deposit(-50) }).to.throw("Please put in correct amount you wish to deposit.");
})

it('raises an error if amount put in withdraw is negative', function() {
  expect(function () { bank.withdraw(-50) }).to.throw("Please put in correct amount you wish to withdraw.");
})

it('raises an error if amount put in deposit is 0', function() {
  expect(function () { bank.deposit(0) }).to.throw("Please put in correct amount you wish to deposit.")
})

it('raises an error if amount put in withdraw is 0', function() {
  expect(function () { bank.withdraw(0) }).to.throw("Please put in correct amount you wish to withdraw.")
})

it('raises an error if limit on account is exceeded', function() {
  bank.deposit(20)
  expect(function () { bank.withdraw(30) }).to.throw("Not enough funds available. Please put in amount you wish to withdraw.")
})
