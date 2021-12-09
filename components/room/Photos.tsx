import React from 'react'
import Image from 'next/image'

type photosProp={
    photos:string[]
}
const Photos = ({photos}:photosProp) => {

    if(!photos){
        return<></>
    }
    const mainPhoto = photos[0]
    const photoGroups = photos.slice(1)
    
 


    return (
        <div className="grid md:grid-cols-2 gap-4">
            {/* main photo */}
            <div className="relative h-48 sm:h-64 lg:h-96 md:h-80">
                <Image  className="rounded-xl cursor-pointer" src={mainPhoto} layout='fill' objectFit="cover" alt={mainPhoto}/>
            </div>
            {/* small photoss */}
            <div className="relative hidden md:grid grid-cols-2 gap-2">
                
                {
                    photoGroups.map((photo,index)=>
                    <div  key={index} className="relative h-48 lg:h-48 md:h-40 ">
                    <Image src={photo} layout="fill" objectFit="cover" alt={photo}/>
                    </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default Photos
