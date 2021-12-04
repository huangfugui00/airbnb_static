import React ,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useSWR from 'swr'
import { InferGetStaticPropsType } from 'next'
import api from '../services/api'
import {categoryType} from '../../types/category'
import Image from 'next/image'
import NavRow from './component/NavRow'

export async function getStaticProps<GetStaticProps>() {
    const result = await api().get('/category')
    return{
        props:{
            categoriesApi:result.data
        }
    }   
}

const index = ({categoriesApi}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const [categories,setCategories] = useState([] as categoryType[])
    const [selCategory,setSelCategory] = useState('')
    const [selTag,setSelTag] = useState('')

    useEffect(() => {
        console.log(categoriesApi)
        setCategories(categoriesApi)
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
            <div className={styles.products}>

            </div>
        </main>
        <Footer/>
        </div>
      
    )
}

export default index
