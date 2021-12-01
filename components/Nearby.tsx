import React from 'react'
import {nearbyType} from '../types/nearby'
import Image from 'next/image'
import styles from './nearby.module.scss'

type nearbyProp = {
    nearby:nearbyType[]
}

const Nearby = ({nearby}:nearbyProp) => {
    return (
              <div className={`${styles.nearby} sm:container mx-auto`}>
                <h2>Explore Nearby</h2>
                <div className={`${styles.sm_group} gap-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                {
                   nearby? nearby.map((item,index)=>
                <SmallCart cart={item} key={index}/>):<></>
                }
                </div>
             
            </div>
            
    )
}

type smallCartProp={
    cart:nearbyType
}
const SmallCart = ({cart}:smallCartProp)=>{
    const {img,location,distance}= cart
    return(
        <div className={styles.small_cart}>
                {/* left */}
            <div className={styles.cart_img}>            
                <Image src={img} className={ styles.img} layout="fill"/>
            </div>
            <div className={styles.text}>
                <h3>{location}</h3>
                <p>{distance}</p>  
            </div>
        </div>
    )
}

export default Nearby
