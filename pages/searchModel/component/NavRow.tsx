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
import { makeStyles } from '@mui/styles';







//category

type categoryMenuProp = {
    anchorEl:null | HTMLElement,
    open: boolean,
    handleClose:()=>void,
    categories:categoryType[],
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
            categories?categories.map((category,index)=>
            <MenuItem onClick={handleClose} key={index} className="flex gap-2 ">
                <Image  src={category.icon} alt={category.name} layout="fixed" height={15} width={15}/>
                <span className='text-xs'>{category.name}</span>
            </MenuItem>
            ):<></>
        }
      </Menu>

    )
}

//navrow
type navRowProp = {
    categories:categoryType[],
    selCategory:string,
    setSelCategory:(selCategory:string)=>void,
    selTag:string,
    setSelTag:(selTag:string)=>void,
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
    const number = typeof window === "undefined" ?0: Math.floor(0.7*window.innerWidth/130)

   

    return (
        <div className="flex items-center justify-between " ref={containeRef}>
            {/* categories */}
            <div className='flex '>  

                {categories?categories.slice(0,number).map((category,index)=>
                <div key={index} className="-ml-2.5">
                    <Button  onClick={()=>setSelCategory(category.name)}>
                    {selCategory===category.name&&<Image  src={category.icon} alt={category.name} layout="fixed" height={20} width={20}/>}
                    <span className={`ml-2 text-sm normal-case font-mono antialiased ${selCategory===category.name?'text-black':'text-gray-700' } `}>
                        {category.name}
                        </span>
                    </Button>
                </div>
                ):<></>}

                <Button
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
                categories={categories?categories.slice(number):categories}
                />

            </div>
            <div className='flex gap-2'>
                {/* <div className={` rounded-full text-sm normal-case ${selTag==='time'?'text-black 2px bg-grey-200':'text-grey-500 1px '}`}> */}
                <Button  color="inherit" variant='outlined'
                onClick={()=>setSelTag('time')}
                sx={{
                borderRadius:'50px',fontSize:'0.875rem',textTransform:'none',
                borderColor:`${selTag==='time'?'black':'rgba(209, 213, 219,1)'}`,
                borderWidth:`${selTag==='time'?'2px':'1px'}`,
                backgroundColor:`${selTag==='time'?'rgba(209, 213, 219,0.2)':'white'}`,
                }}
                >
                    <span className="text-black">Anytime</span>
                    <div className='hidden lg:block'>
                    {selTag==='time'?<ExpandLessIcon fontSize="small" />:<ExpandMoreIcon fontSize="small"  />}
                    </div>
                </Button>
                {/* </div> */}
               
                <Button color="inherit" variant='outlined' 
                onClick={()=>setSelTag('guest')}
                sx={{
                    borderRadius:'50px',fontSize:'0.875rem',textTransform:'none',
                    borderColor:`${selTag==='guest'?'black':'rgba(209, 213, 219,1)'}`,
                    borderWidth:`${selTag==='guest'?'2px':'1px'}`,
                    backgroundColor:`${selTag==='guest'?'rgba(209, 213, 219,0.2)':'white'}`,
                    }}
                >
                    <span className="text-black">Guests</span>
                    <div className='hidden lg:block'>
                    {selTag==='guest'?<ExpandLessIcon fontSize="small" />:<ExpandMoreIcon fontSize="small" />}
                    </div>
                </Button>
                <Button color="inherit" variant='outlined' 
                onClick={()=>setSelTag('fiters')}
                sx={{
                    borderRadius:'50px',fontSize:'0.875rem',textTransform:'none',
                    borderColor:`${selTag==='fiters'?'black':'rgba(209, 213, 219,1)'}`,
                    borderWidth:`${selTag==='fiters'?'2px':'1px'}`,
                    backgroundColor:`${selTag==='fiters'?'rgba(209, 213, 219,0.2)':'white'}`,
                    }}
                >
                    {selTag==='fiters'?<FilterListOffIcon fontSize="small"/>:<FilterListIcon fontSize="small"/>}
                    <span className="text-black hidden lg:block">Filters</span>
                </Button>
            </div>
            

        </div>
    )
}

export default NavRow
