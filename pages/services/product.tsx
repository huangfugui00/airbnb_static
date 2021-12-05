import {v4 as uuidv4} from 'uuid'
import {productType} from '../../types/product'
const products=[
    {
        id : uuidv4(),
        location:'Shanghai,Shanghai',
        intro:'HIDEOUT BEEHIVE - Eco Bamboo Home',
        price:467,
        photos:[
            '/assets/products/product1.webp',
        ],
        category:'Cabins',
    },
    {
        id : uuidv4(),
        location:'Rizhao,Shandong',
        intro:'HIDEOUT BEEHIVE - Eco Bamboo Home',
        price:256,
        photos:[
            '/assets/products/product2.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Selat,Bail',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:256,
        photos:[
            '/assets/products/product3.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:1378,
        photos:[
            '/assets/products/product4.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ubud Baili',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:1378,
        photos:[
            '/assets/products/product5.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Bail Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:178,
        photos:[
            '/assets/products/product6.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Golang Bali',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:248,
        photos:[
            '/assets/products/product7.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ems Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:498,
        photos:[
            '/assets/products/product8.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Eis Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:1818,
        photos:[
            '/assets/products/product9.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nsido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:898,
        photos:[
            '/assets/products/product10.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Asi Nidoxa',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:1378,
        photos:[
            '/assets/products/product11.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Esi Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:198,
        photos:[
            '/assets/products/product12.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Eisx Tlido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:578,
        photos:[
            '/assets/products/product13.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:178,
        photos:[
            '/assets/products/product14.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Gai Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:986,
        photos:[
            '/assets/products/product15.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:682,
        photos:[
            '/assets/products/product16.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Eisz Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:682,
        photos:[
            '/assets/products/product17.webp',
        ],
        category:'Castles',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:682,
        photos:[
            '/assets/products/product18.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:682,
        photos:[
            '/assets/products/product19.webp',
        ],
        category:'Offbeat',
    },
    {
        id : uuidv4(),
        location:'Ei Nido',
        intro:'Leafy Greens Chiangmai : Mushroom M5',
        price:682,
        photos:[
            '/assets/products/product20.webp',
        ],
        category:'Offbeat',
    },
] as productType[]


export const getProducts=()=>{
    return products
}