const Table = require('../src/table')

function Bank() {
  this.MINIMUM_BALANCE = 0;
  this.table = new Table();
}

Bank.prototype.myBalance = function() {
  return this.table.balance;
};

Bank.prototype.deposit = function(money) {
  if (money <= 0 || typeof money === 'string') {
    throw "Please put in correct amount you wish to deposit.";
  }
  return this.table.deposit(money);
};

Bank.prototype.withdraw = function(money) {
  if (money <= 0 || typeof money === 'string') {
    throw "Please put in correct amount you wish to withdraw.";
  } else if (this.table.balance - money <= this.MINIMUM_BALANCE) {
    throw "Not enough funds available. Please put in amount you wish to withdraw.";
  }
  return this.table.withdraw(money);
};

Bank.prototype.showTable = function () {
  return this.table.display();
};

module.exports = Bank
