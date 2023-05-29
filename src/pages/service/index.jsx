'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import icon from '../../app/favicon.ico';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


import '../../app/style/globals.css';

import LoadingScreen from '@/components/LoadingScreen';

const Service = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <>
            {loading ?
                <LoadingScreen loading={loading} />
            :
                <div>
                    <Head>
                        <meta name='description' content='Sua arena de airsoft em Joinville - SC' key='desc' />
                        <meta property='og:description' content='Sua arena de airsoft em Joinville - SC'/>

                        <meta property='title' content='Guns Airsoft Arena - Serviços' />
                        <meta property='og:title' content='Guns Airsoft Arena - Serviços' />

                        <meta property='og:image' content={icon} />

                        <title>Guns Airsoft Arena - Serviço</title>
                    </Head>
                    <Navbar bool={2} />
                    <h1>/service</h1>
                    <Footer />
                </div>
            }
        </>
    )
};

export default Service;