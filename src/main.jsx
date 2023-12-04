import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FireBaseContextProvider } from './context/Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FireBaseContextProvider>
      <App />
    </FireBaseContextProvider>
  </React.StrictMode>,
)
