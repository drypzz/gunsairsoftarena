import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import img from '../files/transparent.png'

import './utils/home.css';

import MY_CONFIG from '../config/data';

import Image from 'next/image';

import { FaWhatsapp } from 'react-icons/fa';

import {MyCarousel, MyCarousel2} from './Carousel';

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <div className='main' >
                <div className='container'>
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
            <div className='about'>
                <span className='category'>Sobre nós</span>
                <div className='row'>
                    <div className='content'>
                        <Image src={img} className='img' />
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
    )
};

export default HomeScreen;