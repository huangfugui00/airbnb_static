import {userType} from './user'
export type productType = {
    id:string,
    location:string,
    title:string,
    price:number,
    photos:string[],
    intro:string,
    category:string,
    userId:userType,
}