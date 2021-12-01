import React from 'react'
import styles from './mediumCart.module.scss'
import {mediumCartType} from '../types/mediumCart'
import Image from 'next/image'
type mediumCartProp={
    mediumCarts :mediumCartType[]
}
const MediumCard = ({mediumCarts}:mediumCartProp) => {
    return (
        <div  className={`${styles.medium_cart}  sm:container mx-auto`}>
            <h2>Live Anywhere</h2>
            <div className={`${styles.cart_group}  overflow-scroll scrollbar-hide`}>
                {mediumCarts.map((cart,index)=>
                <CartItem cartItem={cart} key={index}/>
                )}
            </div>
        </div>
    )
}


type cartItemProp={
    cartItem:mediumCartType
}

const CartItem = ({cartItem}:cartItemProp)=>{
    const {img,title} = cartItem
    return(
        <div className={styles.cart_item}>
            <Image className={styles.img} src={img} layout='fixed' width={400} height={400}/>
            <h2>{title}</h2>
        </div>
    )
}

export default MediumCard
