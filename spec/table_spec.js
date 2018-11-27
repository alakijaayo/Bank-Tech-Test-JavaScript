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

it('Displays the balance available', function() {
  table.deposit(50)
  assert.equal(table.balance(), 50)
})

it('monitors the change in account balance', function() {
  table.deposit(50)
  table.withdraw(20)
  table.deposit(40)
  assert.equal(table.myBalance(), 70)
})

it('informs you that your money has been deposited', function() {
  assert.equal(table.deposit(50), 'Your money has been deposited!')
})

it('informs you that your money has been withdrawn', function() {
  assert.equal(table.withdraw(30), 'Your money has been withdrawn!')
})

it('stores money deposited into an array', function() {
  table.deposit(50)
  expect(function () { bank.history }).to.include([ '27/11/2018 || 50 || || 50' ])
})

it('stores money withdrawn into an array', function() {
  table.withdraw(30)
  expect( function () { bank.history}.to.include([ '27/11/2018 || || -30 || -30' ]))
})
