'use client';

import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import MY_CONFIG from '../config/data';

import { FaWhatsapp } from 'react-icons/fa';

import {MyCarousel, MyCarousel2} from './Carousel';

import PuffLoader from 'react-spinners/PuffLoader';

import './utils/home.css';

const HomeScreen = () => {
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
                    <div className='loading'>
                        <PuffLoader color={'#48D904'} loading={loading} size={100} />
                    </div>
                </div>
            :
                <div>
                    <Navbar />
                    <div className='main' >
                        <div className='container'>
                            <div className='box-s'>
                                <div>
                                    <h1 className='title'>{MY_CONFIG.titulo}</h1>
                                </div>
                                <div>
                                    <p className='subtitle'>{MY_CONFIG.subtitulo}</p>
                                </div>
                                <div>
                                    <span className='address'>{MY_CONFIG.endereco}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0b0b0b" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,53.3C672,32,768,32,864,69.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div className='about'>
                        <span className='category'>Sobre nós</span>
                        <div className='row'>
                            <div className='content'>
                                <img src='/files/transparent.png' className='img' />
                            </div>
                            <div className='content'>
                                <p className='text'>
                                    {MY_CONFIG.sobre}
                                </p>
                                <div className='button'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814' className='btn'>
                                        <FaWhatsapp /> - Entrar em Contato
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='category'>Veja mais sobre o campo</span>
                        <div className='modal'>
                            <div className='modal-container'>
                                <MyCarousel />
                            </div>
                            <div className='modal-container'>
                                <MyCarousel2 />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            } 
        </div>
    )
};

export default HomeScreen;