import React from 'react'

type controlEdit={
    editProfile:boolean,
    setEditProfile:(editProfile:boolean)=>void
}
const ControlEdit = ({editProfile,setEditProfile}:controlEdit) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">Hi, I’m Rain</h1>
            <span className="mt-2 text-sm text-gray-500">Joined in 2021</span>
            {/* edit button */}
            {editProfile?
            <button className="flex mt-4 cursor-pointer text-gray-300 text-sm underline" disabled
            >
                Edit profile</button>
            :
                <button className="flex mt-8 cursor-pointer text-sm underline" 
                onClick={()=>setEditProfile(true)}
                >
                    Edit profile</button>
            }
        </div>
    )
}

export default ControlEdit
