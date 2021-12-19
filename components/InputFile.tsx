import React from 'react'

type inputFileProp={
    loading:boolean,
    handleOnChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const InputFile = ({loading,handleOnChange}:inputFileProp) => {
 
    return (
            <div className="relative">
                <label className="underline text-sm text-center cursor-pointer" htmlFor="single">
                    {loading ? 'Uploading ...' : 'Upload Avatar'}
                </label>
                <input
                className="hidden "
                type="file"
                id="single"
                accept="image/*"
                onChange={handleOnChange}
                disabled={loading}
                />
            </div>
    )
}

export default InputFile
