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


  // export const profileUpdateReducer = (state = {} as profileReduxType, action:any) => {
  //   switch (action.type) {
  //     case PROFILE_UPDATE_REQUEST:
  //       return { loading: true } as profileReduxType
  //     case PROFILE_UPDATE_SUCCESS:
  //       console.log(action.payload)
  //       return { loading: false, profile: action.payload } as profileReduxType
  //     default:
  //       console.log('default update')
  //       return state
  //   }
  // }