function Bank() {
  this.MINIMUM_BALANCE = 0;
  this.balance = this.MINIMUM_BALANCE;
  this.table = new Table
}

Bank.prototype.myBalance = function() {
  return this.balance;
};

Bank.prototype.deposit = function(money) {
  if (money <= 0 || typeof money === 'string') {
    throw "Please put in correct amount you wish to deposit.";
  }
  this.table.deposit(money)
  return this.balance += money;
};

Bank.prototype.withdraw = function(money) {
  if (money <= 0 || typeof money === 'string') {
    throw "Please put in correct amount you wish to withdraw.";
  } else if (this.balance - money <= this.MINIMUM_BALANCE) {
    throw "Not enough funds available. Please put in amount you wish to withdraw.";
  }
  this.table.withdraw(money)
  return this.balance -= money;
};

Bank.prototype.showTable = function () {
  return this.table.display
};

module.exports = Bank
