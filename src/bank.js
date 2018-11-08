function Bank() {
  this.MINIMUM_BALANCE = 0;
  this.balance = this.MINIMUM_BALANCE;
}

Bank.prototype.myBalance = function() {
  return this.balance;
};

Bank.prototype.deposit = function(money) {
  return this.balance += money;
};

Bank.prototype.withdraw = function(money) {
  return this.balance -= money;
};

module.exports = Bank
