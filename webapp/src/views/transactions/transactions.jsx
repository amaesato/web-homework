import React from 'react'
import { css } from '@emotion/core'
import { arrayOf, func, string } from 'prop-types'
import { MerchantT, TransactionT, UserT } from '../../common/propType'
import { Button } from '../../components/Button'
import { View } from '../../components/View'
import { getTransactionHeadersAndRows } from '../../common/transaction-utils'
import { Table } from '../../components/Table'
import { TransactionSidebar } from './transaction-sidebar'
import { PieChartViz } from '../../components/PieChart'

export const Transactions = ({
  transactions,
  users,
  activeTransaction,
  setIsSidebarOpen,
  onAddOrUpdate,
  onTransactionSelect,
  onDeleteTransaction,
  onAddUser,
  activeId,
  merchants
}) => {
  const [headers, rows] = getTransactionHeadersAndRows(transactions)

  return (
    <View css={viewStyles}>
      <h2>Transactions</h2>
      <Button css={css`
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
      `} onClick={() => setIsSidebarOpen(true)}>+ Transaction</Button>
      <Table
        headers={headers}
        onRowClick={(id) => onTransactionSelect(id)}
        rows={rows}
        tableType='transaction'
      />
      <PieChartViz merchants={merchants} transactions={transactions} />
      <TransactionSidebar
        activeId={activeId}
        activeTransaction={activeTransaction}
        merchants={merchants}
        onAddOrUpdate={onAddOrUpdate}
        onAddUser={onAddUser}
        onDeleteTransaction={() => {
          onDeleteTransaction(activeId)
          setIsSidebarOpen(false)
        }}
        users={users}
      />
    </View>
  )
}
Transactions.propTypes = {
  activeId: string,
  activeTransaction: TransactionT,
  merchants: arrayOf(MerchantT).isRequired,
  onAddOrUpdate: func,
  onAddUser: func,
  onDeleteTransaction: func,
  onTransactionSelect: func,
  setIsSidebarOpen: func,
  transactions: arrayOf(TransactionT).isRequired,
  users: arrayOf(UserT).isRequired
}

const viewStyles = css`
  flex-direction: column;
`
