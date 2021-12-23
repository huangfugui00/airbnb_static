import React ,{useState}from 'react'
import {useMediaQuery,Avatar} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModalAvatar from '../../ModalAvatar'
import MyAvatar from '../../MyAvatar'
import InputFile from '../../InputFile'
import MyButton from '../../MyButton';
import ControlEdit from './ControlEdit';
import {updateAvatar} from '../../../actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import {IRootState} from '../../../utils/store'

type identifyProp={
    username:string,
    avatar:string,
    editProfile:boolean,
    setEditProfile:(editProfile:boolean)=>void,
}

const Identify = ({username,avatar,editProfile,setEditProfile}:identifyProp) => {
    const dispatch = useDispatch()
    const profileReducer = useSelector((state:IRootState) => state.profileReducer)
    const {loading} = profileReducer

    const [modalOpen,setModalOpen] = useState(false)
    const [file,setFile] = useState<File>()
    const mdQuery = useMediaQuery('(min-width:1024px)');

    //Input onChange
    const uploadAvatar = (event:React.ChangeEvent<HTMLInputElement>)=>{
        if (!event.target.files || event.target.files.length === 0) {
            return
          }
        const file = event.target.files[0]
        setFile(file)
        setModalOpen(true)
    }

    // 对上传头像进行包装，以处理页面逻辑
    const handleUploadAvatarEvent=async(file:File)=>{
        await dispatch(updateAvatar(file))
        setModalOpen(false)
    }
   

    return (
        <div className="lg:p-8 lg:border lg:rounded-xl" >
            {/* avatar */}
            <div className="flex justify-between lg:flex-col ">
                <div className="lg:hidden">
                    <ControlEdit editProfile={editProfile} setEditProfile={setEditProfile}/>
                </div>
                <div className="flex flex-col items-center">
                {
                    avatar?
                    <MyAvatar url={avatar} size={mdQuery?"128px":"96px"} />:
                    <div className="text-2xl md:text-6xl text-gray-500  p-4 border border-gray-600 border-4 rounded-full h-16 w-16 lg:h-32 lg:w-32 flex items-center justify-center">
                        H
                    </div>
                }
                <InputFile loading={loading} handleOnChange={uploadAvatar}/>
                </div>
            </div>
            {/* Identify check  */}
            <div className="flex flex-col mt-12">
                <CheckCircleOutlineIcon sx={{width:'30px',height:'30px'}}/>
                <span className="mt-4 font-bold">Identity verification</span>
                <p className="mt-2 text-sm text-gray-500">Show others you’re really you with the identity verification badge.</p>
                <MyButton className="border border-black rounded-lg px-4 py-3 mt-4 mb-8">Get the badge</MyButton>
            </div>
            <hr/>

            {/* Richard */}
            <div className="py-8 border-b lg:border-none ">
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
            <ModalAvatar file={file} open={modalOpen} handleClose={()=>setModalOpen(false)} uploadAvatar={handleUploadAvatarEvent} loading={loading}/>
        </div>
    )
}

export default Identify
