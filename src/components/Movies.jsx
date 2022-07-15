import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export const Movies = ({ data }) => {
  return data.length === 0
    ? (
      <p className='text-center'>No se encontraron resultados</p>
      )
    : (
      <ul className='row gx-0 gx-md-5 gy-4'>
        {data.map((item) => (
          <li className='col-12 col-md-6 col-lg-3' key={item.imdbID}>
            <Link to={`/movies/${item.imdbID}`}>
              <MovieCard {...item} />
            </Link>
          </li>
        ))}
      </ul>
      )
}
