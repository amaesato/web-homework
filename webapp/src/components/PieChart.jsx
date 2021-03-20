import css from '@emotion/css'
import { arrayOf } from 'prop-types'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { MerchantT, TransactionT } from '../common/propType'

const colorMap = {
  'retail': '#3EB595',
  'transportation': '#C9C9C9',
  'food': '#FFF447',
  'travel': '#696969',
  'other': '#1A1A1A'
}

const getCategories = (merchants) => merchants.reduce((acc, m) => {
  acc[m.id] = m.category
  return acc
}, {})

const getTotalCountByCat = (categories, transactions) => {
  const [catCountMap, total] = transactions.reduce(([catCountMap, total], t) => {
    total = total + t.amount
    const prevCount = catCountMap[categories[t.merchantId]] || 0
    catCountMap[categories[t.merchantId]] = t.amount + prevCount
    return [catCountMap, total]
  }, [{}, 0])
  return [catCountMap, total]
}

export const PieChartViz = ({ transactions, merchants }) => {
  if (!transactions || !merchants) return null
  const categories = getCategories(merchants)
  const [catCountMap, total] = getTotalCountByCat(categories, transactions)
  const getData = transactions?.map(t => {
    const title = categories[t.merchantId]
    return {
      title,
      value: catCountMap[title],
      color: colorMap[title]
    }
  })
  return (
    <div css={chartStyles}>
      <h3>Total Spent Per Category</h3>
      <PieChart
        animate
        data={getData}
        totalValue={total}
      />
    </div>
  )
}
PieChartViz.propTypes = {
  transactions: arrayOf(TransactionT),
  merchants: arrayOf(MerchantT)
}

const chartStyles = css`
  max-width: 25rem;
  margin: 1.5rem;
`
