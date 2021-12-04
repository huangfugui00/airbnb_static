// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {v4 as uuidv4} from 'uuid'

const category = [
    {
        id : uuidv4(),
        name:'Offbeat',
        icon:'/assets/category_icon/Offbeat.jpg'
    },
    {
        id:uuidv4(),
        name:'Cabins',
        icon:'/assets/category_icon/Cabins.jpg'
    },
    {
        id:uuidv4(),
        name:'Beachfront',
        icon:'/assets/category_icon/Beachfront.jpg'
    },
    {
        id:uuidv4(),
        name:'Castles',
        icon:'/assets/category_icon/Castles.jpg'
    },
    {
        id:uuidv4(),
        name:'Amazing pools',
        icon:'/assets/category_icon/Amazing pools.jpg'
    },
    {
        id:uuidv4(),
        name:'Barns',
        icon:'/assets/category_icon/Barns.jpg'
    },
    {
        id:uuidv4(),
        name:'Off-the-grid',
        icon:'/assets/category_icon/Off-the-grid.jpg'
    },
    {
        id:uuidv4(),
        name:'A-frames',
        icon:'/assets/category_icon/A-frames.jpg'
    },
    {
        id:uuidv4(),
        name:'Luxe',
        icon:'/assets/category_icon/Luxe.jpg'
    },
    {
        id:uuidv4(),
        name:'Farms',
        icon:'/assets/category_icon/Farms.jpg'
    },
    {
        id:uuidv4(),
        name:'Kezhan',
        icon:'/assets/category_icon/Kezhan.jpg'
    },
    {
        id:uuidv4(),
        name:'Cycladic Houses',
        icon:'/assets/category_icon/Cycladic Houses.jpg'
    },
    {
        id:uuidv4(),
        name:'Domes',
        icon:'/assets/category_icon/Domes.jpg'
    },
    {
        id:uuidv4(),
        name:'Yurts',
        icon:'/assets/category_icon/Yurts.jpg'
    },
] 





export default function handler(
  req,
  res
) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
  res.status(200).json({data:category})

  }
}
