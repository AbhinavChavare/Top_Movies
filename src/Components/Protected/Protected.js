import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'


const Protected = (props) => {

    const navigate=useNavigate()
    const {userlogin}=useAuthContext()
const comp=props.dataprops
useEffect(()=>{
if (userlogin!=="loggedIn"){
    navigate("/login")
}
},[])
  return (
    <div>
      {comp}
    </div>
  )
}

export default Protected


