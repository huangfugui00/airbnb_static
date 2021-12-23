import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
  } from '../constants/authConstants'


  import {supabase} from '../utils/supabaseClient'

  export const loginWithSso=(provider)=>async (dispatch)=>{
    try{
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
      // const {user,session,error} = await supabase.auth.signIn({provider:provider})
      await supabase.auth.signIn({provider:provider})

      
     
    }
    finally{
      //此处dispatch是无效的。
    }
  }


  export const logout=()=>(dispatch)=>{
    sessionStorage.removeItem('airbnb_session')
    dispatch({
      type:USER_LOGOUT
    })
    supabase.auth.signOut()
  }
  
