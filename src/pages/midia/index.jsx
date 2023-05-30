'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

import LoadingScreen from '@/components/loading/LoadingScreen';

import '../utils/midia.css';

const Midia = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
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

                        <meta property='title' content='Guns Airsoft Arena - Fotos' />
                        <meta property='og:title' content='Guns Airsoft Arena - Fotos' />

                        <meta property='og:image' content='/files/transparent.png' />

                        <title>Guns Airsoft Arena - Fotos</title>
                    </Head>
                    <Navbar bool={3} />
                    <h1>/midia</h1>
                    <Footer />
                </div>
            }
        </>
    )
};

export default Midia;