import React from 'react'
import {commentType} from '../../types/comment'
import StarIcon from '@mui/icons-material/Star'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

type commentProp={
    comments:commentType[]
}
const Comment = ({comments}:commentProp) => {
    return (
        <div className="mt-12 border-b">

             <div className="flex items-center mb-8 ">
                    <div className="flex items-center text-lg gap-1">
                    <StarIcon sx={{fontSize:'1.2rem',color:'red'}}/>
                    4.7
                    </div>
                    😁
                    <span className="ml-2 text-md   cursor-pointer">27 reviews</span>               
            </div>

            {/* comment overall */}
            <div className="hidden md:grid grid-cols-2 gap-4 mb-8">
                <div className="flex justify-between items-center mr-24 text-sm">
                    <span>Cleanliness</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-11/12 rounded-lg"></div>
                        </div>
                        <span>4.9</span>
                    </div>
                </div>
                <div className="flex justify-between items-center  mr-24 text-sm">
                    <span>Accuracy</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-full rounded-lg"></div>
                        </div>
                        <span>5.0</span>
                    </div>
                </div>
                <div className="flex justify-between items-center  mr-24 text-sm">
                    <span>Communication</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-full rounded-lg"></div>
                        </div>
                        <span>5.0</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mr-24 text-sm">
                    <span>Location</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-10/12 rounded-lg"></div>
                        </div>
                        <span>4.5</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mr-24 text-sm">
                    <span>Check-in</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-11/12 rounded-lg"></div>
                        </div>
                        <span>4.9</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mr-24 text-sm">
                    <span>Value</span>
                    <div className="flex items-center gap-4">
                        <div className=" h-1 bg-gray w-32 border flex items-center">
                            <div className="bg-black h-1  w-9/12 rounded-lg"></div>
                        </div>
                        <span>4.2</span>
                    </div>
                </div>
            </div>

            {/* comment list */}
            <div className="md:grid grid-cols-2 gap-4 mb-8">
                {
                    comments&&comments.map((comment,index)=>
                    <div className="mt-4 mr-24" key={index}>
                        <div className="flex items-center gap-2" >
                            <Avatar sx={{ width: 56, height: 56 }} src={comment.userId.avatar}/>
                            <div>
                                <h1>{comment.userId.name}</h1>
                                <p className="text-sm text-gray-500">{comment.date}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-3">{comment.content}</p>

                    </div>
                    
                    )
                }
        
            </div>
            
             {/* Button  */}
                
            <div className="my-12">
            <Button variant="outlined"
            sx={{
                color:'black',borderColor:"black",textTransform:"none",
                fontSize:'1rem',padding:"0.5rem 1.25rem", borderRadius:'8px',
                "&:hover": {
                    borderColor: 'black',
                }
            }}
            >
                Show all 27 reviews
            </Button>
            </div>
            




        </div>
    )
}

export default Comment
