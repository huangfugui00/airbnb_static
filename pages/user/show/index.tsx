import React,{useState,useEffect,useContext} from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {supabase} from '../../../utils/supabaseClient'
import Identify from '../../../components/user/show/Identify'
import {authContext,profileContext} from '../../_app'
import {profileType} from '../../../types/profile'
import { useRouter } from "next/router";


const User = () => {
    const container="my-container"
    const [avatar, setAvatar] = useState('')
    const [username, setUsername] = useState('')
    const [about, setAbout] = useState('')
    const [loaction, setLocation] = useState('')
    const [work, setWork] = useState('')
    
    const {auth,setAuth} = useContext(authContext)
    const {profile,setProfile} = useContext(profileContext)

    const router = useRouter();

    const updateProfile=(profileObj:profileType)=>{

    }
    const updateAvatar=(avatar:string)=>{
        setProfile({...profile,avatar})
    }
   
   
    useEffect(()=>{
        if(!auth.session){
            router.push("/");
        }
    },[auth])


    return (
    <div>
        <Header container={container}/>
       
        <main className={`${container} mt-12 md:grid md:grid-cols-12`}>
            {/* user identify */}
            <div className="col-span-4 mr-8">
                <Identify avatar={profile.avatar} setAvatar={updateAvatar} username={profile.username} />
            </div>
            <div className=" col-start-6 col-span-7">
            {/* home list */}
            {/* <HomeList product={product}/>

            {/* review */}
            {/* <Reviews product={product} comments={comments}/> */} 
            </div>
       
        </main>

        <Footer container={container}/>
    </div>
    )
}



export default User
