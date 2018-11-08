function Bank() {
  this.MINIMUM_BALANCE = 0
  this.balance = this.MINIMUM_BALANCE
}

Bank.prototype.myBalance = function () {
  this.balance
};

Bank.prototype.deposit = function(money) {
  this.balance += money
};

Bank.prototype.withdraw = function(money) {
  this.balance -= money
};
