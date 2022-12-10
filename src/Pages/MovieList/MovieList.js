import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../Components/Cards/Cards'
import "./MovieList.css"

const MovieList = () => {
  let {type}=useParams();
  const [movieListdata,setMovieListData]=useState()

 const getMovieData=async ()=>{
    try{
      let resp= await axios.get(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=413d4de230aae13425cc2963c0f81bdd`)
      setMovieListData(resp.data.results)
    }catch{
      console.error("error")
    }
   }

useEffect(()=>{
  getMovieData()

},[])
useEffect(()=>{
  getMovieData()

},[type])

  return (
    <div >
<h1 className='movie-list-title'>{type?type.toUpperCase()   :"POPULAR"} </h1>
    <Cards movie={movieListdata} />
    </div>
  )
}

export default MovieList
