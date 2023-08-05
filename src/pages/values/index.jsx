'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/values.css';

import CONFIGS from '../../__config';

const Values = () => {
    const [loading, setLoading] = useState(true);

    const getDiscount = CONFIGS.valores.descontos['desconto'];
    const getValue1 = (getDiscount ? CONFIGS.valores.descontos['pacote_1'] : CONFIGS.valores['pacote_1']);
    const getValue2 = (getDiscount ? CONFIGS.valores.descontos['pacote_2'] : CONFIGS.valores['pacote_2']);
  
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
                            <p>Confira nossos pacotes de jogos.</p>
                        </div>
                        <div className='container--modals'>
                            <div className='modal'>
                                <div className='modal--title'>
                                    <h3>Pacote 1</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <div>
                                        <span id='real'>R$</span>{getValue1},00
                                    </div>
                                    {getDiscount ? <div><span id='off'>R${CONFIGS.valores['pacote_1']},00</span></div> : <></>}
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>100 BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent(`Olá! Gostaria de marcar um game. Vi que o valor do pacote 1 está R$${getValue1},00 seria este valor mesmo? `)}`}>Agende Agora!</a>
                                    </div>
                                </div>
                            </div>
                            <div className='modal'>
                                <div className='modal--title'>
                                    <h3>Pacote 2</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <div>
                                        <span id='real'>R$</span>{getValue2},00
                                    </div>
                                    {getDiscount ? <div><span id='off'>R${CONFIGS.valores['pacote_2']},00</span></div> : <></>}
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>300 BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent(`Olá! Gostaria de marcar um game. Vi que o valor do pacote 2 está R$${getValue2},00 seria este valor mesmo?`)}`}>Agende Agora!</a>
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