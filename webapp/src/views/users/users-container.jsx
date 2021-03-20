import React, { useCallback, useEffect, useState } from 'react'
import { css } from '@emotion/core'
import { useQuery, useLazyQuery } from '@apollo/client'
import GET_USER from '../../gql/user.gql'
import GET_USERS from '../../gql/users.gql'
import { useAppContext } from '../../hooks/useAppContext'
import { Sidebar } from '../../components/sidebar/sidebar'
import { View } from '../../components/View'
import { Table } from '../../components/Table'
import { getHeadersAndRows } from '../../common/utils'

export function UsersContainer () {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext()
  const [focusedId, setFocusedId] = useState()
  const { loading, error, data = {} } = useQuery(GET_USERS)
  const [getUser, { data: userData }] = useLazyQuery(GET_USER)
  const [headers, rows] = getHeadersAndRows(data?.users || [])

  const onUserSelect = useCallback((id) => {
    if (focusedId !== id) setFocusedId(id)
    if (!isSidebarOpen) setIsSidebarOpen(true)
  }, [focusedId, isSidebarOpen, setFocusedId, setIsSidebarOpen])

  useEffect(() => {
    if (focusedId) {
      getUser({ variables: { id: focusedId } })
    }
  }, [focusedId])

  useEffect(() => {
    if (!isSidebarOpen && focusedId) {
      setFocusedId(undefined)
    }
    if (!focusedId && isSidebarOpen) {
      setIsSidebarOpen(false)
    }
  }, [isSidebarOpen, focusedId])

  if (loading) return <>Loading...</>

  if (error) return <>¯\_(ツ)_/¯</>

  return (
    <View css={viewStyles}>
      <h2>Users</h2>
      <Table
        headers={headers}
        onRowClick={(id) => id && onUserSelect(id)}
        rows={rows}
        tableType='users'
      />
      <Sidebar>
        <div>{`User ${userData?.user?.firstName}`}</div>
      </Sidebar>
    </View>
  )
}

const viewStyles = css`
  flex-direction: column;
  overflow-x: hidden;
`
