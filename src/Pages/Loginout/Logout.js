import React from 'react'
import { NavLink } from 'react-router-dom'


const Logout = () => {
  return (
    <div className='logout-cont'>
      <h3>You have Sucessfully Logout</h3>
      <h4>Thanks for Visiting</h4>
      <h4>Please click to login </h4>
      <NavLink to="/login">
   <button className='btn-border'>Click to Login</button> </NavLink>
      
    </div>
  )
}

export default Logout
