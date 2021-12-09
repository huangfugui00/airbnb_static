import React from 'react'
import {productType} from '../../types/product'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'

type homeListProp ={
    product:productType
}

const HomeList = ({product}:homeListProp) => {
 
    return (
        <div>
            {/* intro */}
            <div className="hidden md:block">
                <h1 className="text-2xl font-bold">
                    Hi, I am Richard
                </h1>
                <span className="text-xs text-gray-500">Joined in 2021</span>
            </div>

            {/* Furkan’s listings */}
            <div className="py-8 border-b">
                <h2 className="mb-6 text-xl font-semibold">Furkan’s listings</h2>
                <div className="flex  gap-4 overflow-scroll scrollbar-hide">
                    {
                        product&&product.photos&&product.photos.map((photo,index)=>
                        <div key={index} className="relative">         
                                <div  className="relative h-48 w-72">
                                    <Image src={photo} layout="fill" objectFit="cover" className="rounded-xl"/>
                                </div>
                            {/* star revieww */}
                                <div className="flex items-center my-2">
                                    <div className="flex items-center text-sm text-gray-500">
                                    <StarIcon sx={{fontSize:'1.2rem',color:'red'}}/>
                                    4.7
                                    </div>
                                    <span className="ml-1 text-sm underline text-gray-500 cursor-pointer">(27 reviews)</span>                                
                                </div>

                                <p className="text-gray-500 line-clamp-2">{product.intro}</p>
                            </div>                 
                        )
                    }

                </div>
            </div>
            
        </div>
    )
}

export default HomeList
