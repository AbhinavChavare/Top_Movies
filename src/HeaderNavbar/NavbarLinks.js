import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars,FaTimes } from "react-icons/fa";
import { useAuthContext } from '../Context/AuthContext';
const NavbarLinks = () => {

 const {userlogin,setUserLogin}=useAuthContext()

  // const [theme, setTheme] = useState("light-theme")
  // const toggleTheme = () => {
  //   settogbtnicon(true);
  //   // alert(togbtnicon)
  //   if (theme === "light-theme") {
  //     setTheme("dark-theme")
  //   } else {
  //     setTheme("light-theme")
  //     // alert(theme)
  //     // document.body.className = theme;
  //   }
  // }
  // useEffect((e) => {
  //   document.body.className = theme;
  // }, [theme])


const [toggleNav,setToggleNav]=useState(true)
const logoutUser=()=>{
  alert("sdf")
  localStorage.clear("Token")
  setToggleNav(true)
  setUserLogin(" ")
}




  return (
    <div>
  
    <div className={`navLinks-cont ${toggleNav?"action":null}`}>
    <NavLink to="/">
    <li onClick={()=>setToggleNav(true)} >Home</li></NavLink>
    <NavLink to="/about">
    <li onClick={()=>setToggleNav(true)} >About</li></NavLink>
    {

    (userlogin!=="loggedIn")?

    <NavLink to="/login">
    <li onClick={()=>setToggleNav(true)}>Login</li></NavLink>
    :
    <NavLink to="/logout">
    <li onClick={()=>logoutUser()} >Logout</li></NavLink>
    
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
