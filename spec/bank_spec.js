describe ("Bank", function() {
  var bank
});

beforeEach(function() {
  bank = new Bank();
});

it('starts with a balance of 0', function() {
  expect(bank.balance()).toEqual(0)
})

it('shows your balance when requested', function() {
  bank.deposit(50)
  expect(bank.balance()).toEqual(50);
}) ;
