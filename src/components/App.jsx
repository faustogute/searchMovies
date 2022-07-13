import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import Loading from './Loading'
import Movies from './Movies'

const apiKey = 'c108ab96'

function App () {
  const searchRef = useRef(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = async (query = 'batman') => {
    return await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    )
  }

  const getData = async () => {
    const { data } = await getMovies()
    setMovies(data.Search)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getMovies(searchRef.current.value)
    if (data.Response === 'False') {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    }
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
        {loading ? <Loading /> : <Movies data={movies} />}
      </section>
    </div>
  )
}

export default App
