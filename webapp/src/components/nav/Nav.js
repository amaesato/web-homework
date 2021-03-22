import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/core'

export const Nav = () => {
  return (
    <nav css={navStyles}>
      <div css={navLinkStyles}>
        <NavLink activeClassName='active' to={'/transactions'}>Transactions</NavLink>
        <NavLink activeClassName='active' to={'/users'}>Users</NavLink>
      </div>
    </nav>
  )
}

const navStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`
const navLinkStyles = css`
  background-color: black;
  padding: 1rem;
  flex: 1;
  & > a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    transition: border-bottom-color .1s ease-in-out;
  }

  & > a:not(:first-child) {
    margin-left: 1rem;
  }

  & > .active {
    border-bottom-color: white;
  }
`
