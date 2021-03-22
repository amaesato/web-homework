const transactions = [
  {
    'userId': 'Frida',
    'description': 'cleaning supplies',
    'merchantId': 'walmart',
    'debit': true,
    'credit': false,
    'amount': 150,
    'date': '2021-01-02'
  },
  {
    'userId': 'Frida',
    'description': '',
    'merchantId': 'lyft',
    'debit': true,
    'credit': false,
    'amount': 15.99,
    'date': '2021-04-01'
  },
  {
    'userId': 'Frida',
    'description': '',
    'merchantId': 'grub hub',
    'debit': true,
    'credit': false,
    'amount': 15.99,
    'date': '2021-04-01'
  },
  {
    'userId': 'Lemar',
    'description': 'medicine',
    'merchantId': 'walmart',
    'debit': true,
    'credit': false,
    'amount': 5.99,
    'date': '2021-01-11'
  },
  {
    'userId': 'Lemar',
    'description': 'going to work',
    'merchantId': 'uber',
    'debit': true,
    'credit': false,
    'amount': 20.15,
    'date': '2021-01-11'
  },
  {
    'userId': 'Katy',
    'description': 'refund',
    'merchantId': 'walmart',
    'debit': false,
    'credit': true,
    'amount': 1020.00,
    'date': '2021-01-03'
  },
  {
    'userId': 'Katy',
    'description': 'refund',
    'merchantId': 'amazon',
    'debit': false,
    'credit': true,
    'amount': 250,
    'date': '2021-01-03'
  },
  {
    'userId': 'Katy',
    'description': 'lunch',
    'merchantId': 'uber eats',
    'debit': false,
    'credit': true,
    'amount': 63.40,
    'date': '2021-01-03'
  },
  {
    'userId': 'Maya',
    'description': 'refund',
    'merchantId': 'walmart',
    'debit': false,
    'credit': true,
    'amount': 75.30,
    'date': '2021-03-05'
  },
  {
    'userId': 'Maya',
    'description': 'refund team lunch',
    'merchantId': 'grub hub',
    'debit': false,
    'credit': true,
    'amount': 90.20,
    'date': '2021-03-05'
  },
  {
    'userId': 'Maya',
    'description': 'team lunch',
    'merchantId': 'grub hub',
    'debit': false,
    'credit': true,
    'amount': 100.35,
    'date': '2021-03-05'
  },
  {
    'userId': 'Maya',
    'description': 'company lunch',
    'merchantId': 'uber eats',
    'debit': false,
    'credit': true,
    'amount': 340.90,
    'date': '2021-03-05'
  },
  {
    'userId': 'Ayoub',
    'description': 'eating',
    'merchantId': 'grub hub',
    'debit': true,
    'credit': false,
    'amount': 50.40,
    'date': '2021-01-10'
  },
  {
    'userId': 'Ayoub',
    'description': 'eating',
    'merchantId': 'grub hub',
    'debit': true,
    'credit': false,
    'amount': 20.40,
    'date': '2021-01-10'
  }]
const users = [{
  'dob': '12-01-1999',
  'firstName': 'Frida',
  'lastName': 'Kahlo'
},
{
  'dob': '03-19-1979',
  'firstName': 'Ayoub',
  'lastName': 'Strickland'
},
{
  'dob': '03-19-1970',
  'firstName': 'Katy',
  'lastName': 'Olsen'
},
{
  'dob': '03-19-1997',
  'firstName': 'Lemar',
  'lastName': 'Riley'
},
{
  'dob': '03-19-1977',
  'firstName': 'Maya',
  'lastName': 'Angelou'
}]
const merchants = [{
  'name': 'walmart',
  'category': 'retail',
  'description': ''
},
{
  'name': 'lyft',
  'category': 'transportation',
  'description': 'team lunch'
},
{
  'name': 'grub hub',
  'category': 'food',
  'description': 'company lunch'
},
{
  'name': 'uber eats',
  'category': 'food',
  'description': 'company lunch'
},
{
  'name': 'uber',
  'category': 'transportation',
  'description': ''
},
{
  'name': 'airbnb',
  'category': 'travel',
  'description': 'business trip'
},
{
  'name': 'amazon',
  'category': 'retail',
  'description': 'office supplies'
}
]

module.exports = {
  transactions,
  users,
  merchants
}
