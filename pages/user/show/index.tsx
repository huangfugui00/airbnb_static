import React,{useState,useEffect,useContext} from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Identify from '../../../components/user/show/Identify'
import DisplayProfile from '../../../components/user/show/DisplayProfile'
import EditProfile from '../../../components/user/show/EditProfile'
import ControlEdit from '../../../components/user/show/ControlEdit'
import {authContext,profileContext} from '../../_app'
import {profileType} from '../../../types/profile'
import { useRouter } from "next/router";
import {supabase} from '../../../utils/supabaseClient'


const User = () => {
    const container="my-container"
    const [editProfite,setEditProfile] = useState(false)
    const [saving,setSaving] = useState(false)
    const {auth,setAuth} = useContext(authContext)
    const {profile,setProfile} = useContext(profileContext)

    const router = useRouter();
    
    const handleUploadAvatar = async (file:File)=>{
        // setLoading(true)
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`
        
        //上传图片
        let { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, file)
  
        if (uploadError) {
          throw uploadError
        }

        //更新user avatar 
        const user = supabase.auth.user()
        if(!user){
            // setModalOpen(false)
            return
        }
        const updates = {
            id: user.id,
            avatar_url:filePath,
            updated_at: new Date(),
          }
    
        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
        })

        if (error) {
            throw error
        }
        //同步客户端
        setProfile({...profile,avatar_url:filePath})
    
    }

    const updateProfile=async (profileObj:profileType)=>{
        try{
            setSaving(true)
            //上传supabase
            const user = supabase.auth.user()
            if(!user){
                return
            }
            const updates = Object.assign({},profile,profileObj)

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
            //同步
            setProfile(updates)

        }
        finally{
            setEditProfile(false)
            setSaving(false)
        }

    }
   
    useEffect(()=>{
        if(!auth.session){
            router.push("/");
        }
    },[auth])

    return (
    <div>
        <Header container={container}/>
       
        <main className={`${container} my-12 lg:grid lg:grid-cols-12`}>
            {/* user identify */}
            <div className="col-span-4 mr-8">
                <Identify avatar={profile.avatar_url} username={profile.username} editProfile={editProfite} setEditProfile={setEditProfile} handleUploadAvatar={handleUploadAvatar}/>
            </div>
            <div className=" col-start-6 col-span-7">
                {/* right title  */}
                <div className="hidden lg:block">
                <ControlEdit editProfile={editProfite} setEditProfile={setEditProfile}/>
                </div>

                <div className="mt-8">
                {
                    editProfite?<EditProfile saving={saving} handelCancel={()=>setEditProfile(false)} handleSaveProfile={updateProfile} CurrentAbout={profile.about} CurrentWork={profile.work} CurrentLocation={profile.location}/> 
                    :  <DisplayProfile about={profile.about} work={profile.work} live={profile.location}/>    
                }
                </div>
           
            </div>
       
        </main>

        <Footer container={container}/>
    </div>
    )
}



export default User
