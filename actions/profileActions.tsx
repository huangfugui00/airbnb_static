
import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_AVATAR_SUCCESS,
  } from '../constants/profileConstants'

import {profileType} from '../types/profile'
import userServices from '../services/user'
import {supabase} from '../utils/supabaseClient'
import {IRootState} from '../utils/store'


export const getProfile=()=>async (dispatch:any)=>{
  const result = await userServices.getProfile()
  if(!result.status){
      return
  }
  if(result.data){
    const data = {
      id:result.data.id,
      username:result.data.username,
      avatar_url:result.data.avatar_url,
      work:result.data.work,
      location:result.data.location,
      about:result.data.about,
    } as profileType

    dispatch({
      type:PROFILE_GET_SUCCESS,
      payload:data
    })

  }
}

export const updateAvatar=(file:File)=>async(dispatch:any,getState:() => IRootState)=>{
  dispatch({
    type: PROFILE_UPDATE_REQUEST,
  })



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
      return {error:"not login "}
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

  const {profileReducer}  = getState();
  const profilePrev = profileReducer.profile

  dispatch({
    type: PROFILE_UPDATE_SUCCESS,
    payload:{...profilePrev, avatar_url:filePath},
  })

}


export const updateProfile=(profileObj:profileType)=>async(dispatch:any,getState:() => IRootState)=>{
    
      const {profileReducer}  = getState();
      dispatch({
        type: PROFILE_UPDATE_REQUEST,
      })//该reducer访问的是profileGetReducer，该如何解决，让其访问的是profileUpdateReducer
      
        //上传supabase
        const user = supabase.auth.user()
        if(!user){
            return
        }
        const updates = Object.assign({},profileReducer.profile,profileObj)

        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
        })

        if (error) {
            throw error
        }

        dispatch({
          type: PROFILE_UPDATE_SUCCESS,
          payload:updates
        })
      
    
  }