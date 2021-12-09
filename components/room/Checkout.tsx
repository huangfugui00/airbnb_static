import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonBase from '@mui/material/ButtonBase'

type checkoutProp = {
    price:number,
    startDate:Date,
    endDate:Date,
}

const date=(date:Date)=>{
    if(date){
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
    
        const day = mm + '/' + dd + '/' + yyyy;
        return day
    }
}

const minusDay = (endDate:Date,startDate:Date)=>endDate&&startDate?1+Math.floor( (endDate.getTime()-startDate.getTime())/(1000*60*60*24) ):1



const Checkout = ({price,startDate,endDate}:checkoutProp) => {
    

    return (
        <div className="py-6 px-6 border rounded-xl ">
            {/* price reviews  */}
            <div className="flex flex-col lg:flex-row justify-between">
                <span><span className="text-xl font-bold">${price}</span>/night</span>
                <div className="flex items-center ">
                    <div className="flex items-center text-sm text-gray-500">
                    <StarIcon sx={{fontSize:'1.2rem',color:'red'}}/>
                    4.7
                    </div>
                    <span className="ml-1 text-sm underline text-gray-500 cursor-pointer">(27 reviews)</span>               
                </div>
            </div>

            {/* date */}
            <div className="mt-6 border  rounded-md border-gray-500 ">
                
                <div className="grid grid-cols-2">
                    <div className="flex flex-col border-r border-gray-500 p-2 ">
                        <span style={{fontSize:"0.65rem"}}>CHCEK-IN</span>
                        <span className="text-xs">{date(startDate)}</span>
                        {/* <span className="text-xs">1/11/2021</span> */}
                    </div>
                    <div className="flex flex-col p-2 ">
                        <span style={{fontSize:"0.65rem"}}>CHCEK-OUT</span>
                        <span className="text-xs">{date(endDate)}</span>
                    </div>
                </div>

                <div className='flex items-center justify-between border-t border-gray-500 p-2'>
                    <div className="flex flex-col ">
                        <span style={{fontSize:"0.65rem"}}>GUESTS</span>
                        <span className='text-xs'>1 guest</span>
                    </div>
                    <ExpandMoreIcon sx={{width:'36px',height:'36px'}}/>
                </div>
              
            </div>

            {/* button  */}
            
            <ButtonBase 
            sx={{color:'white',backgroundColor:'rgb(227, 28, 95)', width:'100%',
            padding:'0.75rem', margin:'1rem 0' ,borderRadius:'10px'}}
            >
                Reserve
            </ButtonBase>
            
            <p className="text-center text-gray-600 text-sm font-serif">You wont be charged yet</p>
            
            {/* charged fee */}
            <div className=" text-gray-500 text-sm mt-4 font-serif">
                <div className="flex justify-between">
                    <span className="underline">${price} x {minusDay(endDate,startDate)} nights</span>
                    <span>${price*minusDay(endDate,startDate)}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="underline"> Cleaning fee</span>
                    <span>$77</span>
                </div>
                <div className="flex justify-between mt-2 mb-4">
                    <span className="underline">Service fee</span>
                    <span>$0</span>
                </div>             
                <hr/>
            </div>

            {/* total */}

            <div className="flex justify-between mt-4 font-serif">
                <span>Total</span>
                <span>${price*minusDay(endDate,startDate)+77}</span >
            </div>


            
        </div>
    )
}

export default Checkout
