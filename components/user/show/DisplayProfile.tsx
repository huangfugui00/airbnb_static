import React from 'react'
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import WorkIcon from '@mui/icons-material/Work';
type displayType = {
    about:string,
    live:string,
    work:string,
}

const DisplayProfile = ({about,live,work}:displayType) => {
    return (
        <div>
            {/* abot */}
            <div>
                <h1 className="font-semibold text-lg">About</h1>
                <p className="text-sm mt-4">{about}</p>
            </div>
            {/* live */}
            {live&&
            <div className="mt-8 flex gap-2">
                <HouseSidingIcon/>
                <span>Live in:{live}</span>
            </div>}

            {/* work */}
            {work&&
            <div className="mt-4 flex gap-2">
                <WorkIcon/>
                <span>Work:{work}</span>
            </div>}
        </div>
    )
}

export default DisplayProfile
