import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//delete StrictMode because the search api used allow one request per second
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
