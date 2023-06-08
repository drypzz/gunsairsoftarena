'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/midia.css';
import { CarouselPhotos, CarouselPhotos2 } from '@/components/carousel/Carousel';

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
                    
                    <CustomNav link='/' text='Fotos' />

                    <div className='container--midia'>
                        <div className='container__content--midia'>
                            <div className='container__content--title--midia'>
                                <h1>Fotos</h1>
                            </div>
                            <div className='container__content--text--midia'>
                                <p>Confira algumas fotos de nossos clientes aqui na Guns Airsoft Arena!</p>
                            </div>
                        </div>
                    </div>

                    <div className='modal'>
                        <div className='modal-container'>
                            <div className='modal-content'>
                                <CarouselPhotos />
                            </div>
                            <div className='modal-content'>
                                <CarouselPhotos2 />
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            }
        </>
    )
};

export default Midia;