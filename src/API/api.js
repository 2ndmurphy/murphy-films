import axios from "axios";

const baseurl = "https://api.themoviedb.org/3"
const apikey = "c116e1d5fc41a90be2fafba23fa64c2d"


export const getMovieList = async () => {
  const movie = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apikey}`)
  return movie.data.results
}

export const searchMovies = async (q) => {
  const search = await axios.get(`${baseurl}/search/movie?query=${q}&page=1&&api_key=${apikey}`)
  return search.data
}
