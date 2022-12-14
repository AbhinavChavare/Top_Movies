import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars,FaTimes } from "react-icons/fa";
import { BsMoonFill,BsSun } from "react-icons/bs";
import { useAuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const NavbarLinks = () => {

 const {userlogin,setUserLogin,theme,setTheme,storeInputData,setlogout}=useAuthContext()

 const showLogout = () => {
  toast('Logout successfully!', {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
   };
 
const [toggleNav,setToggleNav]=useState(true)
const logoutUser=()=>{
  localStorage.clear("Token")
  setToggleNav(true)
  setUserLogin(" ")
  showLogout()
  setlogout()
}

  return (
    <div>
  
    <div className={`navLinks-cont ${toggleNav?"action":null}`}>
    <NavLink to="/">
    <li onClick={()=>setToggleNav(true)} >Home</li></NavLink>
    <NavLink to="/movie/popular">
    <li onClick={()=>setToggleNav(true)} >Popular</li></NavLink>
    <NavLink to="/movie/top_rated">
    <li onClick={()=>setToggleNav(true)} >Top Rated</li></NavLink>
    <NavLink to="/movie/upcoming">
    <li onClick={()=>setToggleNav(true)} >Upcoming</li></NavLink>


    {
  ( (userlogin!=="loggedIn") || (storeInputData.length==0)) ?
    <NavLink to="/login">
    <li onClick={()=>setToggleNav(true)}>Login</li></NavLink>
    :
    <NavLink to="/logout">
    <li onClick={()=>logoutUser()} >Logout</li></NavLink>
    
    }
{
   theme==="light-theme" ?
    <li className='theme-tog' onClick={()=>setTheme("dark-theme")}> 
    <BsMoonFill />
    </li>:
    <li className='theme-tog'  onClick={()=>setTheme("light-theme")}> 
    <BsSun />
    </li>
    }
    </div >
{
    toggleNav?
    <i onClick={()=>setToggleNav(false)}> 
    <FaBars className='tog-bar'/>
    </i>:
    <i onClick={()=>setToggleNav(true)}> 
    <FaTimes className='tog-bar'/>
    </i>
    }

    </div>

  )
}

export default NavbarLinks
