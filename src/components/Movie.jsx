import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Movie = ({ data }) => {
  const { movieID } = useParams()
  const navigate = useNavigate()

  const uniqueMovie = data.find((item) => item.imdbID === movieID)

  useEffect(() => {
    uniqueMovie === undefined && navigate('/404')
  }, [])

  return (
    uniqueMovie && (
      <article>
        <img
          className='img-fluid'
          src={uniqueMovie?.Poster}
          alt={uniqueMovie?.Title}
          height={300}
        />
        <div className='mt-4'>
          <p>{uniqueMovie?.Title}</p>
          <p>{uniqueMovie?.Year}</p>
          <p>{uniqueMovie?.Type}</p>
        </div>
      </article>
    )
  )
}
