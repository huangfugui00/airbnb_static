import React from 'react'

type myInputProp={
    prefix?:string,
    placeholder?:string,
    value?:string,
    setValue?:(value:string)=>void
}
const MyInput = ({prefix,placeholder,value,setValue}:myInputProp) => {
    return (

        <div className="py-1 px-2 border rounded border-gray-300 hover:border-black">
            <span className="text-xs font-serif">{placeholder}</span>
            <div className="flex items-center gap-2 ">
                <span className="font-mono ">{prefix}</span>
                <input className="w-full focus:outline-none"  value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}></input>
            </div>
        </div>
    )
}

export default MyInput
