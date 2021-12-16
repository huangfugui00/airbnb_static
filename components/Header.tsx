import React , {useState,useEffect,useContext}from 'react'
import Image from 'next/image'
import styles from './header.module.scss'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Button from '@mui/material/Button'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker ,RangeKeyDict} from 'react-date-range';
import Link from 'next/link'
import UserMenu from './UserMenu'
import {authContext} from '../pages/_app'
import {supabase} from '../utils/supabaseClient'
import userServices from '../services/user'

type headerProp = {
    container:string
}

const Header = ({container}:headerProp) => {
    const {auth} = useContext(authContext)
    const [avatar,setAvatar] = useState('')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [inputSearch,setInputSearch]= useState('')
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const [guests,setGuests] = useState(1)
    const selectionRange = {
        startDate:startDate,
        endDate: endDate,
        key: 'selection',
      }

    const handleSelect = (ranges:RangeKeyDict)=>{
        ranges.selection.startDate&&setStartDate(ranges.selection.startDate)
        ranges.selection.endDate&&setEndDate(ranges.selection.endDate)
    }

    
    useEffect(() => {
        async function getProfile(){
            const result =await userServices.getProfile()
            if(!result.status){
                return 
            }
            setAvatar(result.data.avatar_url)
        }
        if(auth.session){         
            getProfile()   
        }
    }, [auth])

    return (
        <div className="border-b py-4">
        <header className={`flex justify-between items-center ${container}`}>
            <div className='relative h-8 w-24 lg:h-12 lg:w-32'>
            <Link href="/">
                <a>
                <Image src="/assets/airbnb.png"
               objectFit="contain"
               objectPosition="left"
               layout="fill"
               />
               </a>
            </Link>
            </div>
            {/* search */}
            <div className="mx-24 flex-auto  hidden md:flex items-center border rounded-lg pl-2 ">
                <input placeholder="search" value={inputSearch}
                onChange={(e)=>setInputSearch(e.target.value)}
                className="w-full focus:outline-none"/>
                <IconButton>
                <SearchIcon sx={{color:'white',backgroundColor:'red',borderRadius:'50%',cursor:'pointer'}}/>
                </IconButton>
            </div>
            {/* icon_group  */}
            <div className='flex' >
                <div className="hidden lg:block">
                <Button variant="text"
                sx={{textTransform:'none',color:'black',fontWeight:'600',borderRadius:'50px'}}
               
                >Become a host
                </Button>
                </div>
                <IconButton>
                <LanguageIcon fontSize="medium" />
                </IconButton>
                <div className="border rounded-full cursor-pointer"
                    onClick={handleClick}
                >
                    <IconButton>
                    <MenuIcon fontSize="medium"  />
                    </IconButton>
                    <IconButton>
                    {auth.session?  
                    <Badge color="secondary" variant="dot">
                        {avatar? 
                        <Avatar alt="Remy Sharp" src={avatar} sx={{width:'24px',height:'24px'}}/>
                        :
                         <PersonPinIcon  sx={{color:'red'}} fontSize="medium" />
                        }
                    </Badge>
                    : <PersonPinIcon fontSize="medium" />}
                    </IconButton>
                </div>
                <UserMenu open={open} anchorEl={anchorEl} handleClose={handleClose}/>
            </div>

            {/* Calender */}
          
           
         
        </header>

        {inputSearch&&
        <div className={styles.modal}>
            <div className={styles.calendar}>
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange = {handleSelect}
                className={styles.calendar_component}
                />
            </div>
            {/* guests */}
            <div className={styles.guests}>
                <h2>Numbers of Guests</h2>
                <div>
                <SupervisorAccountIcon/>
                <input 
                type="number" 
                value={guests}
                onChange={(e)=>setGuests(parseInt(e.target.value))}
                min={1}
                />
                </div>
            </div>
        
        </div>
        }

    </div>
       
    )
}

export default Header
