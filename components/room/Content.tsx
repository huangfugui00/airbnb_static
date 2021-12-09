import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import {userType} from '../../types/user'
import HomeIcon from '@mui/icons-material/Home';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import PetsIcon from '@mui/icons-material/Pets';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import WaterIcon from '@mui/icons-material/Water';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SnoozeIcon from '@mui/icons-material/Snooze';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import Button from '@mui/material/Button'
import { DateRangePicker ,RangeKeyDict,DateRange} from 'react-date-range';


type contentProp={
    userId:userType,
    startDate:Date,
    endDate:Date,
    setStartDate:(date:Date)=>void,
    setEndDate:(date:Date)=>void,
}



const Content = ({userId,startDate,endDate,setStartDate,setEndDate}:contentProp) => {

  
    const selectionRange = {
        startDate:startDate,
        endDate: endDate,
        key: 'selection',
      }

      const handleSelect = (ranges:RangeKeyDict)=>{
        ranges.selection.startDate&&setStartDate(ranges.selection.startDate)
        ranges.selection.endDate&&setEndDate(ranges.selection.endDate)
    }
   

    return (
        <div>
            {/* host title */}
            <div className="flex justify-between border-b pb-6">
                <div>
                    <h1 className="text-xl font-semibold">Tent hosted by Nacpan</h1>
                    <p className="text-gray-500 mt-1 font-serif">2 guests 1 bedroom Half-bath</p>
                </div>
                <div>
                <Link href="/user">
                    <a>
                    {userId?<Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={userId.avatar}/>:<Avatar alt="Remy Sharp" >Richard</Avatar>}
                    </a>
                </Link>
                </div>
            </div>
            
            {/* rule */}
            <div className="py-6 border-b">
                <div className="flex gap-4 py-2">
                    <HomeIcon sx={{ width: 30, height: 30 }}/>
                    <div>
                        <h2 className="font-medium">
                        Entire home
                        </h2>
                        <p className="text-gray-500 text-sm">You’ll have the tent to yourself.</p>
                    </div>
                </div>

                <div className="flex gap-4 py-2">
                    <NetworkCheckIcon sx={{ width: 30, height: 30 }}/>
                    <div>
                        <h2 className="font-medium">
                        Enhanced Clean
                        </h2>
                        <p className="text-gray-500 text-sm line-clamp-1">Nacpan committed to Airbnb’s 5-step enhanced cleaning process—a set of standards developed in partnership with experts, for the times of COVID-19 and beyond.</p>
                    </div>
                </div>

                <div className="flex gap-4 py-2">
                    <PetsIcon sx={{ width: 30, height: 30 }}/>
                    <div>
                        <h2 className="font-medium">
                        Pets allowed
                        </h2>
                        <p className="text-gray-500 text-sm">Guests often search for this popular amenity.</p>
                    </div>
                </div>

                <div className="flex gap-4 py-2">
                    <CancelPresentationIcon sx={{ width: 30, height: 30 }}/>
                    <div>
                        <h2 className="font-medium">
                        Free cancellation for 48 hours
                        </h2>
                    </div>
                </div>

            </div>

            {/* intro */}
            <div className="py-8 border-b">
                <p className="line-clamp-3 text-gray-700 ">
                    Nacpan Glamping is located on one of the top rated beaches in Asia, ‘Nacpan Beach’, El Nido, Palawan. Stretching 4.2km, this white sand beach is fast becoming a World renowned must see destination in the Philippines.
                </p>
                <br/>
                <p className="line-clamp-2 text-gray-700 ">
                Nacpan Glamping offers the unique, one and only experience of staying in a state of the art 6m wide glamping tent meters from the beach.

                Nacpan Beach Glamping has 5 Beach Front Tents Available!
                The space
                Our tents are all fitted with high end interior including air-conditioning and two five star quality twin beds. Every three tents share a communal bathroom and showroom.
                
                </p>
            </div>

            {/* offers */}
            <div className="py-8 border-b ">
                <h1 className="mb-4">What this place offers</h1>
                <div className="grid md:grid-cols-2">
                <div className="flex gap-4 items-center mb-2">
                    <WaterIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700">Beach access – Beachfront</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <DirectionsCarIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700">Free parking on premises</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <PetsIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700">Pets allowed</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <AcUnitIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700">Air conditioning</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <FastfoodIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700">Breakfast</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <SnoozeIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-gray-700 text-sm line-through">Carbon monoxide alarm</p>                   
                </div>
                <div className="flex gap-4 items-center mb-2">
                    <SmokeFreeIcon sx={{ width: 30, height: 30 }}/>
                    <p className="text-sm text-gray-700 line-through">Smoke alarm</p>                   
                </div>

                </div>
                

                <div className="mt-8">
                <Button variant="outlined"
                sx={{
                    color:'black',borderColor:"black",textTransform:"none",
                    fontSize:'1rem',padding:"0.5rem 1.25rem", borderRadius:'8px',
                    "&:hover": {
                        borderColor: 'black',
                    }
                }}
                >
                    Show all 9 amenities
                </Button>

                </div>
              
            </div>

            {/* calend */}
            <div  className="my-12">
                <div className="hidden lg:block">
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange = {handleSelect}
                    />
                </div>
                <div className="lg:hidden">
                    <DateRange
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange = {handleSelect}
                    />
                </div>
        
            </div>

            
         
        </div>
    )
}

export default Content
