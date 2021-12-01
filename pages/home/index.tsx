import React, { useState,useEffect } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { InferGetStaticPropsType } from 'next'
import {nearbyType} from '../../types/nearby'
import Nearby from '../../components/Nearby'
import MediumCard from '../../components/MediumCard'
import LargerCart from '../../components/LargerCart'
import Footer from '../../components/Footer'

import { mediumCartType } from '../../types/mediumCart'

const Home = ({smallCarts,mediumCartsApi}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const [nearby, setNearby] = useState([] as nearbyType[])
    const [mediumCarts, setMediumCarts] = useState([] as mediumCartType[])
    useEffect(() => {
        setNearby(smallCarts)
        setMediumCarts(mediumCartsApi)
    }, [])
    return (
        <div>
            <Header/>
            <Banner/>
            <Nearby nearby={nearby}/>
            <MediumCard mediumCarts={mediumCarts}/>
            <LargerCart
             img='https://links.papareact.com/4cj'
             title="The Greatest Outdoors"
             description="Wishlist created by Airbnb"
             btn_text="Get Inspired"
             />
             <Footer/>
        </div>
    )
}

export async function getStaticProps<GetStaticProps>() {
  
    console.log("getStaticProps()");
    const smallCarts = await fetch('https://links.papareact.com/pyp')
                .then(res=>res.json())
    const mediumCartsApi = await fetch('https://links.papareact.com/zp1')
        .then(res=>res.json())
    // console.log(data)
    
    return{
        props:{
            smallCarts,
            mediumCartsApi
        }
    }    

}

export default Home
