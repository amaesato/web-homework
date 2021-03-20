import { TransactionT, UserT } from './propType'
import { arrayOf, string, oneOfType } from 'prop-types'

export const makeDataTestId = (label, id, identifier) => `${label}-${id}${identifier ? `-${identifier}` : ''}`
makeDataTestId.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  identifier: string
}

export const getHeadersAndRows = (data = []) => {
  const [headers, rows] = data.reduce(([headers, rows], item) => {
    const keys = Object.keys(item).filter(k => k !== '__typename' && k !== 'transactions')
    if (!headers.length) {
      headers = [...keys]
    }
    rows.push(keys.map(key => item[key]))
    return [headers, rows]
  }, [[], []])
  return [headers, rows]
}
getHeadersAndRows.propTypes = arrayOf(oneOfType([TransactionT, UserT]))

const romanKeys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const ROMAN_NUMERALS_MAP = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
}

export const getRomanNumeral = (num) => {
  if (typeof num !== 'number' || num > 1000) return num
  const numeral = []
  const count = romanKeys.length
  const converter = (nextNum) => {
    for (let i = 0; i < count; i++) {
      const key = romanKeys[i]
      if (nextNum >= key) {
        numeral.push(ROMAN_NUMERALS_MAP[key])
        return converter(nextNum - key)
      }
    }
  }
  converter(num)
  return numeral.join('')
}
