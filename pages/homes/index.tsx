import React ,{useState,useEffect,useLayoutEffect,useRef} from 'react'

import StickyTop from '../../components/StickyTop'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { InferGetStaticPropsType } from 'next'
import {categoryType} from '../../types/category'
import {productType} from '../../types/product'
import NavRow from '../../components/homes/NavRow'
import Product from '../../components/homes/Product'
import Map from '../../components/Map'
import {getProducts} from '../../services/product'
import {getCategories} from '../../services/category'
import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
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
    const [mapList,setMapList] = useState('list')
    useLayoutEffect(() => {
        setCategories(categoriesApi)
        setProducts(productsApi)
    }, [categoriesApi,productsApi])

    const handleClickMapList = ()=>{
        if(mapList==='map'){
            setMapList('list')
        }
        else{
            setMapList('map')
        }
    }
 

    return (
        <div>
            <StickyTop>
            <Header container={'my-container-big '}/>
            </StickyTop>
            {/* <div className="fixed right-0 top-0 left-0 z-100 bg-white ">
            </div> */}
        <main className={`my-8`}>
            <div className=" my-container-big">
            <NavRow 
            categories={categories} 
            selCategory={selCategory}  setSelCategory={setSelCategory}
            selTag={selTag} setSelTag={setSelTag}
            />
            </div>
            <div className="relative">
                {/* products */}
                <div className={`${mapList=='map'&& 'hidden'}  my-container-big col-span-12 xl:col-span-8 mt-8 gap-4 grid  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 `}>
                    {products?products.map((product,index)=>
                    <Link href="/room" key={index}>
                        <a>
                            <Product key={index} product={product}/>
                        </a>
                    </Link>
                    ):<></>}
                </div>
                {/* map */}
                <div className={`${mapList=='list'&& 'hidden'} mt-8`} style={{height:'768px'}}>
                        <Map/>
                </div>

                <button className="sticky bottom-12 left-1/3 md:left-1/2 text-white bg-black py-4 px-6 rounded-full text-sm"
                    onClick={handleClickMapList}
                >
                    {mapList==='list'?
                    <div>
                    <span className="mr-2">Show Map</span>
                    <MapIcon sx={{width:'20px',height:"20px"}}/>
                    </div>
                    :
                    <div>
                    <span className="mr-2">Show List</span>
                    <ListIcon sx={{width:'20px',height:"20px"}}/>
                    </div>
                    }
                </button>
            </div>
        </main>
        <Footer container={'my-container-big'}/>
        </div>
      
    )
}

export default Index
