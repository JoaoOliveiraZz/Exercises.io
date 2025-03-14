import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/routes'
import './style/global.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
