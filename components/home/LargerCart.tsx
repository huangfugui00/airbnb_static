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
        <div className={` my-container-big  mt-4 md:mt-8 relative `}>
            <div className='relative  h-64 md:h-96'>
                <Image className="rounded-lg" src={img} objectFit="cover" layout='fill'/>
            </div>
            <div className='absolute top-1/3 md:left-16 left-4'>
                <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
                <p className="text-gray-500  text-sm md:text-md">{description}</p>
                <button className="mt-2 md:mt-4 py-2 px-4 rounded-lg bg-black text-white text-sm md:text-lg">
                    Get Inspired
                </button>
            </div>
        </div>
    )
}

export default LargerCart
