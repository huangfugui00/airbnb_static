import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { useEffect,createContext, useState } from 'react';
import { supabase } from '../utils/supabaseClient'
import usePersistedState from '../utils/persistence'
import {authType} from '../types/auth'
import {profileType} from '../types/profile'
import userServices from '../services/user'

type authContextType = {
  auth:authType
  setAuth:(auth:authType)=>void,
}
type profileContextType={
  profile:profileType,
  setProfile:(profile:profileType)=>void,
}
export const authContext = createContext({} as authContextType)
export const profileContext = createContext({} as profileContextType )

function MyApp({ Component, pageProps }: AppProps) {
  // const [auth,setAuth]=useState({} as authType)
  const [auth,setAuth]=usePersistedState('auth',{} as authType)
  const [profile,setProfile]=usePersistedState('profile',{} as profileType)
  // const [profile,setProfile]=useState({} as profileType)


  useEffect(() => {
     setAuth({session:supabase.auth.session()})
    supabase.auth.onAuthStateChange((_event, session) => {
      setAuth({session:supabase.auth.session()})
    })
  }, [])

  useEffect(()=>{
    const getProfile = async()=>{
      if(auth.session){
        const result = await userServices.getProfile()
        if(!result.status){
            return
        }
        if(result.data){
          const data ={
            id:result.data.id,
            username:result.data.username,
            avatar_url:result.data.avatar_url,
            work:result.data.work,
            location:result.data.location,
            about:result.data.about,
          } as profileType
          setProfile(result.data)
        }
      }
      else{
        const data ={
          id:'null'
        } as profileType
        setProfile(data)
      }
    }
    getProfile()
  },[auth])

  return (
    <authContext.Provider value={ { auth,setAuth} }>
      <profileContext.Provider value={ { profile,setProfile} }>
      <Component {...pageProps} />
      </profileContext.Provider>
    </authContext.Provider>
    )
}

export default MyApp
