import React, { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import GET_TRANSACTIONS from '../../gql/transactions.gql'
import GET_TRANSACTION from '../../gql/transaction.gql'
import ADD_TRANSACTION from '../../gql/add-transaction.gql'
import ADD_USER from '../../gql/add-user.gql'
import GET_USERS from '../../gql/users.gql'
import GET_MERCHANTS from '../../gql/merchants.gql'
import DELETE_TRANSACTION from '../../gql/delete-transaction.gql'
import { useAppContext } from '../../hooks/useAppContext'
import { Home } from './home'

export function HomeContainer () {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext()
  const [focusedId, setFocusedId] = useState()
  const { loading, error, data = {} } = useQuery(GET_TRANSACTIONS)
  const { data: merchantsData } = useQuery(GET_MERCHANTS)
  const [getTransaction, { data: transactionData }] = useLazyQuery(GET_TRANSACTION)
  const { data: usersData } = useQuery(GET_USERS)
  const [addTransaction] = useMutation(ADD_TRANSACTION)
  const [addUser] = useMutation(ADD_USER)
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)

  const onAddTransaction = useCallback((variables) => {
    const vars = {
      ...variables,
      amount: Number(variables?.amount),
      credit: Boolean(variables?.credit),
      debit: Boolean(variables?.debit)
    }
    addTransaction({ variables: vars, refetchQueries: [{ query: GET_TRANSACTIONS }] })
  }, [addTransaction])

  const onAddUser = useCallback((variables) => {
    addUser({ variables, refetchQueries: [{ query: GET_USERS }] })
  })

  const onDeleteTransaction = useCallback((id) => {
    deleteTransaction({ variables: { id }, refetchQueries: [{ query: GET_TRANSACTIONS }] })
  })

  const onTransactionSelect = useCallback((id) => {
    if (focusedId !== id) setFocusedId(id)
    if (!isSidebarOpen) setIsSidebarOpen(true)
  }, [focusedId, isSidebarOpen, setFocusedId, setIsSidebarOpen])

  useEffect(() => {
    if (focusedId) {
      getTransaction({ variables: { id: focusedId } })
    }
  }, [focusedId])

  useEffect(() => {
    if (!isSidebarOpen && focusedId) {
      setFocusedId(undefined)
    }
  }, [isSidebarOpen, setFocusedId])

  if (loading) return <>Loading...</>

  if (error) return <>¯\_(ツ)_/¯</>

  return (
    <Home
      activeId={focusedId}
      activeTransaction={transactionData?.transaction}
      merchants={merchantsData?.merchants || []}
      onAddOrUpdate={onAddTransaction}
      onAddUser={onAddUser}
      onDeleteTransaction={onDeleteTransaction}
      onTransactionSelect={onTransactionSelect}
      setIsSidebarOpen={setIsSidebarOpen}
      transactions={data?.transactions || []}
      users={usersData?.users}
    />
  )
}
