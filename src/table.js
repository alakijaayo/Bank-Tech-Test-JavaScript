function Table() {
  this.balance = 0
  this.history = []
}

Table.prototype.deposit = function (money) {
  var date = new Date
  var gb = new Intl.DateTimeFormat('en-GB').format(date);
  this.history.push(`${date} || ${money} || || ${this.balance += money}`)
  return "Your money has been deposited!"
};

Table.prototype.withdraw = function (money) {
  var date = new Date;
  var gb = new Intl.DateTimeFormat('en-GB').format(date);
  this.history.push(`${gb} || || ${-money} || ${this.balance -= money}`)
  return "Your money has been withdrawn!"
};

Table.prototype.display = function () {
  return ("date || credit || debit || balance" + `${this.history}`)
};

module.exports = Table
