import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { useEffect,createContext, useContext } from 'react';
import { supabase } from '../utils/supabaseClient'
import usePersistedState from '../utils/persistence'
import {authType} from '../types/auth'

type authContextType = {
  auth:authType
  setAuth:(auth:authType)=>void,
}

export const authContext = createContext({} as authContextType)

function MyApp({ Component, pageProps }: AppProps) {
  const [auth,setAuth]=usePersistedState('auth',{} as authType)


  useEffect(() => {
     setAuth({session:supabase.auth.session()})

    supabase.auth.onAuthStateChange((_event, session) => {
      setAuth({session:supabase.auth.session()})
    })
  }, [])

  return (
    <authContext.Provider value={ { auth,setAuth} }>
      <Component {...pageProps} />
    </authContext.Provider>
    )
}

export default MyApp
