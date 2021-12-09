import React from 'react'
import {userType} from '../../types/user'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar'
import StarIcon from '@mui/icons-material/Star';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery';

type hostType = {
    owner:userType
}

const Host = ({owner}:hostType) => {
    const mdQuery = useMediaQuery('(min-width:768px)');


    return (
        <div className="my-12">
            {/* //host */}
            {
                owner&&
                <div className=" justify-between md:justify-start flex items-center gap-4">
                <Link href="/login">
                    <a>
                    <Avatar src={owner.avatar} alt={owner.name} sx={{width:'56px',height:'56px'}}/>
                    </a>
                </Link>
                <div  className="order-first md:order-last">
                    <h2 className="text-xl font-bold">Hosted by {owner.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">Joined in July 2020</p>
                </div>
            </div>
            }
          

            
            <div className="grid md:grid-cols-2 mb-12">
                <div className="flex flex-wrap mt-8 mr-24 gap-2">
                    <div className="flex items-center gap-2 mr-8">
                    <StarIcon sx={{color:'red', width:"18px", height:"18px"}}/>
                    <p className="text-sm text-gray-600">27 reviews</p>
                    </div>

                    <div className="flex items-center gap-2 mr-8">
                    <PriceCheckIcon sx={{color:'red', width:"18px", height:"18px"}}/>
                    <p className="text-sm text-gray-600">Identity verified</p>
                    </div>

                    <div className="flex items-center gap-2 mr-8">
                    <ManageAccountsIcon sx={{color:'red', width:"18px", height:"18px"}}/>
                    <p className="text-sm text-gray-600">Superhost</p>
                    </div>
                </div>

                <div className=" mt-8 mr-24 flex flex-col gap-2">
                    <p>Response rate:70%</p>
                    <p>Response time: within a few hours</p>
                </div>

                <div className=" mt-8 mr-24 flex flex-col gap-2">
                    <h2 className="font-semibold">During your stay</h2>
                    <p className='text-sm  text-gray-500'>i will available on-site to help the guest</p>
                </div>

                <div className="mt-8 mr-24 order-last md:order-none">
                <Button variant="outlined"
                sx={{
                    color:'black',borderColor:"black",textTransform:"none",
                    fontSize:'1rem',padding:"0.5rem 1.25rem", borderRadius:'8px',
                    width: mdQuery === true ? '10rem':'100%',
                    "&:hover": {
                        borderColor: 'black',
                    }
                }}
                >
                   Contact host
                </Button>
                </div>

                <div className=" mt-8 mr-24 flex flex-col gap-2">
                    {owner&&<h2 className="font-semibold">{owner.name} is a Superhost</h2>}
                    <p className='text-sm  text-gray-500'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                </div>

                <div className="flex items-center mt-4 mr-24  gap-2">
                    <LocalPoliceIcon sx={{color:'orange'}}/>
                    <p className='text-xs  text-gray-500'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.t</p>
                </div>


                
            </div>
            <hr/>
            
        </div>
    )
}

export default Host
