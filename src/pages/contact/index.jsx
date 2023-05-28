'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import icon from '../../app/favicon.ico';

import '../../app/style/globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import PuffLoader from 'react-spinners/PuffLoader';

const Contacts = () => {
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
                <div>
                    <Head>
                        <title>Guns Airsoft Arena - Contato</title>
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

                        <meta property='title' content='Guns Airsoft Arena - Contato' />
                        <meta property='og:title' content='Guns Airsoft Arena - Contato' />

                        <meta property='og:image' content={icon} />

                        <title>Guns Airsoft Arena - Contato</title>
                    </Head>
                    <Navbar />
                    <div>/contact</div>
                    <Footer />
                </div>
            }
        </div>
    )
};

export default Contacts;