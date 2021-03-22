import React from 'react'
import { css } from '@emotion/core'
import { useQuery, useLazyQuery } from '@apollo/client'
import GET_USER from '../../gql/user.gql'
import GET_USERS from '../../gql/users.gql'
import GET_TRANSACTIONS from '../../gql/transactions.gql'
import { View } from '../../components/View'
import { Table } from '../../components/Table'
import { getUserHeadersAndRows } from '../../common/user-utils'
import { Route, useRouteMatch } from 'react-router'
import { User } from './user'

export function UsersContainer () {
  const match = useRouteMatch()
  const { error, data = {} } = useQuery(GET_USERS)
  const [getUser, { data: userData }] = useLazyQuery(GET_USER)
  const [headers, rows] = getUserHeadersAndRows(data?.users || [])
  const [getTransactions, { data: transactionsData }] = useLazyQuery(GET_TRANSACTIONS)

  if (error) return <>¯\_(ツ)_/¯</>

  return (
    <View css={viewStyles}>
      <Route exact path={match.url} render={() => (
        <>
          <p>Users</p>
          <Table
            headers={headers}
            onRowClick={(id) => id && window.location.replace(`/users/${id}`)}
            rows={rows}
            tableType='users'
          />
        </>
      )}
      />
      <Route path='/users/:userId' render={() => (
        <User
          getTransactions={getTransactions}
          getUser={getUser}
          transactions={transactionsData?.transactions}
          user={userData?.user}
        />
      )} />
    </View>
  )
}

const viewStyles = css`
  flex-direction: column;
  overflow-x: hidden;
  & > p {
    color: black;
    margin: 0;
    padding: 1rem 0;
    font-weight: 600;
  }
`
