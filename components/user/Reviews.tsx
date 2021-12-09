import React from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import {productType} from '../../types/product'
import {commentType} from '../../types/comment'




type reviewsProp={
    product:productType,
    comments: commentType[],
}

const Reviews = ({product,comments}:reviewsProp) => {
    return (
        <div className="mt-8">
            <div className="flex items-center my-2 mb-4 " >
                <div className="flex items-center text-xl gap-2">
                    <StarIcon sx={{fontSize:'1.2rem',color:'black'}}/>
                </div>
                <span className="ml-1 cursor-pointer">27 reviews</span>                                
            </div>

            {/* reviews */}
            {
                comments&&comments.map((comment,index)=>
                    <div key={index}>                
                    <Review product={product} comment={comment}/>
                    </div>
                )
            }

            <div className="mb-12">
            <Button variant="outlined"
                sx={{
                    color:'black',borderColor:"black",textTransform:"none",
                    fontSize:'1rem',padding:"0.5rem 1.25rem", borderRadius:'8px',
                    fontWeight:"bold",
                    "&:hover": {
                        borderColor: 'black',
                    }
                }}
                >
                   Show more reviews
            </Button>
            </div>

            <hr/>

            <button className="my-8 text-sm underline animate-pulse">
                Report this profile
            </button>
            
            
            

        </div>
    )
}

type reviewProp={
    product:productType,
    comment: commentType,
}

const Review = ({product , comment}:reviewProp)=>{
    return(
        <div>
            {/* product */}
            <div className="flex justify-between ">
                <div>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <span className="text-gray-600 text-sm">{product.location}</span>
                </div>
                <div className="relative w-20 h-14">
                    {product&&<Image src={product.photos[0]} layout="fill" objectFit="cover" className="rounded-xl"/>}
                </div>
            </div>

            {/* comment content */}
            <div className="my-4">
                <p className="line-clamp-3">{comment.content}</p>
            </div>
            {/* comment user  */}
            <div className="flex gap-2 mb-12">
            <Avatar src={comment.userId.avatar} sx={{width:'56px',height:"56px"}}/>
            <div>
                <h2 className="font-bold">{comment.userId.name}</h2>
                <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            </div>

        </div>
    )

}

export default Reviews
