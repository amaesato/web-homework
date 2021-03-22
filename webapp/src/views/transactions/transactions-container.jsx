import React, { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import GET_TRANSACTIONS from '../../gql/transactions.gql'
import GET_TRANSACTION from '../../gql/transaction.gql'
import ADD_TRANSACTION from '../../gql/add-transaction.gql'
import UPDATE_TRANSACTION from '../../gql/update-transaction.gql'
import ADD_USER from '../../gql/add-user.gql'
import GET_USERS from '../../gql/users.gql'
import GET_MERCHANTS from '../../gql/merchants.gql'
import DELETE_TRANSACTION from '../../gql/delete-transaction.gql'
import { useAppContext } from '../../hooks/useAppContext'
import { Transactions } from './transactions'

export function TransactionsContainer () {
  const [activeId, setActiveId] = useState()
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext()
  const { loading, error, data = {} } = useQuery(GET_TRANSACTIONS)
  const { data: merchantsData } = useQuery(GET_MERCHANTS)
  const { data: usersData } = useQuery(GET_USERS)
  const [getTransaction, { data: transactionData }] = useLazyQuery(GET_TRANSACTION)
  const [addTransaction] = useMutation(ADD_TRANSACTION)
  const [updateTransaction] = useMutation(UPDATE_TRANSACTION)
  const [addUser] = useMutation(ADD_USER)
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)

  const onAddUpdateTransaction = useCallback((variables) => {
    const query = variables.id ? updateTransaction : addTransaction
    query({ variables, refetchQueries: [{ query: GET_TRANSACTIONS }] })
    setIsSidebarOpen(false)
    setActiveId(undefined)
  }, [addTransaction, updateTransaction])

  const onAddUser = useCallback((variables) => {
    addUser({ variables, refetchQueries: [{ query: GET_USERS }] })
  })

  const onDeleteTransaction = useCallback((id) => {
    deleteTransaction({ variables: { id }, refetchQueries: [{ query: GET_TRANSACTIONS }] })
  })

  const onTransactionSelect = useCallback((id) => {
    if (activeId !== id) setActiveId(id)
    if (!isSidebarOpen) setIsSidebarOpen(true)
  }, [activeId, isSidebarOpen, setActiveId, setIsSidebarOpen])

  useEffect(() => {
    if (activeId) {
      getTransaction({ variables: { id: activeId } })
    }
  }, [activeId])

  useEffect(() => {
    if (!isSidebarOpen && activeId) {
      setActiveId(undefined)
    }
  }, [isSidebarOpen, setActiveId, activeId])

  if (loading) return <>Loading...</>

  if (error) return <>¯\_(ツ)_/¯</>

  return (
    <Transactions
      activeId={activeId}
      activeTransaction={activeId ? transactionData?.transaction : undefined}
      merchants={merchantsData?.merchants || []}
      onAddOrUpdate={onAddUpdateTransaction}
      onAddUser={onAddUser}
      onDeleteTransaction={onDeleteTransaction}
      onTransactionSelect={onTransactionSelect}
      setIsSidebarOpen={setIsSidebarOpen}
      transactions={data?.transactions || []}
      users={usersData?.users || []}
    />
  )
}
