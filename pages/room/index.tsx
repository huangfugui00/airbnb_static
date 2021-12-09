import React,{useState,useLayoutEffect,useRef,Ref} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Summary from '../../components/room/Summary'
import Photos from '../../components/room/Photos'
import Content from '../../components/room/Content'
import Checkout from '../../components/room/Checkout'
import CheckOutBottom from '../../components/room/CheckOutBottom'
import Comment from '../../components/room/Comment'
import Host from '../../components/room/Host'
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


const Room = ({productApi,commentsApi}:InferGetStaticPropsType<typeof getStaticProps>) => {

    const [product,setProduct] = useState({} as productType)
    const [comments,setComments] =  useState([] as commentType[])
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())

    useLayoutEffect(() => {
        if(productApi)
            setProduct(productApi)
        if(commentsApi){
            setComments(commentsApi)
        }
    }, [])
    const container = 'my-container'
    const ref = useRef<HTMLDivElement>(null) 

    const scrollHandler = () => {
        if(ref&&ref.current){
            if(ref.current.getBoundingClientRect().top<0){
                ref.current.classList.add('order-last')
            }
            else{
                ref.current.classList.remove('order-last')
            }
        }
      
      };
    useLayoutEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
          window.removeEventListener("scroll", scrollHandler, true);
        };
      }, []);
    return (
        <div className="relative">
            <Header container={container}/>
            <main className={container}>
            {/* summary */}
            <Summary title={product.title} location={product.location}/>

            {/* photos */}
            <Photos photos={product.photos}/>

           
            {/* main
            {content}
            {Shop modal}
            */}
             <div className='mt-8 grid md:grid-cols-12  '>

                            
                <div ref={ref} className="col-span-7 ">
                    <Content userId={product.userId} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
                </div>

                <div  className=" hidden md:block col-start-9 col-span-4  sticky top-8 " >
                    <Checkout price={product.price} startDate={startDate} endDate={endDate}/>
                </div>

        
            </div>

            

            <hr className="border-grey-700"/>


            {/* comments */}
            <Comment comments={comments}/>
            {/* map  */}

            {/* Host */}
            <Host owner={product.userId}/>

            {/* Rule */}
            </main>
           
            <Footer container={container}/>

            <div className={`md:hidden sticky  bottom-0`}>
                <CheckOutBottom price={product.price}/>
            </div>
        </div>
    )
}

export default Room
