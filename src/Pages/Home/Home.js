
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiStarSFill } from "react-icons/ri";

import "./Home.css"
import MovieList from '../MovieList/MovieList';

const Home = () => {
const API="https://api.themoviedb.org/3/movie/popular?api_key=413d4de230aae13425cc2963c0f81bdd"

const [popMovieData,setPopMovieData]=useState()

const getPopMoviefrAPI= async ()=>{
    try{
        let resMovieData= await axios.get(API)
        setPopMovieData(resMovieData.data.results)
    }
    catch{
        console.error("Errror")
    }
}

useEffect(()=>{
    /*using Fetch API*/
// fetch(API).then((res)=>{
//     res.json().then((data)=>{
//         setPopMovieData(data.results)
//     }).catch((error)=>{
// console.error(error)
//     })
// })
getPopMoviefrAPI()
},[])

  return (
    <div >
    <Carousel className='carousel-cont'
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    infiniteLoop={true}
    showStatus={false}
    >
     {
        popMovieData?
 popMovieData.map((ele)=>{
 return (
<div>
      <div className='images-cont'>
       <img  src={`https://image.tmdb.org/t/p/original${ele && ele.backdrop_path}`}></img>
      <div className='carosuel-text'>
      <h1>{ele && ele.original_title}</h1>
      <h4>{ele && ele.release_date}</h4>
      <h4>{ele && ele.vote_average} <RiStarSFill/></h4>
      <h5>{ele && ele.overview.slice(0,200)}...</h5>
      </div>
      </div >
      </div>
 
 ) 

     }):null
      }

      </Carousel>

      <MovieList/>

    </div>
  )
}

export default Home
