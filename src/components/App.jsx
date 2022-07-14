import { useRef, useState } from 'react'
// components
import Loading from './Loading'
import Movies from './Movies'
// hooks
import useFetcher from '../hooks/useFetcher'

function App () {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('avengers')
  const { dataState: movies, loading } = useFetcher(query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    e.target.reset() // form reset
  }

  return (
    <div>
      <section className='container'>
        <h4 className='py-4 text-center'>Buscador de películas</h4>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <input
              ref={searchRef}
              type='search'
              className='form-control'
              placeholder='Nombre de la película'
            />
            <button className='btn btn-primary'>Buscar</button>
          </div>
        </form>
        <section className='py-4'>
          {loading ? <Loading /> : <Movies data={movies} />}
        </section>
      </section>
    </div>
  )
}

export default App
