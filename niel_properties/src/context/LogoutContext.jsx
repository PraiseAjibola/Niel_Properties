import { createContext, useContext, useState } from 'react'

export const LogoutContext = createContext()

export const LogoutProvider = ({ children }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  
  const openLogout = () => setIsLogoutOpen(true)
  const closeLogout = () => setIsLogoutOpen(false)
  
  return (
    <LogoutContext.Provider value={{ isLogoutOpen, openLogout, closeLogout }}>
      {children}
    </LogoutContext.Provider>
  )
}

export const useLogout = () => {
  const context = useContext(LogoutContext)
  if (!context) {
    throw new Error('useLogout must be used within a LogoutProvider')
  }
  return context
}
