import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Import HashRouter from react-router-dom
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap your App component with HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)