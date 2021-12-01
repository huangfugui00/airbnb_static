import React from 'react'
import styles from './largeCart.module.scss'
import Image from 'next/image'
import Button from '@mui/material/Button'

type largeCartProp={
    img:string,
    title:string,
    description:string;
    btn_text:string
}
const LargerCart = ({img,title,description,btn_text}:largeCartProp) => {
    return (
        <div className={`${styles.large_cart} sm:container mx-auto pl-4`}>
            <div className={styles.cart_img}>
                <Image className={styles.img} src={img} objectFit="cover" layout='fill'/>
            </div>
            <div className={styles.cart_text}>
                <h1>{title}</h1>
                <p>{description}</p>
                <Button className={styles.btn}>{btn_text}</Button>  
            </div>
        </div>
       
    )
}

export default LargerCart
