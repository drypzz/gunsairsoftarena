'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/values.css';

const Values = () => {
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

                        <meta property='title' content='Guns Airsoft Arena - Valores' />
                        <meta property='og:title' content='Guns Airsoft Arena - Valores' />

                        <meta property='og:image' content='/files/transparent.png' />

                        <title>Guns Airsoft Arena - Valores</title>
                    </Head>
                    <Navbar bool={4} />
                    <CustomNav link='/' text='Valores' />
                    <Footer />
                </div>
            }
        </>
    )
};

export default Values;