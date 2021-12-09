import React from 'react'
import styles from './mediumCart.module.scss'
import {mediumCartType} from '../../types/mediumCart'
import Image from 'next/image'
type mediumCartProp={
    mediumCarts :mediumCartType[]
}
const MediumCard = ({mediumCarts}:mediumCartProp) => {
    return (
        <div  className={` my-container-big mt-8`}>
            <h2 className="text-lg md:text-2xl font-bold">Live Anywhere</h2>
            <div className={` gap-4 mt-4 md:mt-8 flex  overflow-scroll scrollbar-hide`}>
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
            <div className='relative lg:mr-12 h-48 w-48 md:w-72 md:h-72  lg:h-80 lg:w-96  cursor-pointer'>
                <Image className="rounded-lg" src={img} layout='fill'/>
            </div>
            <h2 className="font-mono">{title}</h2>
        </div>
    )
}

export default MediumCard
