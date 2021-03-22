import { makeDataTestId, getRomanNumeral, parseValue } from './utils'

describe('makeDataTestId', () => {
  it('should make a test id with a `label`, `id`, and extra `identifier`', () => {
    expect(makeDataTestId('user', '123', 'isVisable')).toEqual('user-123-isVisable')
  })
  it('should make a test id with a `label`, `id`', () => {
    expect(makeDataTestId('user', '456')).toEqual('user-456')
  })
})

describe('parseValue', () => {
  it('should parse a valid string as number', () => {
    expect(parseValue('20')).toEqual(20)
  })
  it('should parse a valid string as boolean', () => {
    expect(parseValue('true')).toEqual(true)
  })
  it('should return the original value if an error is thrown', () => {
    expect(parseValue('broken')).toEqual('broken')
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
  it('should return the input value if the number is larger than 3999', () => {
    expect(getRomanNumeral(4000)).toEqual(4000)
  })
})
