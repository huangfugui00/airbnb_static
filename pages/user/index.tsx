import React,{useState,useLayoutEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Identify from '../../components/user/Identify'
import HomeList from '../../components/user/HomeList'
import Reviews from '../../components/user/Reviews'
import {getProdcutDetail} from '../../services/product'
import {getComments} from '../../services/comment'
import { InferGetStaticPropsType } from 'next'
import {productType} from '../../types/product'
import {commentType} from '../../types/comment'

export async function getStaticProps<GetStaticProps>() {
    const product = getProdcutDetail()
    const comments = getComments()
    return{
        props:{
            productApi:product?product:{} as productType,
            commentsApi:comments?comments:[] as commentType[]
        }
    }   
}

const Index = ({productApi,commentsApi}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const container = 'my-container'

    const [product,setProduct] = useState({} as productType)
    const [comments,setComments] =  useState([] as commentType[])
 

    useLayoutEffect(() => {
        if(productApi)
            setProduct(productApi)
        if(commentsApi){
            setComments(commentsApi)
        }
    }, [])
    return (
        <div>
            <Header container={container}/>
           
            <main className={`${container} md:grid md:grid-cols-12`}>
                {/* user identify */}
                <div className="col-span-4 mr-8">
                    <Identify/>
                </div>
                <div className=" col-start-6 col-span-7">
                {/* home list */}
                <HomeList product={product}/>

                {/* review */}
                <Reviews product={product} comments={comments}/>
                </div>
           
            </main>

            <Footer container={container}/>
        </div>
    )
}

export default Index
