import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import Button from '@mui/material/Button'

const Banner = () => {
    return (
        <div className={styles.banner}>
            {/* sasa */}
            <Image src='http://links.papareact.com/0fm' layout="fill"
            objectFit="cover"
            className={styles.image}
            />
           <div className={`${styles.middle}`}>
                <p>Not sure where to go?Perfect.</p>
                <Button className={styles.button}>flexible</Button>
            </div> 
        </div>
        
    )
}

export default Banner
