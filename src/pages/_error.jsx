'use client';

import React from 'react';
import Head from 'next/head';


import '../app/style/globals.css';
import './utils/index.css'


function NotFound({ statusCode }){

    return (
        <div>
            <Head>
                <title>Guns Airsoft Arena - Error</title>
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
                        <h2>Página não encontrada.</h2>
                    </div>
                    <div className='error-content'>
                        <h3>Código de Erro: {statusCode === 500 ? 500 : 404}</h3>
                    </div>
                    <div className='error-content'>
                        <p>Volte para a <a href='/'>Página Inicial</a></p>
                    </div>
                    <div className='error-content just top'>
                        <span>Copyright © Guns Airsoft Arena - {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

NotFound.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default NotFound;