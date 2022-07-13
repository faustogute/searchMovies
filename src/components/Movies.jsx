import MovieCard from './MovieCard'

const Movies = ({ data }) => {
  return (
    <section className='py-4'>
      {data.length === 0
        ? (
            'No se encontraron resultados'
          )
        : (
          <ul className='row gx-0 gx-md-5 gy-4'>
            {data.map((item) => (
              <li className='col-12 col-md-6 col-lg-3' key={item.imdbID}>
                <MovieCard {...item} />
              </li>
            ))}
          </ul>
          )}
    </section>
  )
}

export default Movies
