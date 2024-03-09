import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from './contexts/authContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NextUIProvider>
  // </React.StrictMode>,
)
