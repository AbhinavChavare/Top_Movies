const AuthReducer = (state,action) => {

const {loginInput,storeInputData}=state 

switch(action.type){
case "GET_PRE_DATA":
  return{
    ...state,storeInputData:[...action.payload]
  }


case "GET_REGIS_DATA":
  let name=action.payload.fname
  let value=action.payload.value
  return{
...state,loginInput:{...loginInput,[name]:value}
  }

  case "SET_STORE_DATA":
    return{
      ...state,storeInputData:[...storeInputData,loginInput]
    }

    case "RESET_REGIS":
      return{
        ...state, loginInput:{ 
          fname:"",
          email:'',
          password:"",
          cfmpassword:"",
         }
         
      }



}
  return (
   state
  )
}

export default AuthReducer
