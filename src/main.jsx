import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './MyRouter.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>,
)
