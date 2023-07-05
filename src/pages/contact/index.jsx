'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/contact.css';

import { FaInstagram, FaWhatsapp, FaFacebook, FaMap, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Contacts = () => {
    const [loading, setLoading] = useState(true);
    const [map, setMap] = useState([]);

    async function loadMap(){
        const result = fetch('https://maps.google.com/maps?q=Guns+Airsoft+Arena&t=&z=17&ie=UTF8&iwloc=&output=embed')
            .then((res) => setMap(res.url))
            .catch((err) => setMap(<div><h1>{err}</h1></div>)
        );

        return result;
    }
  
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
                        <meta name='description' content='Sua arena de airsoft em Joinville - SC' key='desc' />
                        <meta property='og:description' content='Sua arena de airsoft em Joinville - SC'/>

                        <meta property='title' content='Guns Airsoft Arena - Contato' />
                        <meta property='og:title' content='Guns Airsoft Arena - Contato' />

                        <meta property='og:image' content='/files/transparent.png' />

                        <title>Guns Airsoft Arena - Contato</title>
                    </Head>
                    <Navbar bool={5} />
                    <CustomNav link='/' text='Contato' />
                    <div className='main-contacts'>
                        <div className='title'>
                            <h1>Localização</h1>
                        </div>
                        <div className='location'>
                            <iframe src={map} frameborder='0'></iframe>
                        </div>
                        <div className='contacts'>
                            <div className='contacts-container'>
                                <div className='contacts-info'>
                                    <h3 className='title--info'>Contato</h3>
                                    <ul id='kasw' className='contacts-info-item--ul'>
                                        <li>
                                            <a target='_blank' href='https://goo.gl/maps/cxPno5J1cjJEvS1W6'><FaMap />R. Boehmerwald, 170 - Boehmerwald, Joinville - SC, 89219-731</a>
                                        </li>
                                        <li>
                                            <a href='tel:+5547997519814'><FaPhoneAlt />(47) 99751-9814</a>
                                        </li>
                                        <li>
                                            <a target='_blank' href='mailto:gunsairsoftarena@gmail.com'><FaRegEnvelope />gunsairsoftarena@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='contacts-info'>
                                    <h3 className='title--info'>Horario de Funcionamento</h3>
                                    <ul className='contacts-info-item--ul'>
                                        <li>
                                            Segunda-Feira
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Terça-Feira
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Quarta-Feira
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Quinta-Feira
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Sexta-Feira
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Sábado
                                            <span>07:00 - 22:00</span>
                                        </li>
                                        <li>
                                            Domingo
                                            <span>07:00 - 22:00</span>
                                        </li>
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