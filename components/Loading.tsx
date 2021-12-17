import React from 'react'
import ReactLoading from 'react-loading';


type loadingProp={
    loading:boolean
    size?:number
}
const Loading = ({loading,size}:loadingProp) => {
    return (
        <div>
             {loading?<div className="flex justify-center">
                            {size?<ReactLoading type="spin" color="red" height={size} width={size} />:
                            <ReactLoading type="spin" color="red" height={30} width={30} />}
                        </div>
                        :<></>}
        </div>
    )
}

export default Loading
