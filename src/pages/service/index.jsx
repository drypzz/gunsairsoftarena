'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import icon from '../../app/favicon.ico';

import '../../app/style/globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

import PuffLoader from 'react-spinners/PuffLoader';

const Service = () => {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        Aos.init(
            { 
            duration: 2000,
            easing: 'ease-in-out'
            }
        );
        }, 2000);
    }, []);

    return (
        <div>
            {loading ?
                <div>
                    <Head>
                        <title>Guns Airsoft Arena - Serviço</title>
                    </Head>
                    <div className='loading'>
                        <PuffLoader color={'#48D904'} loading={loading} size={100} />
                    </div>
                </div>
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
                    <Navbar />
                    <h1>Service</h1>
                    <Footer />
                </div>
            }
        </div>
    )
};

export default Service;