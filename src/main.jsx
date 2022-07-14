// librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// componentes
import App from './components/App'
import Paths from './Paths'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
