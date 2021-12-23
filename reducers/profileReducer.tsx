import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
  } from '../constants/profileConstants'
  import {profileReduxType,profileType} from '../types/profile'
  


  const initState={
    loading:false,
    profile:{} as profileType,
  }




  export const profileReducer = (state = initState, action:any): profileReduxType=> {
    switch (action.type) {
      case PROFILE_GET_REQUEST:
        return { ...state,loading: true }
      case PROFILE_GET_SUCCESS:
        return { ...state,loading: false, profile: action.payload } 
      case PROFILE_UPDATE_REQUEST:
          return { ...state,loading: true } 
      case PROFILE_UPDATE_SUCCESS:
        return { ...state, loading: false,profile: action.payload } 
      default:
        return state 
    }
  }
