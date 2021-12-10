import React, {useState} from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import LoginModal from './LoginModal'


type userMenuProp = {
    open:boolean,
    anchorEl:null | HTMLElement,
    handleClose:()=>void,
}
const UserMenu = ({open,anchorEl,handleClose}:userMenuProp)=>{
    const [loginModalOpen,setLoginModalOpen] = useState(false)
    const handleLoginModalOpen = () => setLoginModalOpen(true);
    const handleLoginModalClose = () => setLoginModalOpen(false);

    return(
        <div>
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
                <span className="text-sm  my-1">Help</span>
            </MenuItem>
        </Menu>
        {/* login modal */}
        <LoginModal open={loginModalOpen} handleClose={handleLoginModalClose}/>
      </div>
    )
}
export default UserMenu
