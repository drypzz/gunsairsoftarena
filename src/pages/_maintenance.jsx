'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';


import '../app/style/globals.css';
import './utils/index.css'
import CustomNav from '@/components/customnav/CustomNav';


import { CONFIGS } from '@/__config';
import { useRouter } from 'next/router';

function Maintenance(){

    const router = useRouter();

    useEffect(() => {
        if(CONFIGS.paginas.manutencao['get'] == false){
            router.push('/');
        };
    }, [router]);
    
    return (
        <>
            {(CONFIGS.paginas.manutencao['get'] ?? false)
            ?
                <>
                    <Head>
                        <title>Em Manutenção...</title>
                    </Head>
                    <CustomNav link='/' text='Manutenção' />
                    <div className='error-container'>
                        <div className='error-box'>
                            <div className='error-content just'>
                                <img draggable='false' dragstart='false' src='/files/transparent.png' className='image-logo' />
                            </div>
                            <div className='error-content'>
                                <h1>Ops...!</h1>
                            </div>
                            <div className='error-content'>
                                <p>- Estamos trabalhando para melhorar a sua experiência.</p>
                            </div>
                            <div className='error-content'>
                                <p>- Volte mais tarde.</p>
                            </div>
                            <div className='error-content btn'>
                                <a href='/'>Voltar para a Home</a>
                            </div>
                            <div className='error-content just top'>
                                <span>2021 - {new Date().getFullYear()} © Guns Airsoft Arena</span>
                            </div>
                        </div>
                    </div>
                </>
            :
                <></>
            }
        </>
    )
};

export default Maintenance;