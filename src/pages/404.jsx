'use client';

import React from 'react';
import Head from 'next/head';


import '../app/style/globals.css';
import './utils/index.css';
import CustomNav from '@/components/customnav/CustomNav';


function NotFound(){

    return (
        <div>
            <Head>
                <title>Error</title>
            </Head>
            <CustomNav link='/' text='Error' />
            <div className='error-container'>
                <div className='error-box'>
                    <div className='error-content just'>
                        <img draggable='false' dragstart='false' src='/files/transparent.png' className='image-logo' />
                    </div>
                    <div className='error-content'>
                        <h1>Ops...!</h1>
                    </div>
                    <div className='error-content'>
                        <p>- Ocorreu um erro.</p>
                    </div>
                    <div className='error-content btn'>
                        <a href='/'>Voltar para a Home</a>
                    </div>
                    <div className='error-content just top'>
                        <span>Copyright © Guns Airsoft Arena - {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;