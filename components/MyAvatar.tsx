import React,{useState,useEffect} from 'react'
import {supabase} from '../utils/supabaseClient'
import Avatar from '@mui/material/Avatar'
type myAvatarProp={
    url:string,
    size?:string
}

//component for display supabase avatar
const MyAvatar = ({url,size}:myAvatarProp) => {
    const [avatarUrl, setAvatarUrl] = useState('')
    useEffect(() => {
        async function downloadImage(path:string) {          
              const { data, error } = await supabase.storage.from('avatars').download(path)
              if (error) {
                throw error
              }
              if(!data){
                  return
              }
              const url =URL.createObjectURL(data)
              setAvatarUrl(url)
          }
        if (url) {
            downloadImage(url)
        }
      }, [url])
    return (
            <Avatar src={avatarUrl} sx={{width:size,height:size }}></Avatar>
    )
}

export default MyAvatar
