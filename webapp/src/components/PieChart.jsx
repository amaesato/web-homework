import React from 'react'
import css from '@emotion/css'
import { arrayOf } from 'prop-types'
import { PieChart } from 'react-minimal-pie-chart'
import { MerchantT, TransactionT } from '../common/propType'
import { getCountPerCategory } from '../common/transaction-utils'

const colorMap = {
  'retail': '#3EB595',
  'transportation': '#C9C9C9',
  'food': '#FFF447',
  'travel': '#696969',
  'other': '#1A1A1A'
}

export const PieChartViz = ({ transactions, merchants }) => {
  if (!transactions.length || !merchants.length) return null
  const [countPerCat, total] = getCountPerCategory(merchants, transactions)
  const data = Object.keys(countPerCat).map(key => {
    return {
      title: key,
      value: countPerCat[key],
      color: colorMap[key]
    }
  })
  return (
    <div css={chartStyles}>
      <h3>Total Spent Per Category</h3>
      <PieChart
        animate
        data={data}
        totalValue={total}
      />
    </div>
  )
}
PieChartViz.propTypes = {
  transactions: arrayOf(TransactionT).isRequired,
  merchants: arrayOf(MerchantT).isRequired
}

const chartStyles = css`
  padding: 1.5rem;
  max-width: 25rem;
  & > h3 {
    text-align: center;
  }
`
