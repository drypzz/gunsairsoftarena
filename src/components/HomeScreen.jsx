'use client';

import React, {
    useState,
    useEffect
} from 'react';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

import { FaWhatsapp } from 'react-icons/fa';

import {
    MyCarousel,
    MyCarousel2
} from './carousel/Carousel';

import './utils/home.css';

import LoadingScreen from './loading/LoadingScreen';

const HomeScreen = () => {
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
                    <Navbar bool={0} />
                    <div className='main' >
                        <div className='container'>
                            <div className='box-s'>
                                <div>
                                    <h1 className='title'>Guns Airsoft Arena</h1>
                                </div>
                                <div>
                                    <p className='subtitle'>Sua arena de airsoft em Joinville - SC.</p>
                                </div>
                                <div>
                                    <span className='address'>R. Boehmerwald, 170 - Boehmerwald, Joinville - SC, 89219-731</span>
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
                                <p>
                                    A <span className='gunsairsoft'>Guns Airsoft Arena</span> foi criada em <span className='gunsairsoft'>2021</span>, com o propósito de oferecer um <span className='gunsairsoft'>entretenimento diferente</span> para a cidade de Joinville e região. O <span className='gunsairsoft'>Airsoft</span> é um esporte que tem se tornado uma ótima opção para quem procura uma atividade para aliviar as tensões do dia a dia. Isso porque, além de prazeroso, o <span className='gunsairsoft'>Airsoft</span> envolve exercícios de resistência, trabalho em equipe e raciocínio rápido, trazendo benefícios para a saúde física e mental do praticante. E se você está procurando um lugar para aliviar o estresse profissional e pessoal, convide seus amigos e venha jogar, aqui é o lugar. 
                                </p>
                                <div className='button'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'>
                                        <FaWhatsapp /> - Entrar em Contato
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className='hrbro' />

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
        </>
    )
};

export default HomeScreen;