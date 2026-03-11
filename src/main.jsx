import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

const disableDevtools = import.meta.env.VITE_DISABLE_DEVTOOLS === 'true'
if (disableDevtools && typeof document !== 'undefined') {
  document.addEventListener('contextmenu', (event) => event.preventDefault())
  document.addEventListener('selectstart', (event) => event.preventDefault())
  document.addEventListener('copy', (event) => event.preventDefault())
  document.documentElement.classList.add('no-text-select')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
