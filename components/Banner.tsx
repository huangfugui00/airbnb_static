import React from 'react'
import styles from './banner.module.scss'
import Link from 'next/link'
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
               <Link href="/searchModel">
                <a>
                    <Button className={styles.button}>flexible</Button>
                </a>
                </Link>
            </div> 
        </div>
        
    )
}

export default Banner
