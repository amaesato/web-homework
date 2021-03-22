import { string, bool, number, shape, arrayOf } from 'prop-types'

export const MerchantT = shape({
  id: string,
  name: string,
  category: string,
  description: string
})

export const TransactionT = shape({
  id: string,
  user: {
    id: string,
    firstName: string,
    lastName: string,
    dob: string
  },
  merchant: MerchantT,
  description: string,
  debit: bool,
  credit: bool,
  amount: number,
  date: string
})

export const UserT = shape({
  id: string,
  firstName: string,
  lastName: string,
  dob: string,
  transactions: arrayOf(TransactionT)
})
