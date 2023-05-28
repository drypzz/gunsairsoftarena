'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import icon from '../../app/favicon.ico';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import PuffLoader from 'react-spinners/PuffLoader';

import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


import '../../components/utils/home.css';
import '../utils/contact.css';
import '../../app/style/globals.css';

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

                    <div className='main' >
                        <div className='container'>
                            <div className='box-s'>
                                <div>
                                    <h1 className='title'>Contato</h1>
                                </div>
                                <div>
                                    <p className='subtitle'>Entre em contato conosco para mais informações sobre o nosso campo de airsoft.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='waves'><path fill='#0b0b0b' fillOpacity='1' d='M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,192C672,203,768,245,864,272C960,299,1056,309,1152,298.7C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path></svg>
                    <div className='section'>
                        <div className='contacts'>
                            <span className='category'>Contate-nos</span>
                            <div className='items-container'>
                                <div className='items'>
                                    <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'>
                                        <FaInstagram />
                                    </a>
                                </div>
                                <div className='items'>
                                    <a target='_blank' href='https://www.facebook.com/gunsairsoftarena'>
                                        <FaFacebook />
                                    </a>
                                </div>
                                <div className='items'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'>
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className='hrbro' />

                        <div className='contacts'>
                            <span className='category'>Venha você também pra essa experiência</span>

                            <div className='centered'>
                                <div className='contact'>

                                    <div className='modal'>
                                        <div className='modal-title'>
                                            <h5>GUNS AIRSOFT ARENA</h5>
                                        </div>
                                        <div className='modal-body'>
                                            <div className='modal-item'>
                                                <p className='title-item'>Valores:</p>
                                                <ul>
                                                    <li className='item'>R$ 25,00 - (100 BBs)</li>
                                                    <li className='item'>R$ 50,00 - (350 BBs)</li>
                                                </ul>
                                            </div>
                                            <div className='modal-item'>
                                                <p className='title-item'>Horário de funcionamento:</p>
                                                <ul>
                                                    <li className='item'>Segunda-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Terça-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Quarta-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Quinta-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Sexta-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Sabado-Feira: 07:00 - 22:00</li>
                                                    <li className='item'>Domingo-Feira: 07:00 - 22:00</li>
                                                </ul>
                                            </div>
                                            <div className='modal-item'>
                                                <p className='title-item'>Para mais informações entre em contato conosco ou visite a pagina de serviços.</p>
                                            </div>
                                            <div className='modal-item'>
                                                <a className='btn-serivce' href='/service'>
                                                    Serviços
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
};

export default Contacts;