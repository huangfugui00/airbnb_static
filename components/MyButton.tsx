import React from 'react'
import Button from '@mui/material/Button'
import styles from './myButton.module.scss'




type Props = {
    className?: string,
    onClick?:()=>void,
  };

const MyButton: React.FC<Props> = ({className,onClick,children}) => {
    return (
        <div>
            <button onClick={onClick} className={`${styles.button} ${className} `}>
                {children}
            </button>
        </div>
    )
}

export default MyButton
