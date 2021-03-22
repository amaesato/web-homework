import { makeDataTestId, getRomanNumeral } from './utils'

describe('makeDataTestId', () => {
  it('should make a test id with a `label`, `id`, and extra `identifier`', () => {
    expect(makeDataTestId('user', '123', 'isVisable')).toEqual('user-123-isVisable')
  })
  it('should make a test id with a `label`, `id`', () => {
    expect(makeDataTestId('user', '456')).toEqual('user-456')
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
