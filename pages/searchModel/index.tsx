import React ,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useSWR from 'swr'
import { InferGetStaticPropsType } from 'next'
import api from '../services/api'
import {categoryType} from '../../types/category'
import {productType} from '../../types/product'
import NavRow from './component/NavRow'
import Product from './component/Product'

export async function getStaticProps<GetStaticProps>() {
    const result = await api().get('/category')
    const productReust = await api().get('/product')
    return{
        props:{
            categoriesApi:result?result.data:[],
            productsApi:productReust?productReust.data:[],
        }
    }   
}

const Index = ({categoriesApi,productsApi}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const [categories,setCategories] = useState([] as categoryType[])
    const [products,setProducts] = useState([] as productType[])
    const [selCategory,setSelCategory] = useState('')
    const [selTag,setSelTag] = useState('')

    useEffect(() => {
        setCategories(categoriesApi)
        setProducts(productsApi)
    }, [])
 

    return (
        <div>
        <Header/>
        <main className={`sm:container mx-auto mb-8`}>
            <NavRow 
            categories={categories} 
            selCategory={selCategory}  setSelCategory={setSelCategory}
            selTag={selTag} setSelTag={setSelTag}
            />
            {/* products */}
            <div className='mt-8 gap-4 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3  sm:grid-cols-2 '>
                {products?products.map((product,index)=>
                <Product key={index} product={product}/>
                ):<></>}
            </div>
        </main>
        <Footer/>
        </div>
      
    )
}

export default Index
