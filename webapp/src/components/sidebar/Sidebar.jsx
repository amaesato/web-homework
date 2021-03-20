import React from 'react'
import { css } from '@emotion/core'
import { node } from 'prop-types'
import { Button } from '../Button'
import { useAppContext } from '../../hooks/useAppContext'

export function Sidebar ({ children }) {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext()
  return (
    <aside className='sidebar' css={isSidebarOpen ? isOpenStyles : isClosedStyles}>
      <Button css={closeBtnStyles} onClick={() => setIsSidebarOpen(false)}>Close</Button>
      { children }
    </aside>
  )
}
Sidebar.propTypes = {
  children: node
}

const isOpenStyles = css`
  transform: translate(0);
  width: 33%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fafafa;
  transition: 0.35s;
  transition: transform 0.35s ease-in;
`
const isClosedStyles = css`
  transform: translate(100%);
`
const closeBtnStyles = css`
  margin: 1rem;
`
