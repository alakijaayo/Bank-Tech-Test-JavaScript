const mocha = require('mocha');
const expect = require('chai').expect;
const Table = require('../src/table');
var assert = require('chai').assert;
var MockDate = require('mockdate');

describe ("Table", function () {
  var table
});

beforeEach(function() {
  table = new Table();
  MockDate.set('11/28/2018')
});

it('Displays the balance available', function() {
  table.deposit(50)
  assert.equal(table.balance, 50)
})

it('monitors the change in account balance', function() {
  table.deposit(50)
  table.withdraw(20)
  table.deposit(40)
  assert.equal(table.balance, 70)
})

it('informs you that your money has been deposited', function() {
  assert.equal(table.deposit(50), 'Your money has been deposited!')
})

it('informs you that your money has been withdrawn', function() {
  assert.equal(table.withdraw(30), 'Your money has been withdrawn!')
})

it('stores money deposited into an array', function() {
  table.deposit(50)
  expect(table.history).to.have.lengthOf(1)
  expect(table.history).to.eql( [ [ '28/11/2018 || 50 || || 50' ] ])
})

it('stores money withdrawn into an array', function() {
  table.withdraw(30)
  expect(table.history).to.have.lengthOf(1)
  expect(table.history).to.eql( [ [ '28/11/2018 || || -30 || -30' ] ])
})
