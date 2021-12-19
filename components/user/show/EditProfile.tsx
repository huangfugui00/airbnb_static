import React,{useState} from 'react'
import Mybutton from '../../MyButton'
import MyInput from '../../MyInput'
import Loading from '../../Loading'
import {profileType} from '../../../types/profile'

type EditProfileProp={
    saving:boolean,
    CurrentAbout:string,
    CurrentLocation:string,
    CurrentWork:string,
    handelCancel:()=>void,
    handleSaveProfile:( profile:profileType)=>void,
}

const EditProfile = ({saving,CurrentAbout,CurrentLocation,CurrentWork,handelCancel,handleSaveProfile}:EditProfileProp) => {
    const [about,setAbout]=useState(CurrentAbout)
    const [location,setLocation]=useState(CurrentLocation)
    const [work,setWork]=useState(CurrentWork)

    const onSaveEvent=()=>{
        const profileUpdate={
            about,
            location,
            work,
        } as profileType
        handleSaveProfile(profileUpdate)
    }
    
    return (
        <div>
            {/* about */}
            <div>
                <label>About</label>
                <textarea className="px-1 mt-2 border block w-full rounded-lg h-24"
                value={about} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setAbout(e.target.value)}/>
            </div>
            {/* location */}
            <div className="mt-6">
                <label >Location</label>
                <div className="mt-2">
                <MyInput value={location} setValue={setLocation}/>
                </div>
            </div>
            {/* Add More */}
            <div className="flex flex-col mt-6 gap-2">
                <span>Langauges I speak</span>
                <span className="font-bold underline text-sm">Add More</span>
            </div>
            {/* work */}
            <div className="mt-6">
                <label>Work</label>
                <div className="mt-2">
                <MyInput value={work} setValue={setWork}/>
                </div>
            </div>
            {/* button group */}
            <div className="flex justify-between mt-12">
                <div className="underline font-semibold cursor-pointer"
                    onClick={handelCancel}
                >
                    Cancel
                </div>
                {
                    !saving?
                    <Mybutton className="bg-black text-white px-4 py-2 rounded-lg"
                    onClick={onSaveEvent}
                    >
                        Save
                    </Mybutton>:
                    <Loading loading={saving} type="balls" color="black" size={40}/>
                }
               
            </div>


        </div>
    )
}

export default EditProfile
