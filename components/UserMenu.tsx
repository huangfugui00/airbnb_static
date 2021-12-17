import React, {useState,useContext} from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import LoginModal from './LoginModal'
import {authContext} from '../pages/_app'
import {supabase} from '../utils/supabaseClient'


type userMenuProp = {
    open:boolean,
    anchorEl:null | HTMLElement,
    handleClose:()=>void,
}
const UserMenu = ({open,anchorEl,handleClose}:userMenuProp)=>{
    const {auth} = useContext(authContext)

    const [loginModalOpen,setLoginModalOpen] = useState(false)
    const handleLoginModalOpen = () => setLoginModalOpen(true);
    const handleLoginModalClose = () => setLoginModalOpen(false);
    const handleSignOut = ()=>{
        supabase.auth.signOut()
    }

    return(
        <div>
            {
               ! auth.session?
                <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            sx={{margin:"10px 0",borderRadius:'50rem'}}
        >
            <MenuItem
                onClick={handleLoginModalOpen}
            >
                <span className="text-sm font-semibold my-1">SignUp</span>
            </MenuItem>
            <MenuItem>
                <span className="text-sm my-1 ">Login</span>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <span className="text-sm my-1 ">Host your home</span>
            </MenuItem>
            <MenuItem>
                <span className="text-sm my-1 mr-24">Host an experience</span>
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
                <span className="text-sm  my-1"  >Help</span>
            </MenuItem>
        </Menu>
        :
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            sx={{margin:"10px 0",borderRadius:'50rem'}}
        >
        <MenuItem
        >
            <span className="text-sm font-semibold my-1">Message</span>
        </MenuItem>
        <MenuItem>
            <span className="text-sm my-1 font-semibold ">Notification</span>
        </MenuItem>
    
        <MenuItem>
            <span className="text-sm my-1 font-semibold ">Tips</span>
        </MenuItem>
        <MenuItem>
            <span className="text-sm my-1 font-semibold mr-24">WishLists</span>
        </MenuItem>
        <Divider/>
        <MenuItem>
                <span className="text-sm my-1 ">Host your home</span>
            </MenuItem>
            <MenuItem>
                <span className="text-sm my-1 mr-24">Host an experience</span>
            </MenuItem>
            <Link href="/user/show">
                <a>
            <MenuItem >
                <span className="text-sm  my-1"  >Account</span>
            </MenuItem>
            </a>
            </Link>
            <Divider/>
        <MenuItem>
            <span className="text-sm  my-1">Help</span>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
                <span className="text-sm  my-1"  >Logout</span>
            </MenuItem>
    </Menu>
            }
        {/* login modal */}
        <LoginModal open={loginModalOpen} handleClose={handleLoginModalClose}/>
      </div>
    )
}
export default UserMenu
