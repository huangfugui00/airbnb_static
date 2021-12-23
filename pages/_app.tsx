import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { useEffect,createContext, useState } from 'react';
import { Provider } from 'react-redux'
import store from '../utils/store'
import {wrapper} from '../utils/store'
import { supabase } from '../utils/supabaseClient'
import usePersistedState from '../utils/persistence'
import {authType} from '../types/auth'
import {profileType} from '../types/profile'
import { useDispatch, useSelector } from 'react-redux'
import {USER_LOGIN_SUCCESS} from '../constants/authConstants'
import {getProfile} from '../actions/profileActions'



const WrapApp=({ Component, pageProps }: AppProps)=>{
  const dispatch = useDispatch()
  useEffect(() => {
    if(supabase.auth.session()){
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: supabase.auth.session(),
      })
      sessionStorage.setItem('airbnb_session', JSON.stringify(supabase.auth.session()))
      dispatch(getProfile())
    }
    
   supabase.auth.onAuthStateChange((_event, session) => {
    if(supabase.auth.session()){
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: supabase.auth.session(),
      })
      sessionStorage.setItem('airbnb_session', JSON.stringify(supabase.auth.session()))
      dispatch(getProfile())
    }
   })
 }, [])

 return(
  <Component {...pageProps} />
 )

}

function MyApp({ Component, pageProps }: AppProps) {



  return (
      <Provider store={store}>
        <WrapApp Component={Component} pageProps={pageProps} />
        {/* <Component {...pageProps} /> */}
      </Provider>
    )
}


export default MyApp
