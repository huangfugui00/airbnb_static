import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/authConstants'
// import { Session } from "@supabase/gotrue-js/src/lib/types"
import {authType} from '../types/auth'


const initState={
  loading:false,
  session:typeof window !== 'undefined'? sessionStorage.getItem('airbnb_session') ?sessionStorage.getItem('airbnb_session'):''  :'',
}


export const userLoginReducer = (state = initState, action:any) :authType=> {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state,loading: true } 
    case USER_LOGIN_SUCCESS:
      return { ...state,session: action.payload } 
    case USER_LOGIN_FAIL:
      return { ...state,loading: false } 
    case USER_LOGOUT:
      return {session:'',loading: false } 
    default:
      return state
  }
}
