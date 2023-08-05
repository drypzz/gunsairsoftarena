'use client';

import React, { useState, useEffect } from 'react';

import Navbar from './../navbar/Navbar';
import Footer from './../footer/Footer';

import LoadingScreen from '../loading/Loading';

import { FaWhatsapp, FaRegPaperPlane } from 'react-icons/fa';

import { CarouselHome } from './../carousel/Carousel';

import './../utils/home.css';

const Home = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <>
            {loading ?
                <LoadingScreen loading={loading} />
            :
                <div>
                    <Navbar id='dossde' bool={0} />

                    <section>
                        <div className='header__logo'>
                            <div>
                                <img src='../files/transparent.png' className='logo' alt='logo' />
                            </div>
                            <div>
                                <span className='logo__title'>GUNS AIRSOFT ARENA</span>
                            </div>
                            <div>
                                <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game, quais os valores?')}`} className='link__title'><FaRegPaperPlane />・Reserve Agora</a>
                            </div>
                        </div>
                    </section>

                    <CarouselHome />
                    
                    <Navbar id='navbar' bool={0} />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0b0b0b" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,53.3C672,32,768,32,864,69.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div className='about'>
                        <span className='category'>Sobre nós</span>
                        <div className='row'>
                            <div className='content'>
                                <img src='/files/transparent.png' className='img' />
                            </div>
                            <div className='content'>
                                <p>
                                    A <span className='gunsairsoft'>Guns Airsoft Arena</span> foi fundada no ano de 2021 com o objetivo de oferecer uma forma de entretenimento distinta para a cidade de Joinville e região. O Airsoft, como esporte, tem-se destacado como uma opção de alto valor para aqueles que buscam uma atividade capaz de aliviar as tensões do cotidiano. Isso se deve, em parte, à sua natureza prazerosa, mas também ao fato de que o Airsoft envolve exercícios de resistência, trabalho em equipe e raciocínio rápido, proporcionando benefícios significativos tanto para a saúde física quanto mental dos praticantes. Portanto, se você está em busca de um local onde possa reduzir o estresse proveniente de sua vida profissional e pessoal, convidamos você a reunir seus amigos e visitar-nos para desfrutar dessa experiência. A Guns Airsoft Arena se apresenta como o lugar ideal para tal finalidade.
                                </p>
                                <div className='button'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'>
                                        <FaWhatsapp />・Entrar em Contato
                                    </a>
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

export default Home;