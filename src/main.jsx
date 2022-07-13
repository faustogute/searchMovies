// librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// componentes
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
