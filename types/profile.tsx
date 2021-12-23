export type profileType={
    id:string,
    username:string,
    work:string,
    location:string,
    about:string,
    avatar_url:string,
}

export type profileReduxType={
    loading:boolean,
    profile:profileType
}