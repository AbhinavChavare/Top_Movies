import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../Reducer/AuthReducer"

const AuthContext=createContext()

const initialState={
 loginInput:{ 
   fname:"",
   email:'',
   password:"",
   cfmpassword:"",
  },
  storeInputData:[],
}

const AuthContextProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialState)
const [userlogin,setUserLogin]=useState("")
const navigate=useNavigate()

const getInputData=(e)=>{
  let fname=e.target.name
  let value=e.target.value
  return dispatch({type:"GET_REGIS_DATA",payload:{fname,value}})
}

let list =localStorage.getItem("Token")
const getLocalStore=()=>{
  if (list){
let updateLocalStorage=JSON.parse(list)
dispatch({type:"GET_PRE_DATA",payload:updateLocalStorage})
  }
  else{
    dispatch({type:"GET_PRE_DATA",payload:[]})
  }
}

const setStoreData=(e)=>{
e.preventDefault()
if (state.loginInput.password===state.loginInput.cfmpassword){
  alert("registered Sucessfully")
  dispatch({type:"SET_STORE_DATA"})
  dispatch({type:"RESET_REGIS"})
}
else{
  alert("invalid password")
}
}

const checkLog=(e)=>{
  e.preventDefault()
  if(list){
  alert("inside")
    let updateLocalStorage=JSON.parse(localStorage.getItem("Token"))
    if((state.loginInput.email===updateLocalStorage[0].email)&& (state.loginInput.password===updateLocalStorage[0].password)){
      alert("login")
      setUserLogin("loggedIn")
      navigate("/")
    }
    else{
      alert("invalid email or password")
      setUserLogin("")
    }
  }
  else{
    setUserLogin("")
    alert("please register to proceed")
  } 
}



useEffect(()=>{
  localStorage.setItem("Token",JSON.stringify(state.storeInputData))
},[state])

useEffect(()=>{
  getLocalStore();
},[])


return(
    <AuthContext.Provider value={{...state,getInputData,setStoreData,checkLog,userlogin,setUserLogin}}>
        {children}
    </AuthContext.Provider>
)
}

const useAuthContext=()=>{
  return  useContext(AuthContext)
}


export {AuthContextProvider,AuthContext,useAuthContext}