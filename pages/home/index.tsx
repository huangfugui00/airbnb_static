import React, { useState,useEffect } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { InferGetStaticPropsType } from 'next'
import {nearbyType} from '../../types/nearby'
import Nearby from '../../components/Nearby'
import MediumCard from '../../components/MediumCard'
import LargerCart from '../../components/LargerCart'
import Footer from '../../components/Footer'
// const HttpsProxyAgent = require('https-proxy-agent');
// const nodeFetch = require('node-fetch');
import { mediumCartType } from '../../types/mediumCart'

// const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:7890');

// export async function getStaticProps<GetStaticProps>() {
  
//     console.log("getStaticProps()");
//     let smallCarts = await nodeFetch('https://links.papareact.com/pyp', { agent: proxyAgent})
//     smallCarts = await smallCarts.json();
//                 // .then(res=>res.json())
//     let mediumCartsApi = await nodeFetch('https://links.papareact.com/zp1', { agent: proxyAgent})
//     mediumCartsApi = await mediumCartsApi.json();
//         // .then(res=>res.json())
//     console.log(smallCarts)
    
//     return{
//         props:{
//             smallCarts,
//             mediumCartsApi
//         }
//     }    

// }

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
    
    return{
        props:{
            smallCarts,
            mediumCartsApi
        }
    }    

}



export default Home
