import {userType} from './user'
export type commentType = {
    id:string,
    rate:number,
    content:string,
    date:string,
    userId:userType
}