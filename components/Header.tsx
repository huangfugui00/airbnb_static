import React from 'react'
import Image from 'next/image'
import styles from './header.module.scss'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Image src="https://links.papareact.com/qd3"
               objectFit="contain"
               objectPosition="left"
               layout="fill"
               />
            </div>
            {/* search */}
            <div className={styles.search}>
                <input placeholder="search"/>
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

        </header>
    )
}

export default Header
