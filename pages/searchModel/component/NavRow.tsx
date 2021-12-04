import React from 'react'
import Image from 'next/image'
import {categoryType} from '../../../types/category'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useElementSize,useWindowSize } from 'usehooks-ts'

type navRowProp = {
    categories:categoryType[]
    selCategory:string,
    setSelCategory:(selCategory:string)=>void,
    selTag:string,
    setSelTag:(selTag:string)=>void,
}


type categoryMenuProp = {
    anchorEl:null | HTMLElement,
    open: boolean,
    handleClose:()=>void,
    categories:categoryType[],
    // handleClick:(event: React.MouseEvent<HTMLButtonElement>)  =>void,
}

const CategoryMenu = ({anchorEl,open,handleClose,categories}:categoryMenuProp)=>{
    return(
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{height:"50vh"}}

      >
        {
            categories.map((category,index)=>
            <MenuItem onClick={handleClose} key={index} className="flex gap-2 ">
                <Image  src={category.icon} alt={category.name} layout="fixed" height={15} width={15}/>
                <span className='text-xs'>{category.name}</span>
            </MenuItem>
            )
        }
      </Menu>

    )
}


const NavRow = ({categories,selCategory,setSelCategory,selTag,setSelTag}:navRowProp) => {
    const [squareRef, element] = useElementSize()
    const [containeRef, container] = useElementSize()
    const { width, height } = useWindowSize()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const number = Math.floor(0.7*window.innerWidth/130)

    return (
        <div className="flex items-center justify-between " ref={containeRef}>
            {/* categories */}
            <div className='flex '>  

                {categories.slice(0,number).map((category,index)=>
                <div key={index} className="-ml-2.5">
                    <Button className='rounded' onClick={()=>setSelCategory(category.name)}>
                    {selCategory===category.name&&<Image  src={category.icon} alt={category.name} layout="fixed" height={20} width={20}/>}
                    <span className={`ml-2 text-sm normal-case font-mono antialiased ${selCategory===category.name?'text-black':'text-gray-700' } `}>
                        {category.name}
                        </span>
                    </Button>
                </div>
                )}

                <Button
                 className='rounded'
                 id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                 >
                    <span className={`ml-2 text-sm normal-case font-mono antialiased ${selCategory==='more'?'text-black':'text-gray-700' } `}>
                        More
                    </span>
                    <ExpandMoreIcon color="action"  fontSize="small"/>
                </Button>

                <CategoryMenu 
                anchorEl={anchorEl} open={open} handleClose={handleClose}
                categories={categories.slice(number)}
                />

            </div>
            {/* tag_button */}
                {/* <p>{`${number} square width is ${width}px and weight ${container.width}px`}</p> */}
            <div className='flex gap-2'>
                <Button  color="inherit" variant='outlined'
                onClick={()=>setSelTag('time')}
                className={`rounded-full text-sm normal-case ${selTag==='time'?'bg-gray-100 border-2 border-black text-black':'border-gray-300 text-grey-500'}`}
                >
                    <span className="text-black">Anytime</span>
                    {selTag==='time'?<ExpandLessIcon fontSize="small" className='hidden lg:block'/>:<ExpandMoreIcon fontSize="small" className='hidden lg:block' />}
                </Button>
                <Button color="inherit" variant='outlined' 
                onClick={()=>setSelTag('guest')}
                className={`rounded-full text-sm normal-case ${selTag==='guest'?'bg-gray-100 border-2 border-black text-black':'border-gray-300 text-grey-500'}`}
                >
                    <span className="text-black">Guests</span>
                    {selTag==='guest'?<ExpandLessIcon fontSize="small" className='hidden lg:block'/>:<ExpandMoreIcon fontSize="small" className='hidden lg:block'/>}
                </Button>
                <Button color="inherit" variant='outlined' 
                onClick={()=>setSelTag('fiters')}
                className={`rounded-full text-sm normal-case ${selTag==='fiters'?'bg-gray-100 border-2 border-black text-black':'border-gray-300 text-grey-500'}`}
                >
                    {selTag==='fiters'?<FilterListOffIcon fontSize="small"/>:<FilterListIcon fontSize="small"/>}
                    <span className="text-black hidden lg:block">Filters</span>
                </Button>
            </div>
            

        </div>
    )
}

export default NavRow
