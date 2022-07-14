import axios from 'axios'

const apiKey = 'c108ab96'
const baseUrl = `http://omdbapi.com/?apikey=${apiKey}`

export const getMovies = async (query) => {
  return await axios.get(`${baseUrl}&s=${query}`)
}

export const getMovie = async (id) => {
  return await axios.get(`${baseUrl}&i=${id}`)
}
