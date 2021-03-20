import { node } from 'prop-types'
import React, { useState } from 'react'

export const AppContext = React.createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: undefined
})

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
AppProvider.propTypes = {
  children: node
}
