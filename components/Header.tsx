import React , {useState,useEffect}from 'react'
import Image from 'next/image'
import styles from './header.module.scss'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import IconButton from '@mui/material/IconButton'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Button from '@mui/material/Button'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker ,RangeKeyDict} from 'react-date-range';
import Link from 'next/link'

const Header = () => {

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
    return (
        <div className="border-b mb-8">
        <header className={`${styles.header} sm:container mx-auto`}>
            <div className={styles.brand}>
            <Link href="/">
                <a>
                <Image src="/assets/airbnb.png"
                // <Image src="https://links.papareact.com/qd3"
               objectFit="contain"
               objectPosition="left"
               layout="fill"
               />
               </a>
            </Link>
            </div>
            {/* search */}
            <div className={styles.search}>
                <input placeholder="search" value={inputSearch}
                onChange={(e)=>setInputSearch(e.target.value)}/>
                <IconButton>
                <SearchIcon sx={{color:'white',backgroundColor:'red',borderRadius:'50%',cursor:'pointer'}}/>
                </IconButton>
            </div>
            {/* icon_group  */}
            <div className={styles.icon_group}>
                <Button variant="text" className={styles.host}>Become a host</Button>
                <IconButton>
                <LanguageIcon fontSize="medium" />
                </IconButton>
                <span className={styles.menu_person}>
                    <IconButton>
                    <MenuIcon fontSize="medium"  />
                    </IconButton>
                    <IconButton>
                    <PersonPinIcon fontSize="medium" />
                    </IconButton>
                </span>
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
            {/* button_groups */}
            {/* <div className={styles.}> */}

            {/* </div> */}
        </div>
        }

    </div>
       
    )
}

export default Header
