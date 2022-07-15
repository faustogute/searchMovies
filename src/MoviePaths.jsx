import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { Movie } from './components/Movie'
import { Movies } from './components/Movies'
import { Navbar } from './components/Navbar'
import useFetcher from './hooks/useFetcher'

const MoviePaths = () => {
  const { dataState: movies } = useFetcher('avengers')

  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<p>about</p>} />
        <Route path='/movies' element={<Outlet />}>
          <Route index element={<Movies data={movies} />} />
          <Route path=':movieID' element={<Movie data={movies} />} />
        </Route>
        <Route path='/contact' element={<p>contact</p>} />
        <Route path='/404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </section>
  )
}

export default MoviePaths
