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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #f5f4f4;
  transition: 0.35s;
  transition: transform 0.35s ease-in;
  padding: 1.5rem;
  box-shadow: -1px 0px 10px 0px rgb(0 0 0 / 30%);
`
const isClosedStyles = css`
  transform: translate(110%);
`
const closeBtnStyles = css`
  border-width: 0;
  font-weight: 600;
  text-transform: uppercase;
`
