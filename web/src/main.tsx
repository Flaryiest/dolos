import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import "./styles/globals.css"
import "./styles/utils.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
