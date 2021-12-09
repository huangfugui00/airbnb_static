import React from 'react'

import StarIcon from '@mui/icons-material/Star';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type summaryProp = {
    title:string,
    location:string
}
const Summary = ({title,location}:summaryProp) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold" >{title}</h1>
            {/* avg-start review-number */}
            <div className="flex justify-between items-center mt-4 mb-6">
                {/* left */}
                <div className="flex items-center">
                    <div className="flex items-center text-sm text-gray-500">
                    <StarIcon sx={{fontSize:'1.2rem',color:'red'}}/>
                    4.7
                    </div>
                    <span className="ml-1 text-sm underline text-gray-500 cursor-pointer">(27 reviews)</span>
                    
                    <span className="ml-4 text-sm underline text-gray-500 cursor-pointer">{location}</span>
                </div>

                {/* right */}
                <div className="hidden md:flex gap-2 underline cursor-pointer">
                    <div className="flex items-center text-sm gap-1 ">
                    <IosShareIcon sx={{fontSize:'1.2rem'}}/>
                    Share
                    </div>
                    <div className="flex items-center text-sm gap-1 cursor-pointer">
                    <FavoriteBorderIcon sx={{fontSize:'1.2rem'}}/>
                    Save
                    </div>
                </div> 

            </div>
            
        </div>
    )
}

export default Summary
