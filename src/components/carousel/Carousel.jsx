import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FaFacebook, FaInstagram, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';

import '../utils/carousel.css';
import { CONFIGS } from '@/__config';

const CarouselHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState('animation-one');

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    };

    const handleSlideChange = (index) => {
        
        const classes = [
            {text: 'animation-one'},
            {text: 'animation-two'},
        ];

        setCurrentSlide(index);

        const random = Math.floor(getRandomNumber(0, 2));

        return setAnimationClass(classes[random].text);
    };

    return (
        <Carousel className={`custom-carousel ${animationClass}`} selectedItem={currentSlide} onChange={handleSlideChange} autoPlay transitionTime={(20 * 10)} swipeable={false} interval={(15 * 1000)} showThumbs={false} stopOnHover={false} showStatus={false} showIndicators={true} infiniteLoop showArrows={true}>
            <div className='wallpaper-ca'>
                <div className='div-imgs'>
                    <img draggable='false' dragstart='false' src={'/files/wallpaper.jpg'} alt='Imagem de Fundo' />
                </div>
                <div className='title-box'>
                    <div className='box__container--main'>
                        <div className='box__content--main'>
                            <h1 id='title--uii'>Bem-vindo(a) ao {CONFIGS.gerais['nome']}</h1>
                        </div>
                        <div className='box__content--main'>
                            <p>Aqui, a diversão é garantida.</p>
                        </div>
                        <div className='box__content--main button'>
                            <a target='_blank' className='button-contact' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Quero saber mais sobre o campo e valores.')}`}><FaWhatsapp />・Entrar em Contato</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id='kdoswd992__' className='wallpaper-ca'>
                <div className='div-imgs'>
                    <img draggable='false' dragstart='false' src={'/files/wallpaper2.jpg'} alt='Imagem de Fundo 2' />
                </div>
                <div className='title-box'>
                    <div className='box__container--main'>
                        <div className='box__content--main'>
                            <h1>Proteja-se e Domine o Campo!</h1>
                        </div>
                        <div className='box__content--main'>
                            <p>Veja os equipamentos de Airsoft que garantem segurança e estilo.</p>
                        </div>
                        <div className='box__content--main button'>
                            <a className='button-contact' href='/equipaments'><FaShieldAlt />・Equipamentos</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='jspqjw2od__dsk' className='wallpaper-ca'>
                <div className='div-imgs'>
                    <img draggable='false' dragstart='false' src={'/files/wallpaper3.jpg'} alt='Imagem de Fundo 2' />
                </div>
                <div className='title-box'>
                    <div className='box__container--main'>
                        <div className='box__content--main'>
                            <h1>Não deixe de ver nossas redes sociais!</h1>
                        </div>
                        <div className='box__content--main'>
                            <p>Lá, você encontrará preços, fotos, vídeos e muito mais</p>
                        </div>
                        <div className='box__content--main'>
                            <div className='box__content--main-itens-container'>
                                <div className='box__content--main-itens-content'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp /></a>
                                </div>
                                <div className='box__content--main-itens-content'>
                                    <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'><FaInstagram /></a>
                                </div>
                                <div className='box__content--main-itens-content'>
                                    <a target='_blank' href='https://www.facebook.com/gunsairsoftarena/'><FaFacebook /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselHome;