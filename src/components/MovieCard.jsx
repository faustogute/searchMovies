const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <article className='card'>
      <img className='img-top' src={Poster} alt='' />
      <div className='card-body text-dark'>
        <h5 className='card-title line-clamp'>{Title}</h5>
        <p>{Year}</p>
      </div>
    </article>
  )
}

export default MovieCard
