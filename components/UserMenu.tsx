import React, {useState,useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import LoginModal from './LoginModal'
import {logout} from '../actions/authActions'
import {IRootState} from '../utils/store'

type userMenuProp = {
    open:boolean,
    anchorEl:null | HTMLElement,
    handleClose:()=>void,
}
const UserMenu = ({open,anchorEl,handleClose}:userMenuProp)=>{
    const dispatch = useDispatch()
    const userLoginReducer = useSelector((state:IRootState) => state.userLoginReducer)
    const { session } = userLoginReducer
    const [loginModalOpen,setLoginModalOpen] = useState(false)
    const handleLoginModalOpen = () => setLoginModalOpen(true);
    const handleLoginModalClose = () => setLoginModalOpen(false);

    return(
        <div>
            {
               !session?
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
            <MenuItem>
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
        <MenuItem onClick={()=>dispatch(logout())}>
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
