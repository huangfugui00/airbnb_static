import React from 'react'
import {nearbyType} from '../../types/nearby'
import Image from 'next/image'
import styles from './nearby.module.scss'

type nearbyProp = {
    nearby:nearbyType[]
}

const Nearby = ({nearby}:nearbyProp) => {
    return (
              <div className={`relative my-container-big mt-4 md:mt-8`}>
                <h2 className="text-lg md:text-2xl font-bold">Explore Nearby</h2>
                <div className={`gap-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-8 mt-4`}>
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
        <div className='flex gap-4 items-center'>
                {/* left */}
            <div className='relative h-16 w-20  md:h-28 md:w-32 transform hover:-translate-y-1 hover:scale-110 transition duration-1000 ease-in-out'>            
                <Image src={img} className="rounded-lg cursor-pointer" layout="fill"  objectFit="cover"/>
            </div>
            <div>
                <h3 className="text-lg md:text-xl font-bold mb-4">{location}</h3>
                <span className="text-gray-500 text-sm">{distance}</span>  
            </div>
        </div>
    )
}

export default Nearby
