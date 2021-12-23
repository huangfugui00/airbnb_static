import React,{useState,useLayoutEffect,useContext} from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Identify from '../../../components/user/show/Identify'
import DisplayProfile from '../../../components/user/show/DisplayProfile'
import EditProfile from '../../../components/user/show/EditProfile'
import ControlEdit from '../../../components/user/show/ControlEdit'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import {IRootState} from '../../../utils/store'


const User = () => {
    const userLoginReducer = useSelector((state:IRootState) => state.userLoginReducer)
    const { session } = userLoginReducer
    const profileReducer = useSelector((state:IRootState) => state.profileReducer)
    const {profile} = profileReducer

    const container="my-container"
    const [editProfite,setEditProfile] = useState(false)

    const router = useRouter();
    // 
    
    useLayoutEffect(()=>{
        if(!session){
            router.push("/");
        }
    },[session])

    return (
    <div>
        <Header container={container}/>
       {profile&&
        <main className={`${container} my-12 lg:grid lg:grid-cols-12`}>
            {/* user identify */}
            <div className="col-span-4 mr-8">
                <Identify avatar={profile.avatar_url} username={profile.username} editProfile={editProfite} setEditProfile={setEditProfile}/>
            </div>
            <div className=" col-start-6 col-span-7">
                {/* right title  */}
                <div className="hidden lg:block">
                    <ControlEdit editProfile={editProfite} setEditProfile={setEditProfile}/>
                </div>

                <div className="mt-8">
                {
                    editProfite?<EditProfile handelCancel={()=>setEditProfile(false)} CurrentAbout={profile.about} CurrentWork={profile.work} CurrentLocation={profile.location}/> 
                    :  <DisplayProfile about={profile.about} work={profile.work} live={profile.location}/>    
                }
                </div>
           
            </div>
       
        </main>
        }

        <Footer container={container}/>
    </div>
    )
}



export default User
