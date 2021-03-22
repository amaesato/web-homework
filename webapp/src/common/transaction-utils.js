import { getEmployeeFullName } from './user-utils'
import { getRomanNumeral } from './utils'

export const getTransactionHeadersAndRows = (transactions = [], isRomanNumerals) => {
  const headers = ['date', 'merchant', 'description', 'debit/credit', 'employee', 'amount']
  const rows = transactions.reduce((acc, t) => {
    const row = {
      date: t?.date,
      merchant: t?.merchant?.name,
      description: t?.description,
      'debit/credit': t?.debit ? 'debit' : t?.credit ? 'credit' : 'other',
      employee: getEmployeeFullName(t?.user),
      amount: isRomanNumerals ? getRomanNumeral(t?.amount) : `$ ${t?.amount.toFixed(2)}`
    }
    acc[t.id] = headers.map(h => row[h])
    return acc
  }, {})
  return [headers, rows]
}

export const getCountPerCategory = (merchants = [], transactions = []) => {
  if (!merchants.length || !transactions.length) return [{}, 0]
  const categories = merchants.reduce((acc, m) => {
    acc[m.id] = m.category
    return acc
  }, {})
  const [countPerCat, total] = transactions.reduce(([countPerCat, total], t) => {
    total = total + t.amount
    const prevCount = countPerCat[categories[t.merchant.id]] || 0
    countPerCat[categories[t.merchant.id]] = t.amount + prevCount
    return [countPerCat, total]
  }, [{}, 0])
  return [countPerCat, total]
}
