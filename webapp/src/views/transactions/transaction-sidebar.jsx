import React, { useCallback, useState } from 'react'
import { css } from '@emotion/core'
import { arrayOf, func, string } from 'prop-types'
import { MerchantT, TransactionT, UserT } from '../../common/propType'
import { Button } from '../../components/Button'
import { Sidebar } from '../../components/sidebar/sidebar'
import { TransactionForm } from '../../components/transactions/TransactionForm'
import { UserForm } from '../../components/users/UserForm'

export const TransactionSidebar = ({
  activeTransaction,
  merchants,
  onDeleteTransaction,
  users,
  onAddOrUpdate,
  onAddUser,
  activeId
}) => {
  const [isAddUser, setIsAddUser] = useState(false)
  const onUserAddSubmit = useCallback((input) => {
    onAddUser(input)
    setIsAddUser(false)
  }, [onAddUser, setIsAddUser])

  return (
    <Sidebar>
      <div css={sidebarStyles}>
        <h3>{`${!activeId ? 'New' : ''} Transaction`}</h3>
        {activeId ? (
          <Button onClick={() => onDeleteTransaction()}>Delete</Button>
        ) : (
          <Button onClick={() => setIsAddUser(!isAddUser)}>
            {`${isAddUser ? 'Cancel ' : '+ '}User`}
          </Button>
        )}
        {isAddUser && <UserForm onSubmit={onUserAddSubmit} />}
        <TransactionForm activeId={activeId} merchants={merchants} onSubmit={onAddOrUpdate} transaction={activeTransaction} users={users} />
      </div>
    </Sidebar>
  )
}
TransactionSidebar.propTypes = {
  merchants: arrayOf(MerchantT),
  users: arrayOf(UserT),
  activeTransaction: TransactionT,
  onAddOrUpdate: func,
  onDeleteTransaction: func,
  onAddUser: func,
  activeId: string
}

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
