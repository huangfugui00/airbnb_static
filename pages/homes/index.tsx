import React ,{useState,useEffect,useLayoutEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useSWR from 'swr'
import { InferGetStaticPropsType } from 'next'
import {categoryType} from '../../types/category'
import {productType} from '../../types/product'
import NavRow from '../../components/homes/NavRow'
import Product from '../../components/homes/Product'
import {getProducts} from '../../services/product'
import {getCategories} from '../../services/category'
import Link from 'next/link'



export async function getStaticProps<GetStaticProps>() {
    const result = getCategories()
    const productReust = getProducts()
    return{
        props:{
            categoriesApi:result?result:[],
            productsApi:productReust?productReust:[],
        }
    }   
}

const Index = ({categoriesApi,productsApi}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const [categories,setCategories] = useState([] as categoryType[])
    const [products,setProducts] = useState([] as productType[])
    const [selCategory,setSelCategory] = useState('')
    const [selTag,setSelTag] = useState('')
    
    useLayoutEffect(() => {
        setCategories(categoriesApi)
        setProducts(productsApi)
    }, [])
 

    return (
        <div>
        <Header container={'my-container-big'}/>
        <main className={`my-8  my-container-big `}>
            <NavRow 
            categories={categories} 
            selCategory={selCategory}  setSelCategory={setSelCategory}
            selTag={selTag} setSelTag={setSelTag}
            />
            {/* products */}
            <div className='mt-8 gap-4 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3  sm:grid-cols-2 '>
                {products?products.map((product,index)=>
                <Link href="/room" key={index}>
                    <a>
                        <Product key={index} product={product}/>
                    </a>
                </Link>
                ):<></>}
            </div>
        </main>
        <Footer container={'my-container-big'}/>
        </div>
      
    )
}

export default Index
