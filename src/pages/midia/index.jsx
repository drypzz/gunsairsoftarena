'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/midia.css';
import { CarouselPhotos, CarouselPhotos2 } from '@/components/carousel/Carousel';

import { CONFIGS } from '@/__config';

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
                        <meta charSet='UTF-8' />
                        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                        <meta property='og:type' content='website' />

                        <meta name='theme-color' content='#54A824' />

                        <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
                        <meta name='title' content={`${CONFIGS.gerais['nome']} - Fotos`} />
                        <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
                        <meta name='url' content='https://gunsairsoftarena.netlify.app/midia' />

                        <meta property='og:title' content={`${CONFIGS.gerais['nome']} - Fotos`} />

                        <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

                        <meta property='og:site_name' content={`${CONFIGS.gerais['nome']} - Fotos`} />
                        <meta property='og:url' content='https://gunsairsoftarena.netlify.app/midia' />

                        <meta property='og:image' content='/files/transparent.png' />
                        <meta property='og:image:width' content='200' />
                        <meta property='og:image:height' content='200' />

                        <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
                        <link rel='image_src' href='/files/transparent.png' />
                        
                        <title>{CONFIGS.gerais['nome']} - Fotos</title>
                    </Head>
                    <Navbar bool={3} />
                    
                    <CustomNav link='/' text='Fotos' />

                    <div>
                        <div className='title'>
                            <h1>Fotos</h1>
                            <p>Confira algumas fotos de nossos clientes aqui na Guns Airsoft Arena!</p>
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