import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className='bg-gray-50'>
        <div className={`${styles.footer} container mx-auto gap-4 justify-items-start lg:justify-items-between grid grid-cols-2 lg:grid-cols-4 `}>
            <div>
                <h5>About</h5>
                <p>How Airbnb work</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div>
                <h5>Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It a awesome clone</p>
                <p>Referrals accepted</p>
                <p>Papafam</p>
            </div>
            <div>
                <h5>Host</h5>
                <p>Papa React</p>
                <p>Presents</p>
                <p>Zero to full stack Hero</p>
                <p>Join Plus</p>
                <p>Hundreds of Students</p>
            </div>
            <div>
                <h5>About</h5>
                <p>How Airbnb work</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
