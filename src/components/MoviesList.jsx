import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movie from './Movie'

const MoviesList = () => {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=bc4acb54059465fd1f379a49fecc7668&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      const movies = await res.json()
      setMovies(movies.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <MovieGrid>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  )
}

export default MoviesList

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(154px, 154px));
  grid-gap: 2rem;
  justify-content: center;
`
