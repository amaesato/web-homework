import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import { func, arrayOf } from 'prop-types'
import { TransactionT, UserT } from '../../common/propType'
import { View } from '../../components/View'
import { getTransactionHeadersAndRows } from '../../common/transaction-utils'
import { Table } from '../../components/Table'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { getEmployeeFullName } from '../../common/user-utils'
import { Button } from '../../components/Button'

export const User = ({
  getTransactions,
  transactions,
  user,
  getUser
}) => {
  const { params } = useRouteMatch()
  const [isRomanNumerals, setIsRomanNumerals] = useState(false)
  const [userTransactions, setUserTransactions] = useState()
  const [headers, rows] = getTransactionHeadersAndRows(userTransactions, isRomanNumerals)

  useEffect(() => {
    if (params?.userId) {
      getTransactions()
      getUser({ variables: { id: params.userId } })
    }
  }, [getTransactions, params?.userId])

  useEffect(() => {
    if (transactions) {
      const filtered = transactions?.filter(t => t?.user?.id === user?.id)
      setUserTransactions(filtered)
    }
  }, [transactions, user])

  return (
    <View css={viewStyles}>
      <nav>
        <Link to='/users'>Users</Link> / <p>{`${getEmployeeFullName(user)}`}</p>
      </nav>
      <Button css={btnStyles} onClick={() => setIsRomanNumerals(!isRomanNumerals)}>{isRomanNumerals ? '$' : 'XI' }</Button>
      <Table
        headers={headers}
        onRowClick={(id) => {}}
        rows={rows}
        tableType='transaction'
      />
    </View>
  )
}
User.propTypes = {
  transactions: arrayOf(TransactionT),
  user: UserT,
  getTransactions: func.isRequired,
  getUser: func.isRequired
}

const viewStyles = css`
  flex-direction: column;
  overflow-x: hidden;
  & >  nav {
    display: flex;
    color: black;
    padding: 1rem 0;
    & > a {
      padding: 0 1rem 0 0;
      color: black;
      text-decoration: none;
    }
    & > p {
      margin: 0;
      padding: 0 1rem;
      font-weight: 600;
    }
  }
`

const btnStyles = css`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`
