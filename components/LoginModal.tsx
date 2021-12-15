import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import AppleIcon from '@mui/icons-material/Apple';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import {ssoAuth} from '../services/auth'
import MyInput from './MyInput'
import MyButton from './MyButton'
import { useMediaQuery } from '@material-ui/core';
import ReactLoading from 'react-loading';

type loginModalProp={
    open:boolean,
    handleClose:()=>void
}

const regions : {[key: string]: string} =    {
    'Afghanistan (+93)':'+93',
    'Åland Islands (+358)':'+358',
    'Albania (+355)':'+355',
    'American Samoa (+1)':'+1',
    'Austria (+43)':'+43',
    'Belize (+501)':'+501',
    'Bulgaria (+359)':"+359",
    'Cameroon (+237)':"+237",
    'China (+86)':'+86',
    'Christmas Island (+61)':'+61',
    'France (+33)':'+33',
    'Gibraltar (+350)':'+350',
    'Guinea (+224)':'+224',
    }



const LoginModal = ({open,handleClose}:loginModalProp) => {
    const [region, setRegion] = useState('China (+86)') 
    const [loading, setLoading] = useState(false)
    const matches = useMediaQuery('(min-width:600px)');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
      };

    const handleSsoLogin =async (provider:string)=>{
        try{
            setLoading(true)
            await ssoAuth(provider)
        }finally{
            // setLoading(false)
        }
       
    }
    
      
    return (
        <div className="relative">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <div className="absolute  bg-white p-4 rounded-lg" style={{maxWidth:'600px',width:'100%',top:'15%',left: matches?'calc(50% - 300px)':'0px' }}>
                   {/* header  */}
                   <div className="flex items-center mb-4">
                       <IconButton sx={{marginLeft:"-10px"}} onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                       </IconButton>
                       <span className="text-center w-full font-serif">Login or Sign up</span>
                    </div>
                    <hr/>
                    <h1 className="mt-8 text-xl font-semibold">Welcome to Airbnb</h1>

                    <div className="mt-8">
                        <TextField
                        id="outlined-select-currency"
                        select
                        label="Country/Region"
                        value={region}
                        onChange={handleChange}
                        sx={{width:"100%"}}
                        >
                                {Object.keys(regions).map((region,index) => (
                                    <MenuItem key={index} value={region}>
                                    {region}
                                    </MenuItem>
                                ))}
                        </TextField>
                        <MyInput prefix={regions[region]} placeholder='Phone number'/>
                        <p className="mt-2 text-xs text-gray-500">We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="underline text-black font-medium">Privacy Policy</span></p>

                        <div className="mt-4 w-full">
                            <MyButton className='w-full text-white bg-red-500 text-lg py-2 px-4 rounded-lg'
                            >
                                Continue
                            </MyButton>
                        </div>

                        {/* or */}
                        <div className='flex gap-4 mt-6 items-center'>
                        <div className="h-px bg-gray-200 w-1/2"></div>
                        <span className="text-sm text-gray-400"> or</span>
                        <div className="h-px bg-gray-200 w-1/2"></div>
                        </div>
                       
                        {/* <span className="animate-spin h-5 w-5 mr-3">{loading ? 'Loading' : 'Send magic link'}</span> */}
                        {loading&&<div className="flex justify-center">
                        <ReactLoading type="spin" color="red" height={30} width={30} />
                        </div>}
                        {/* sso login */}
                        <div className="mt-4">
                            <button className="mb-4 flex items-center w-full border rounded-lg border-2 px-2 py-2 cursor-pointer hover:border-black"
                              onClick={()=>handleSsoLogin('github')}
                            >
                                <FacebookSharpIcon sx={{color:'blue'}}/>
                                
                                <span className="w-full text-center text-sm font-serif">Continue with Facebook</span>
                            </button>
                            <button className="mb-4 flex items-center w-full border rounded-lg border-2 px-2 py-2 cursor-pointer hover:border-black"
                            >
                                <GoogleIcon sx={{color:'rgb(227, 28, 95)'}}/>
                                <span className="w-full text-center text-sm font-serif">Continue with Google</span>
                            </button>
                            <button className="mb-4 flex items-center w-full border rounded-lg border-2 px-2 py-2 cursor-pointer hover:border-black">
                                <AppleIcon sx={{color:'black'}}/>
                                <span className="w-full text-center text-sm font-serif">Continue with Apple</span>
                            </button>
                            <button className="mb-4 flex items-center w-full border rounded-lg border-2 px-2 py-2 cursor-pointer hover:border-black">
                                <EmailOutlinedIcon />
                                <span className="w-full text-center text-sm font-serif">Continue with Email</span>
                            </button>
                        </div>
                    </div>

               </div>
            </Modal>
        </div>
    )
}

export default LoginModal
