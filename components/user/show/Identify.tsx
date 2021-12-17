import React ,{useState}from 'react'
import {useMediaQuery,Avatar} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModalAvatar from '../../ModalAvatar'
import MyAvatar from '../../MyAvatar'
import InputFile from '../../InputFile'
import {supabase} from '../../../utils/supabaseClient'
import MyButton from '../../MyButton';

type identifyProp={
    username:string,
    avatar:string,
    setAvatar:(avatar:string)=>void  , 
}

const Identify = ({username,avatar,setAvatar}:identifyProp) => {
    const [loading,setLoading] = useState(false)
    const [modalOpen,setModalOpen] = useState(false)
    const [file,setFile] = useState<File>()
    const mdQuery = useMediaQuery('(min-width:768px)');

    //Input onChange
    const uploadAvatar = (event:React.ChangeEvent<HTMLInputElement>)=>{
        if (!event.target.files || event.target.files.length === 0) {
            // throw new Error('You must select an image to upload.')
            return
          }
        const file = event.target.files[0]
        setFile(file)
        setModalOpen(true)
    }

    //Click upload
    const handleUploadAvatar = async (file:File)=>{
        setLoading(true)
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
            setModalOpen(false)
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
        
        //同步服务
        setLoading(false)
        setModalOpen(false)
        setAvatar(filePath)
    }
    

    return (
        <div className="md:p-8 md:border rounded-xl" >
            {/* avatar */}
            <div className="flex justify-between md:flex-col ">
                <div className="flex flex-col items-center">
                    {
                        avatar?
                        <MyAvatar url={avatar} size={mdQuery?"128px":"64px"} />:
                        <div className="text-2xl md:text-6xl text-gray-500  p-4 border border-gray-600 border-4 rounded-full h-16 w-16 md:h-32 md:w-32 flex items-center justify-center">
                         H
                        </div>
                    }
                    <InputFile loading={loading} handleOnChange={uploadAvatar}/>
                </div>
                {/* Identify check  */}
                <div className="flex flex-col mt-8">
                    <CheckCircleOutlineIcon sx={{width:'30px',height:'30px'}}/>
                    <span className="mt-4 font-bold">Identity verification</span>
                    <p className="mt-2 text-sm text-gray-500">Show others you’re really you with the identity verification badge.</p>
                    <MyButton className="border border-black rounded-lg px-4 py-3 mt-4 mb-8">Get the badge</MyButton>
                </div>
                
            </div>

            <hr/>

            {/* Richard */}
            <div className="my-8">
                <h1 className="text-xl font-bold">{username} confirmed</h1>
                <div className="mt-4 flex md:flex-col gap-2">
                <div className="flex items-center gap-1 mr-8">
                    <CheckIcon sx={{width:'18px',height:'18px',fontWeight:'bold'}}/>
                    <span>Email address</span>
                </div>
                <div className="flex items-center gap-1  mr-8">
                    <CheckIcon sx={{width:'18px',height:'18px',fontWeight:'bold'}}/>
                    <span>Phone number</span>
                </div>
                </div>
            </div>

            {/* upload modal */}
            <ModalAvatar file={file} open={modalOpen} handleClose={()=>setModalOpen(false)} uploadAvatar={handleUploadAvatar} loading={loading}/>
        </div>
    )
}

export default Identify
