function Table() {
  this.balance = 0
  this.history = []
}


Table.prototype.deposit = function (money) {
  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  let current = dd + '/' + mm + '/' + yy;
  this.history.push([`${current} || ${money} || || ${this.balance += money}`])
  return "Your money has been deposited!"
};

Table.prototype.withdraw = function (money) {
  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  let current = dd + '/' + mm + '/' + yy;
  this.history.push([`${current} || || ${-money} || ${this.balance -= money}`])
  return "Your money has been withdrawn!"
};

Table.prototype.display = function () {
  return console.log("date || credit || debit || balance " + "\n" + `${this.history.join('\n')}`)
};

module.exports = Table
