import { makeDataTestId, getHeadersAndRows, getRomanNumeral } from './utils'
import { transactions } from '../../mocks/transactions-data'

describe('makeDataTestId', () => {
  it('should make a test id with a `label`, `id`, and extra `identifier`', () => {
    expect(makeDataTestId('user', '123', 'isVisable')).toEqual('user-123-isVisable')
  })
  it('should make a test id with a `label`, `id`', () => {
    expect(makeDataTestId('user', '456')).toEqual('user-456')
  })
})

describe('getHeadersAndRows', () => {
  it('should return empty arrays for headers and rows if data is undefined', () => {
    expect(getHeadersAndRows()).toEqual([[], []])
  })
  it('should return array of headers and rows', () => {
    const [headers, rows] = getHeadersAndRows(transactions)
    expect(headers).toEqual(['id', 'userId', 'description', 'merchantId', 'debit', 'credit', 'amount'])
    expect(rows[1]).toEqual(['5d5c1f747e01cd704f18f864', 'employee3', 'refund', 'walmart', false, true, 250])
  })
})

describe('getRomanNumeral', () => {
  it('should return the input value if not a number', () => {
    expect(getRomanNumeral('userId')).toEqual('userId')
  })
  it('should return a roman numeral', () => {
    expect(getRomanNumeral(10.57)).toEqual('X')
    expect(getRomanNumeral(899)).toEqual('DCCCXCIX')
  })
})
