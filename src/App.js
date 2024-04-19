import './App.css';
import { getMovieList, searchMovies } from './API/api'
import { useEffect, useState } from 'react';

function App() {
  const [popular, setPopular] = useState([])
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopular(result)
    })
  }, [])

  const popularMoviesList = () => {
    return popular.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3) {
      const query = await searchMovies(q)
      setPopular(query.results)
      console.log({ query: query})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MURPHY FILMS</h1>
        <input 
          type="text" 
          placeholder='search for films...' className='movie-search' 
          onChange={({ target }) => search(target.value) }
        />
        <div className="movie-container">
          {popularMoviesList()}
        </div>
      </header>
    </div>
  );
}

export default App;
