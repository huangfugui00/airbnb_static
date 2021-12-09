import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import ButtonBase from '@mui/material/ButtonBase'
type checkoutBottomProp={
    price:number
}
const CheckOutBottom = ({price}:checkoutBottomProp) => {
    return (
        <div className="border bg-gray-50">
            <div className="flex justify-between my-container items-center my-4" >
                    <div className="flex flex-col ">
                        <span><span className="text-lg font-bold">${price}</span>/night</span>
                        <div className="flex items-center ">
                            <div className="flex items-center text-sm text-gray-500">
                            <StarIcon sx={{fontSize:'1.2rem',color:'red'}}/>
                            4.7
                            </div>
                            <span className="ml-1 text-sm underline text-gray-500 cursor-pointer">(27 reviews)</span>               
                        </div>
                    </div>

                    <ButtonBase 
                        sx={{color:'white',backgroundColor:'rgb(227, 28, 95)',
                        padding:'0.75rem 1.5rem' ,borderRadius:'10px'}}
                        >
                            Reserve
                    </ButtonBase>
                </div>
        </div>
 
    )
}

export default CheckOutBottom
