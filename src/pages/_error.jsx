'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Image from 'next/image';
import '../app/style/globals.css';
import './utils/index.css'

import img from '../app/favicon.ico';

import PuffLoader from 'react-spinners/PuffLoader';

function NotFound({ statusCode }){

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {loading ?
                <div className='loading'>
                    <PuffLoader color={'#48D904'} loading={loading} size={100} />
                </div>
            :
            <div>
                <Head>
                    <title>Guns Airsoft Arena - 404</title>
                </Head>
                <div className='error-container'>
                    <div className='error-box'>
                        <div className='error-content just'>
                            <Image src={img} className='image-logo' />
                        </div>
                        <div className='error-content'>
                            <h1>Ops...!</h1>
                        </div>
                        <div className='error-content'>
                            <h2>Página não encontrada.</h2>
                        </div>
                        <div className='error-content'>
                            <h2>Código de Erro: {statusCode === 500 ? 500 : 404}</h2>
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
            }
        </div>
    )
};

NotFound.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default NotFound;