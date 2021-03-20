const transactions = [
  {
    'userId': 'Frida',
    'description': 'cleaningsupplies',
    'merchantId': 'walmart',
    'debit': true,
    'credit': false,
    'amount': 150
  },
  {
    'userId': 'Lemar',
    'description': 'cleaningsupplies',
    'merchantId': 'walmart',
    'debit': true,
    'credit': false,
    'amount': 150
  },
  {
    'userId': 'Katy',
    'description': 'refund',
    'merchantId': 'walmart',
    'debit': false,
    'credit': true,
    'amount': 250
  },
  {
    'userId': 'Maya',
    'description': 'refund',
    'merchantId': 'walmart',
    'debit': false,
    'credit': true,
    'amount': 100
  },
  {
    'userId': 'Frida',
    'description': '',
    'merchantId': 'lyft',
    'debit': true,
    'credit': false,
    'amount': 15
  },
  {
    'userId': 'Ayoub',
    'description': 'eating',
    'merchantId': 'grub hub',
    'debit': true,
    'credit': false,
    'amount': 150
  },
  {
    'userId': 'Katy',
    'description': 'refund',
    'merchantId': 'walmart',
    'debit': false,
    'credit': true,
    'amount': 250
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
  'category': 'food',
  'description': ''
},
{
  'name': 'airbnb',
  'category': 'travel',
  'description': 'business trip'
}
]

module.exports = {
  transactions,
  users,
  merchants
}
