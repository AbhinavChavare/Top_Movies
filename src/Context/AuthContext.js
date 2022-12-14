import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../Reducer/AuthReducer"
import { toast } from 'react-toastify';

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
  let list =localStorage.getItem("Token")
const [state,dispatch]=useReducer(reducer,initialState)
const [theme,setTheme]=useState("light-theme")

const [userlogin,setUserLogin]=useState("")
const navigate=useNavigate()


  if(state.storeInputData.length<1){
    state.storeInputData=[] 
  }
const setlogout=()=>{
  state.storeInputData=[] 
}
console.log(state.storeInputData.length)
console.log(state.storeInputData)

const showLogin = () => {
  toast('Login successfully!', {
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
const showinvalidpassword = () => {
  toast('Invalid mail id or Password!,  please register', {
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
const showRegistered = () => {
  toast('Registered Sucessfully go to login!', {
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
const showConfirmPassword = () => {
  toast('Check Password or Confirm Password!', {
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


const getInputData=(e)=>{
  let fname=e.target.name
  let value=e.target.value
  return dispatch({type:"GET_REGIS_DATA",payload:{fname,value}})
}


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
  // alert("registered Sucessfully")
  showRegistered()
  dispatch({type:"SET_STORE_DATA"})
  dispatch({type:"RESET_REGIS"})
}
else{
  showConfirmPassword()
}
}

const checkLog=(e)=>{
  e.preventDefault()
  if (state.storeInputData.length==0){
    showinvalidpassword()
  }
  else if(list!==[]){
    let updateLocalStorage=JSON.parse(localStorage.getItem("Token"))
    if((state.loginInput.email===updateLocalStorage[0].email)&& (state.loginInput.password===updateLocalStorage[0].password)){
      showLogin();
      navigate("/")
      setUserLogin("loggedIn")
    }
    else{
     showinvalidpassword()
    }
  }
  else{
    setUserLogin("")
    alert("please register to proceed")
    showinvalidpassword()
  } 

}


useEffect(()=>{
  localStorage.setItem("Token",JSON.stringify(state.storeInputData))
},[state])

useEffect(()=>{
  getLocalStore();
},[])


return(
    <AuthContext.Provider value={{...state,getInputData,setStoreData,checkLog,userlogin,setUserLogin,theme,setTheme,setlogout}}>
        {children}
    </AuthContext.Provider>
)
}

const useAuthContext=()=>{
  return  useContext(AuthContext)
}


export {AuthContextProvider,AuthContext,useAuthContext}