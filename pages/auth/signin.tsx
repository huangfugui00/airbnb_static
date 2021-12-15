import React from 'react'
import {getProviders,signIn} from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next'


const signin = ({providers}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            signIn page
        </div>
    )
}

export async function getServerSideProps(){
    const providers = getProviders()
    return {
        props:{
            providers 
        }
    }
}

export default signin
