import React from 'react'
import styles from './mediumCart.module.scss'
import {mediumCartType} from '../types/mediumCart'
import Image from 'next/image'
type mediumCartProp={
    mediumCarts :mediumCartType[]
}
const MediumCard = ({mediumCarts}:mediumCartProp) => {
    return (
        <div  className={`${styles.medium_cart}  my-container mx-auto`}>
            <h2>Live Anywhere</h2>
            <div className={` gap-4 mt-8 flex  overflow-scroll scrollbar-hide`}>
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
        <div >
            <div className='relative h-72 w-72 cursor-pointer'>
                <Image className={styles.img} src={img} layout='fill'/>
            </div>
            <h2>{title}</h2>
        </div>
    )
}

export default MediumCard
