import React from 'react'

type inputFileProp={
    loading:boolean,
    handleOnChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const InputFile = ({loading,handleOnChange}:inputFileProp) => {
 
    return (
            <div>
                <label className="underline text-sm text-center cursor-pointer" htmlFor="single">
                    {loading ? 'Uploading ...' : 'Upload Avatar'}
                </label>
                <input
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
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
