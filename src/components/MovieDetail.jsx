import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'
import { Link } from 'react-router-dom'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

const MovieDetail = props => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=bc4acb54059465fd1f379a49fecc7668&language=en-US`
        )
        const movie = await res.json()
        setMovie(movie)
      } catch (e) {
        console.log(e)
      }
    }
    fetchMovies()
  }, [props.match.params.id])

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={`${movie.id}`}>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
        </Overdrive>
        <div>
          <Link to='/' style={{ textDecoration: 'none', color: '#222' }}>
            <h2>go back</h2>
          </Link>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  )
}

export default MovieDetail

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`
