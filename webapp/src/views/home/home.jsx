import React, { useCallback, useState } from 'react'
import { css } from '@emotion/core'
import { arrayOf, func, string } from 'prop-types'
import { MerchantT, TransactionT, UserT } from '../../common/propType'
import { Button } from '../../components/Button'
import { Sidebar } from '../../components/sidebar/sidebar'
import { View } from '../../components/View'
import { TransactionForm } from '../../components/transactions/TransactionForm'
import { UserForm } from '../../components/users/UserForm'
import { getHeadersAndRows } from '../../common/utils'
import { Table } from '../../components/Table'
import { PieChartViz } from '../../components/PieChart'

export const Home = ({
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
  const [isAddUser, setIsAddUser] = useState(false)
  const onUserAddSubmit = useCallback((input) => {
    onAddUser(input)
    setIsAddUser(false)
  }, [onAddUser, setIsAddUser])
  const [headers, rows] = getHeadersAndRows(transactions || [])
  const active = activeId ? activeTransaction : undefined

  return (
    <View css={viewStyles}>
      <h2>Transactions</h2>
      <Button css={css`
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
      `} onClick={() => setIsSidebarOpen(true)}>Add Transaction</Button>
      <Table
        headers={headers}
        onRowClick={(id) => onTransactionSelect(id)}
        rows={rows}
        tableType='transaction'
      />
      <PieChartViz merchants={merchants || []} transactions={transactions || []} />
      <Sidebar>
        <div css={sidebarStyles}>
          <h3>{`${!activeId ? 'Add' : ''} Transaction`}</h3>
          {activeId ? (
            <Button onClick={() => {
              onDeleteTransaction(activeTransaction.id)
              setIsSidebarOpen(false)
            }}>Delete</Button>
          ) : (
            <Button onClick={() => setIsAddUser(!isAddUser)}>
              {`${isAddUser ? 'Cancel ' : ''}Add User`}
            </Button>
          )}
          {isAddUser && <UserForm onSubmit={onUserAddSubmit} />}
          <TransactionForm merchants={merchants} onSubmit={onAddOrUpdate} transaction={active} users={users} />
        </div>
      </Sidebar>
    </View>
  )
}
Home.propTypes = {
  merchants: arrayOf(MerchantT),
  transactions: arrayOf(TransactionT),
  users: arrayOf(UserT),
  activeTransaction: TransactionT,
  setIsSidebarOpen: func,
  onAddOrUpdate: func,
  onTransactionSelect: func,
  onDeleteTransaction: func,
  onAddUser: func,
  activeId: string
}

const viewStyles = css`
  flex-direction: column;
  overflow-x: hidden;
`
const sidebarStyles = css`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  & > h3 {
    text-align: center;
  } 
  & > button {
    align-self: center;
  }
`
