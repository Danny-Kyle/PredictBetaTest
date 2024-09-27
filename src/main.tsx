import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import "@/index.css"
import {BrowserRouter as Router} from "react-router-dom"
import AppRoutes from './pages/AppRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    </Router>
  </StrictMode>,
)
