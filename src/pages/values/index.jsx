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
                    <div className='main'>
                        <div className='title'>
                            <h1>Valores</h1>
                        </div>
                        <div className='container--modals'>
                            <div className='modal'>
                                <div className='modal--title'>
                                    <h3>Game - 1</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <span id='real'>R$</span>25,00
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>100 BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game.')}`}>Agende Agora!</a>
                                    </div>
                                </div>
                            </div>
                            <div className='modal'>
                                <div className='modal--title'>
                                    <h3>Game - 2</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <span id='real'>R$</span>55,00
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>300 BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game.')}`}>Agende Agora!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
};

export default Values;