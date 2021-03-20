import { string, bool, number, shape, arrayOf } from 'prop-types'

export const TransactionT = shape({
  id: string,
  userId: string,
  description: string,
  merchantId: string,
  debit: bool,
  credit: bool,
  amount: number
})

export const UserT = shape({
  id: string,
  firstName: string,
  lastName: string,
  dob: string,
  transactions: arrayOf(TransactionT)
})

export const MerchantT = shape({
  id: string,
  name: string,
  category: string,
  description: string
})
