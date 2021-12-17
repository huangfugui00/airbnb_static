import React ,{useState}from 'react'
import {useMediaQuery,Avatar} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem'
import MyButton from '../../MyButton'
import MyAvatar from '../../MyAvatar'
import {supabase} from '../../../utils/supabaseClient'



type modalAvatar={
    file:File | undefined,
    open:boolean,
    handleClose:()=>void,
    uploadAvatar:( file:File)=>void,
}

const ModalAvatar =({file,open,handleClose,uploadAvatar}:modalAvatar)=>{
    if(!file){
        return <></>
    }
    const url =URL.createObjectURL(file) 
    return(
        <div className="relative">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="flex justify-center gap-4 items-center absolute bg-white p-8 rounded-lg" style={{maxWidth:'300px',width:'100%',top:'15%',left: 'calc(50% - 150px)' }}>
                <Avatar alt="Remy Sharp" src={url} sx={{width:'96px',height:'96px'}}/>:
                   
                <div className="flex flex-col gap-2">
                <button 
                onClick={()=>uploadAvatar(file)}
                 className='bg-blue-500 text-white px-2 py-1  rounded-lg w-24'>
                     Update
                </button>
                <MyButton className='bg-red-500 text-white px-2 py-1  rounded-lg w-24'
                 onClick={handleClose}
                >Cancel
                </MyButton>
                </div>           
                {open}
                </div>
            </Modal>
        </div>
    )
}

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
        setLoading(true)

        if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
          }
          const file = event.target.files[0]
          setFile(file)
          setModalOpen(true)
          setLoading(false)
    }

    //Click upload
    const handleUploadAvatar = async (file:File)=>{
     
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
        console.log(user)
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
                        <MyAvatar url={avatar} size='128px'/>:
                        <div className="text-2xl md:text-6xl text-gray-500  p-4 border border-gray-600 border-4 rounded-full h-16 w-16 md:h-32 md:w-32 flex items-center justify-center">
                         H
                        </div>
                    }
                   <div>
                        <label className="underline text-sm text-center cursor-pointer" htmlFor="single">
                            {loading ? 'Uploading ...' : 'Upload Avatar'}
                        </label>
                        <input
                        style={{
                            visibility: 'hidden',
                            position: 'absolute',
                        }}
                        type="file"
                        id="single"
                        accept="image/*"
                        onChange={uploadAvatar}
                        disabled={loading}
                        />
                    </div>
                </div>
                {/* reviews  */}
                <div className="flex gap-1 items-center my-8">
                    <StarBorderIcon sx={{width:mdQuery?"36px":"20px",height:mdQuery?"36px":"20px"}}/>
                    <span className="text-sm md:text-lg">25 reviews</span>
                </div>
            </div>
         

            <hr/>

            {/* Richard */}
            <div className="my-8 ">
                <h1 className="text-lg font-bold">{username} confirmed</h1>
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
            <ModalAvatar file={file} open={modalOpen} handleClose={()=>setModalOpen(false)} uploadAvatar={handleUploadAvatar}/>
        </div>
    )
}

export default Identify
