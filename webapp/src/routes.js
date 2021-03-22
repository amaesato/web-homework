import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Nav } from './components/nav/Nav'
import { TransactionsContainer } from './views/transactions'
import { UsersContainer } from './views/users'
import { AppProvider } from './app-context'

function AppRouter () {
  return (
    <Router>
      <AppProvider>
        <div css={styles}>
          <Nav />
          <div className='mainContent'>
            <Route exact path='/' render={() => <Redirect to='/transactions' />} />
            <Route component={TransactionsContainer} path='/transactions' />
            <Route component={UsersContainer} path='/users' />
          </div>
        </div>
      </AppProvider>
    </Router>
  )
}

export default AppRouter

const styles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > .mainContent {
    flex: 1;
    position: relative;
    padding: 1rem;
  }
`
