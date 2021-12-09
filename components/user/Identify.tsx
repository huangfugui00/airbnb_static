import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
const Identify = () => {
   
    const mdQuery = useMediaQuery('(min-width:768px)');
    return (
        <div className="md:p-8 md:border rounded-xl" >
            {/* avatar */}
            <div className="flex justify-between md:flex-col ">
                <div className="flex justify-center">
                    <div className="text-2xl md:text-6xl text-gray-500  p-4 border border-gray-600 border-4 rounded-full h-16 w-16 md:h-32 md:w-32 flex items-center justify-center">
                        H
                    </div>
                </div>
                {/* reviews  */}
                <div className="flex gap-1 items-center my-8">
                    <StarBorderIcon sx={{width:mdQuery?"36px":"20px",height:mdQuery?"36px":"20px"}}/>
                    <span className="text-sm md:text-lg">25 reviews</span>
                </div>
            </div>
         

            <hr/>

            {/* Richard */}
            <div className="my-8 ">
                <h1 className="text-lg font-bold">Richard confirmed</h1>
                <div className="mt-4 flex md:flex-col gap-2">
                <div className="flex items-center gap-1 mr-8">
                    <CheckIcon sx={{width:'18px',height:'18px',fontWeight:'bold'}}/>
                    <span>Email address</span>
                </div>
                <div className="flex items-center gap-1  mr-8">
                    <CheckIcon sx={{width:'18px',height:'18px',fontWeight:'bold'}}/>
                    <span>Phone number</span>
                </div>
                </div>
               
            </div>


            
        </div>
    )
}

export default Identify
