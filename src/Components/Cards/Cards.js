import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiStarSFill } from "react-icons/ri";
import "./Cards.css"
import { NavLink } from 'react-router-dom';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Cards = ({movie}) => {
    const   [isLoading,setIsLoading]=useState(true)


    useEffect(()=>{
setTimeout(()=>{
    setIsLoading(false)
},1500 )
    },[])


    return (
        isLoading?
        <div >
        <SkeletonTheme  baseColor="#202020" highlightColor="#444">
        <div >
            <Skeleton height={270} duration={3} count={1} />
        </div>
    </SkeletonTheme>
    </div>
:
        <div className='card-Cont' >
        {
            movie?
            movie.map((ele)=>{
                return(
                    <NavLink key={ele.id} to={`/movies/${ele.id} `}>
                            <div className='card-images-cont'>
                            <img  src={`https://image.tmdb.org/t/p/original${ele && ele.backdrop_path}`}></img>
                            {/* {console.log( ele.id)} */}
                                <div className='card-text'>
                                <div className="card-opacity">
                                    <h3>{ele && ele.original_title}</h3>
                                    <h5>{ele && ele.release_date}</h5>
                                    <h5>{ele && ele.vote_average} <RiStarSFill /></h5>
                                  </div>
                                  </div>
                            </div>
        </NavLink> 
                )
                        })
                        :null
                   }
  
        </div>
    )
}

export default Cards
