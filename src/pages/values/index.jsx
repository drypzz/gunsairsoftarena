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

    const getDiscount = (CONFIGS.valores.descontos['desconto'] ?? false);
    const getValue1 = (getDiscount ? (CONFIGS.valores.descontos.pacotes.recruta['valor'] ?? 0) : (CONFIGS.valores.pacotes.recruta['valor'] ?? 0));
    const getValue2 = (getDiscount ? (CONFIGS.valores.descontos.pacotes.atirador['valor'] ?? 0) : (CONFIGS.valores.pacotes.atirador['valor'] ?? 0));

    const getValueReload1 = (getDiscount ? (CONFIGS.valores.descontos.pacotes.recruta['valorRecarga'] ?? 0) : (CONFIGS.valores.pacotes.recruta['valorRecarga'] ?? 0))
    const getValueReload2 = (getDiscount ? (CONFIGS.valores.descontos.pacotes.atirador['valorRecarga'] ?? 0) : (CONFIGS.valores.pacotes.atirador['valorRecarga'] ?? 0))
  
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
                                    <h3>Pacote Recruta</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <div>
                                        <span id='real'>R$</span>{getValue1},00
                                    </div>
                                    {getDiscount ? <div><span id='off'>R${(CONFIGS.valores.pacotes.recruta['valor'] ?? 0)},00</span></div> : <></>}
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>{(CONFIGS.valores.pacotes.recruta['bbsBase'] ?? 100)} BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                        <li>R${getValueReload1},00 recarga para cada 100 munições </li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent(`Olá! Gostaria de marcar um game. Vi que o valor do *Pacote Recruta* está *R$${getValue1},00* seria este valor mesmo? `)}`}>Agende Agora!</a>
                                    </div>
                                </div>
                            </div>
                            <div className='modal'>
                                <div className='modal--title'>
                                    <h3>Pacote Atirador</h3>
                                </div>
                                <div className='modal--content--value'>
                                    <div>
                                        <span id='real'>R$</span>{getValue2},00
                                    </div>
                                    {getDiscount ? <div><span id='off'>R${CONFIGS.valores.pacotes.atirador['valor']},00</span></div> : <></>}
                                </div>
                                <div className='modal--content'>
                                    <ul>
                                        <li>{(CONFIGS.valores.pacotes.atirador['bbsBase'] ?? 300)} BBs (Munições)</li>
                                        <li>2h de Jogo</li>
                                        <li>Arma + Máscara + Camisa (Verde ou Vermelha)</li>
                                        <li>R${getValueReload2},00 recarga para cada 100 munições </li>
                                    </ul>
                                    <div className='button--modals'>
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent(`Olá! Gostaria de marcar um game. Vi que o valor do *Pacote Atirador* está *R$${getValue2},00* seria este valor mesmo?`)}`}>Agende Agora!</a>
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