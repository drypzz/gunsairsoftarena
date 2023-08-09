'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/contact.css';

import ClipLoader from 'react-spinners/ClipLoader';

import { FaInstagram, FaWhatsapp, FaFacebook, FaMap, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

import { CONFIGS, LIST_HOURS } from '@/__config';

const Contacts = () => {
    const [loading, setLoading] = useState(true);
    const [map, setMap] = useState([]);

    const [getLoadingMap, setLoadingMap] = useState(true);

    async function loadMap(){
        const result = fetch('https://maps.google.com/maps?q=Guns+Airsoft+Arena&t=&z=17&ie=UTF8&iwloc=&output=embed')
            .then((res) => (
                setMap(<iframe src={res.url} frameBorder={0}></iframe>), setTimeout(() => { setLoadingMap(false) }, 5000)
            ))
            .catch(() => (
                setLoadingMap(true), console.log('Erro ao carregar o mapa.')
            )
        );

        return result;
    };
  
    useEffect(() => {
        loadMap();
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
                        <meta charset='UTF-8' />
                        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                        <meta property='og:type' content='website' />

                        <meta name='theme-color' content='#54A824' />

                        <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
                        <meta name='title' content={`${CONFIGS.gerais['nome']} - Contato`} />
                        <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
                        <meta name='url' content='https://gunsairsoftarena.netlify.app/contact' />

                        <meta property='og:title' content={`${CONFIGS.gerais['nome']} - Contato`} />

                        <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

                        <meta property='og:site_name' content={`${CONFIGS.gerais['nome']} - Contato`} />
                        <meta property='og:url' content='https://gunsairsoftarena.netlify.app/contact' />

                        <meta property='og:image' content='/files/transparent.png' />
                        <meta property='og:image:width' content='200' />
                        <meta property='og:image:height' content='200' />

                        <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
                        <link rel='image_src' href='/files/transparent.png' />
                        
                        <title>{CONFIGS.gerais['nome']} - Contato</title>
                    </Head>
                    <Navbar bool={5} />
                    <CustomNav link='/' text='Contato' />
                    <div className='main'>
                        <div className='title'>
                            <h1>Localização</h1>
                            <p>Observe a nossa localização atual.</p>
                        </div>
                        <div className='location'>
                            {getLoadingMap ? <ClipLoader color={'#48D904'} loading={getLoadingMap} size={100} /> : map}
                        </div>
                        <div className='contacts'>
                            <div className='contacts-container'>
                                <div className='contacts-info'>
                                    <h3 className='title--info'>Contato</h3>
                                    <ul id='kasw' className='contacts-info-item--ul'>
                                        <li>
                                            <a target='_blank' href='https://goo.gl/maps/cxPno5J1cjJEvS1W6'><FaMap />{CONFIGS.gerais['endereco']}</a>
                                        </li>
                                        <li>
                                            <a href={`tel:+${CONFIGS.gerais['telefone']}`}><FaPhoneAlt />{ CONFIGS.gerais['telefone'] }</a>
                                        </li>
                                        <li>
                                            <a target='_blank' href='mailto:gunsairsoftarena@gmail.com'><FaRegEnvelope />{CONFIGS.gerais['email']}</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='contacts-info'>
                                    <h3 className='title--info'>Horario de Funcionamento</h3>
                                    <ul className='contacts-info-item--ul'>
                                        {LIST_HOURS.map((e, index) => (
                                            <li key={index}>
                                                {e.Dia}
                                                <span>{e.Aberto} - {e.Fechado}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='contacts-info'>
                                    <h3 className='title--info'>NOS ENCONTRE</h3>
                                    <div className='container--red'>
                                        <div className='itens--red'>
                                            <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'><FaInstagram/></a>
                                        </div>
                                        <div className='itens--red'>
                                            <a target='_blank' href='https://www.facebook.com/gunsairsoftarena/'><FaFacebook/></a>
                                        </div>
                                        <div className='itens--red'>
                                            <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp/></a>
                                        </div>
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

export default Contacts;