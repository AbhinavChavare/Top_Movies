import React, { useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext'

import "./Loginout.css"

const Login = () => {

const {getInputData,storeInputData,loginInput,setStoreData,checkLog}=useAuthContext()
const {fname,email,password,cfmpassword}=loginInput
// console.log(password,email)
const [toggResLog,setToggResLog]=useState(true)


  return (
   ( toggResLog)?
    <div className='log-center'>
    <div className='logCont' >
    <form onSubmit={(e)=>checkLog(e)}>
    <input type="email" name='email' className='log-input'
     autoFocus  required autoComplete='off' placeholder='Enter your email'
     onChange={(e)=>getInputData(e)}></input>

    <input type="password" name='password' className='log-input'
     autoComplete='off' required onChange={(e)=>getInputData(e)} placeholder='Enter your password'></input>
    <button type="submit">Login</button>
    <i className='gotologreg' onClick={()=>setToggResLog(false)} >Go to Register</i>
    </form>
    </div>
    </div>
    :
     <div className='log-center'>
    <div className='logCont' >
    <form onSubmit={(e)=>setStoreData(e)}>
    <input type="text" name='fname' className='log-input'
      required autoComplete='off' placeholder='Enter your name' value={fname}
     onChange={(e)=>getInputData(e)}></input>

    <input type="email" name='email' className='log-input'
      required autoComplete='off' placeholder='Enter your email' value={email}
     onChange={(e)=>getInputData(e)}></input>

    <input type="password" name='password' className='log-input'    autoComplete='off' value={password}
    required onChange={(e)=>getInputData(e)} placeholder='Enter your password'></input>

    <input type="password" name='cfmpassword' className='log-input'
     autoComplete='off' value={cfmpassword}
     required onChange={(e)=>getInputData(e)} placeholder='Confirm password'></input>
    <button type='submit'>Register</button>
    <i className='gotologreg' onClick={()=>setToggResLog(true)} >Go to login</i>
    </form>
    </div>
    </div>
  )
}

export default Login
