export const getQuery = (urlParam:string,param:string)=>{//从url中抽取key value
    const subString = urlParam.match('[?&]' + param + '=([^&#]+)');
    if(subString !== null){
        return subString[1]
    }
    return subString
}

export const auth = ()=>{
    const loggedIn = sessionStorage.getItem('token')
    if ( !loggedIn) {
        return false
    } 
    return true
}