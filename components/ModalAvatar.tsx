import React,{useState} from 'react'
import {Modal,Avatar} from '@mui/material';
import MyButton from './MyButton'
import Loading from './Loading'

type modalAvatar={
    file:File | undefined,
    open:boolean,
    handleClose:()=>void,
    uploadAvatar:( file:File)=>void,
    loading:boolean,
}

const ModalAvatar = ({file,open,handleClose,uploadAvatar,loading}:modalAvatar) => {
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
                    <Loading loading={loading}/>
                    <button 
                    onClick={()=>
                        uploadAvatar(file)
                    }
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

export default ModalAvatar
