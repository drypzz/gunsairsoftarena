'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/midia.css';

import { CONFIGS } from '@/__config';

const Midia = () => {
    const [loading, setLoading] = useState(true);
    const [getSection, setSection] = useState(0);
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (sectionNumber) => {
        setSection(sectionNumber);
        setActiveButton(sectionNumber);
    };
  
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
                    
                    <CustomNav link='/' text='Galeria' />

                    <div style={{marginBottom: 50}}>
                        <div style={{marginBottom: 20}}>
                            <div className='title'>
                                <h1>Galeria</h1>
                                <p>Escolha entre uma das opções abaixo.</p>
                            </div>

                            <div className='button-galery'>
                                <div className='button-galery--item'>
                                    <button className={activeButton === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)}>Diversas</button>
                                </div>
                                <div className='button-galery--item'>
                                    <button className={activeButton === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)}>Turma(s)</button>
                                </div>
                            </div>
                        </div>

                        {getSection === 0 ? (
                            <div className='galery'>
                                {CONFIGS['galeria'].solo.map((e, index) => (
                                    <div className='galery-item' key={index}>
                                        <img src={e} alt={`Foto ${index}`} />
                                    </div>
                                ))}
                            </div>
                        ) : null}

                        {getSection === 1 ? (
                            <div className='galery'>
                                {CONFIGS['galeria'].groups.map((e, index) => (
                                    <div className='galery-item' key={index}>
                                        <img src={e} alt={`Foto ${index}`} />
                                    </div>
                                ))}
                            </div>
                        ) : null}

                    </div>

                    <Footer />
                </div>
            }
        </>
    )
};

export default Midia;