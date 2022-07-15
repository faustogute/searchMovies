// librerías
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// componentes
// import App from './components/App'
import MoviePaths from './MoviePaths'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
      <MoviePaths />
    </BrowserRouter>
  </>
)
