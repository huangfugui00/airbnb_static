import {v4 as uuidv4} from 'uuid'
import {commentType} from '../types/comment'

const comments=[
    {
        id:uuidv4(),
        rate:5,
        date:'November 2019',
        content:'This place was magical. The architecture and layout of this place is fascinating. They have a great restaurant next door where you can even get a private dinner on the beach with your loved one. The bathrooms were always super clean and the beds in the tents were comfy. Glamping guests get to use beach chairs in the designated spot. They have fun activities at night like campfires with roasting marshmallows, fun games and activities during the day and more. I’d recommend staying here just to experience it, even if it’s only a couple days!',
        userId:{
            id:uuidv4(),
            name:'Chance',
            avatar:'/assets/avatar/avatar1.webp'
        }
    },
    {
        id:uuidv4(),
        rate:5,
        date:'September 2019',
        content:'The tent was huge and comes with two beds. We pushed ours together to make one giant bed. It was amazing. During the day the tent gets a little humid, but by 4pm you can turn the air on and get instant relief. Sleeping at night was no problem.',
        userId:{
            id:uuidv4(),
            name:'John',
            avatar:'/assets/avatar/avatar2.webp'
        }
    },
    {
        id:uuidv4(),
        rate:4,
        date:'September 2020',
        content:'Really beautiful space with amazing views definitely a great value',
        userId:{
            id:uuidv4(),
            name:'Pauline',
            avatar:'/assets/avatar/avatar3.webp'
        }
    },
    {
        id:uuidv4(),
        rate:5,
        date:'Nov 2018',
        content:'Beautiful views, comfy beds, clean, warm hospitality, local tips and places to see:)',
        userId:{
            id:uuidv4(),
            name:'Abbey',
            avatar:'/assets/avatar/avatar4.webp'
        }
    },
    {
        id:uuidv4(),
        rate:5,
        date:'May 2020',
        content:'This place was magical. The architecture and layout of this place is fascinating. They have a great restaurant next door where you can even get a private dinner on the beach with your loved one. The bathrooms were always super clean and the beds in the tents were comfy. Glamping guests get to use beach chairs in the designated spot. They have fun activities at night like campfires with roasting marshmallows, fun games and activities during the day and more. I’d recommend staying here just to experience it, even if it’s only a couple days!',
        userId:{
            id:uuidv4(),
            name:'Chance',
            avatar:'/assets/avatar/avatar5.webp'
        }
    },
    {
        id:uuidv4(),
        rate:5,
        date:'Jan 2021',
        content:'Such a stunning view at this place. Host is incredibly kind and serves breakfast to us every morning which was delicious. Lovely pool and view of the sunset for a really reasonable!',
        userId:{
            id:uuidv4(),
            name:'Rachel',
            avatar:'/assets/avatar/avatar6.webp'
        }
    },
] as commentType[]


export const getComments = ()=>{
    return comments
}