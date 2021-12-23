import {
    USER_LOGIN_REQUEST,
    USER_LOGOUT,
  } from '../constants/authConstants'

import {supabase} from '../utils/supabaseClient.js'
import {Provider} from '@supabase/supabase-js'

export const loginWithSso=(provider:Provider)=>async (dispatch:any)=>{
  try{
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    await supabase.auth.signIn({provider:provider})
  }
  finally{
    //此处dispatch是无效的。
  }
}


export const logout=()=>(dispatch:any)=>{
  sessionStorage.removeItem('airbnb_session')
  dispatch({
    type:USER_LOGOUT
  })
  supabase.auth.signOut()
}

