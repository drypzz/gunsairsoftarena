'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/values.css';

import { CONFIGS } from '../../__config';

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
                        <meta charSet='UTF-8' />
                        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                        <meta property='og:type' content='website' />

                        <meta name='theme-color' content='#54A824' />

                        <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
                        <meta name='title' content={`${CONFIGS.gerais['nome']} - Valores`} />
                        <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
                        <meta name='url' content='https://gunsairsoftarena.netlify.app/values' />

                        <meta property='og:title' content={`${CONFIGS.gerais['nome']} - Valores`} />

                        <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

                        <meta property='og:site_name' content={`${CONFIGS.gerais['nome']} - Valores`} />
                        <meta property='og:url' content='https://gunsairsoftarena.netlify.app/values' />

                        <meta property='og:image' content='/files/transparent.png' />
                        <meta property='og:image:width' content='200' />
                        <meta property='og:image:height' content='200' />

                        <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
                        <link rel='image_src' href='/files/transparent.png' />
                        
                        <title>{CONFIGS.gerais['nome']} - Valores</title>
                    </Head>
                    <Navbar bool={2} />
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
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${CONFIGS.gerais['telefone']}&text=${encodeURIComponent(`_Olá!_ 👋\n\n🔫- Gostaria de marcar um game.\n👀- Vi que o valor do *Pacote Recruta* está 💵*R$${getValue1},00* seria este valor mesmo?`)}`}>Agende Agora!</a>
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
                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${CONFIGS.gerais['telefone']}&text=${encodeURIComponent(`_Olá!_ 👋\n\n🔫- Gostaria de marcar um game.\n👀- Vi que o valor do *Pacote Atirador* está 💵*R$${getValue2},00* seria este valor mesmo?`)}`}>Agende Agora!</a>
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