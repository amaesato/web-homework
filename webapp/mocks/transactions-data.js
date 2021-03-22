const transactions = [
  {
    'id': '5d5c1f747e01cd704f18f863',
    'user': {
      'id': 'employee4',
      'firstName': 'Jane4',
      'lastName': 'Doe4'
    },
    'description': 'cleaningsupplies',
    'merchant': {
      'id': 'walmartId',
      'name': 'walmart'
    },
    'debit': true,
    'credit': false,
    'amount': 150,
    'date': '2021-02-10',
    '__typename': 'Transaction'
  },
  {
    'id': '5d5c1f747e01cd704f18f864',
    'user': {
      'id': 'employee3',
      'firstName': 'Jane3',
      'lastName': 'Doe3'
    },
    'description': 'refund',
    'merchant': {
      'id': 'walmartId',
      'name': 'walmart'
    },
    'debit': false,
    'credit': true,
    'amount': 250,
    'date': '2021-01-14',
    '__typename': 'Transaction'
  },
  {
    'id': '5d5c1f747e01cd704f18f865',
    'user': {
      'id': 'employee5',
      'firstName': 'Jane5',
      'lastName': 'Doe5'
    },
    'description': 'refund',
    'merchant': {
      'id': 'grubHubId',
      'name': 'grub hub'
    },
    'debit': false,
    'credit': true,
    'amount': 100,
    'date': '2021-03-10',
    '__typename': 'Transaction'
  }
]

const merchants = [{
  'id': 'walmartId',
  'name': 'walmart',
  'category': 'retail',
  'description': ''
},
{
  'id': 'lyftId',
  'name': 'lyft',
  'category': 'transportation',
  'description': 'team lunch'
},
{
  'id': 'grubHubId',
  'name': 'grub hub',
  'category': 'food',
  'description': 'company lunch'
}]

export { transactions, merchants }
