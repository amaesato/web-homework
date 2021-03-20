import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Nav } from './components/nav/Nav'
import { HomeContainer } from './views/home'
import { UsersContainer } from './views/users'
import { AppProvider } from './app-context'

function AppRouter () {
  return (
    <Router>
      <AppProvider>
        <div css={styles}>
          <Nav />
          <div className='mainContent'>
            <Route path='/transactions' render={() => <HomeContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Redirect to='/transactions' />
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
    margin: 1rem;
  }
`
