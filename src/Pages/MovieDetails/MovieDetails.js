import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./MovieDetail.css"
import { RiStarSFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams()

  const [movieData, setmovieData] = useState()

  const getMovieDetailList = async () => {
    try {

      let resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=413d4de230aae13425cc2963c0f81bdd`)
      setmovieData(resp.data)
    } catch {
      console.error("Error")
    }
  }

  console.log(movieData)
  useEffect(() => {
    getMovieDetailList()
  }, [])


  return (
    <div>
      {
        <div>
          <div className='detail-images-cont'>
            <img src={`https://image.tmdb.org/t/p/original${movieData && movieData.backdrop_path}`}></img>

<div className='detail-data-cont'>
                            <div className='card-images-cont'>
                            <img  src={`https://image.tmdb.org/t/p/original${movieData && movieData.backdrop_path}`}></img>
                            </div>


            <div className='detail-text'>
            <div>
              <h1>{movieData && movieData.original_title}</h1>
              <h2>{movieData && movieData.tagline}</h2>
              <h4>{movieData && movieData.rmovieDataase_date}</h4>
              <h4>{movieData && movieData.vote_average} <RiStarSFill /></h4>
            </div>
              <h5>{movieData && movieData.overview.slice(0, 150)}...</h5>
            </div>
          </div >
          </div>
        </div>


      }
      <div className='deatail-links'>
      <h1 className='home-uselinks'>UsefulLinks</h1>
      <a href={`${movieData && movieData.homepage}`} target="_blank"><li className='homepage-link'>HomePage <FaHome className='hm-icons'/> </li></a>
      <a href={`https://www.imdb.com`} target="_blank"><li className='homepage-link imdb'>Imdb</li></a>
      </div>
    </div>
  )
}

export default MovieDetails
