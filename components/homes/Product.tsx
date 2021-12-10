import React from 'react'
import Image from 'next/image'
import {productType} from '../../types/product'
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type productProp={
    product:productType
}

const Product = ({product}:productProp) => {
    return (
    <div>
        {product?
        <div className="flex flex-col gap-2 ">
            {/* image */}
            <div className='relative  h-96 xl:h-72   md:h-72 sm:h-80 transform hover:-translate-y-1 hover:scale-105 transition duration-1000 ease-in-out'>
                    <Image className="rounded-xl object-contain md:object-scale-down " src={product.photos[0]} alt={product.id} layout="fill" objectFit="cover"/>
                    :
                    <></>
                    <div className="absolute top-4 right-4 z-1 ">
                    <IconButton >
                    <FavoriteBorderIcon sx={{ color: 'white'}}/>
                    </IconButton>
                    </div>
               
            </div>
            {/* message */}
            <div className="flex flex-col">
                {/* location price */}
                <div className="flex items-center justify-between">
                    <span className=" font-medium antialiased font-mono overflow-hidden ">
                        {product.location}
                    </span>
                    <span className="flex-shrink-0 text-sm font-normal antialiased ">
                        {`$${product.price} RMB/night`}
                    </span>
                </div>
                {/* way */}
                <div className="-mt-1">
                    <span className="font-thin text-sm text-gray-500">{Math.floor(Math.random()*1000)+' Kilomiters away'}</span>
                </div>
            </div>
        </div>
        :<></>}
    </div>
        
    )
}

export default Product
