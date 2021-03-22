import { getTransactionHeadersAndRows, getCountPerCategory } from './transaction-utils'
import { transactions, merchants } from '../../mocks/transactions-data'

describe('getTransactionHeadersAndRows', () => {
  it('should return empty arrays for headers and rows if data is undefined', () => {
    expect(getTransactionHeadersAndRows()).toEqual([['date', 'merchant', 'description', 'debit/credit', 'employee', 'amount'], {}])
  })
  it('should return array of headers and rows', () => {
    const [headers, rows] = getTransactionHeadersAndRows(transactions)
    expect(headers).toEqual(['date', 'merchant', 'description', 'debit/credit', 'employee', 'amount'])
    expect(rows['5d5c1f747e01cd704f18f864']).toEqual(['2021-01-14', 'walmart', 'refund', 'credit', 'Jane3 Doe3', '$ 250.00'])
  })
})
describe('getCountPerCategory', () => {
  it('should return a map of totals per category, and the total overall', () => {
    expect(getCountPerCategory(merchants, transactions)).toEqual([{ 'food': 100, 'retail': 400 }, 500])
  })
  it('should return empty map total=0 if merchants or transactions are empty', () => {
    expect(getCountPerCategory([], transactions)).toEqual([{}, 0])
  })
})
