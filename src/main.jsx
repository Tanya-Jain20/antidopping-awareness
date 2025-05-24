import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'  // Make sure this is the only CSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)