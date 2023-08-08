'use client';

import  * as React from 'react';
import Head from 'next/head';


import '../app/style/globals.css';
import './utils/index.css'


function Maintenance(){

    return (
        <div>
            <Head>
                <title>Guns Airsoft Arena</title>
            </Head>
            <div className='error-container'>
                <div className='error-box'>
                    <div className='error-content just'>
                        <img src='/files/transparent.png' className='image-logo' />
                    </div>
                    <div className='error-content'>
                        <h1>Ops...!</h1>
                    </div>
                    <div className='error-content'>
                        <h2>Página em Manutenção.</h2>
                    </div>
                    <div className='error-content'>
                        <p>Volte em breve</p>
                    </div>
                    <div className='error-content just top'>
                        <span>Copyright © Guns Airsoft Arena - {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Maintenance;