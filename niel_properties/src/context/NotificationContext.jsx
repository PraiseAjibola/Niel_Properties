import { createContext, useContext, useState } from 'react'

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  
  const openNotifications = () => setIsNotificationOpen(true)
  const closeNotifications = () => setIsNotificationOpen(false)
  
  return (
    <NotificationContext.Provider value={{ isNotificationOpen, openNotifications, closeNotifications }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
