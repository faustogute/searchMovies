import { useRef } from 'react'
// components
import Loading from './Loading'
import Movies from './Movies'
import getMovies from '../utils/getMovies'
// hooks
import useFetcher from '../hooks/useFetcher'

function App () {
  const searchRef = useRef(null)
  const { data: movies, loading, error } = useFetcher('avengers')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const { data } = await getMovies(searchRef.current.value)
    // if (data.Response === 'False') {
    //   setError(data.Error)
    //   setMovies([])
    // } else {
    //   setMovies(data.Search)
    // }
    const { data } = await getMovies(searchRef.current.value)
    console.log(data)
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
