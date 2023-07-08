import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import '../utils/carousel.css';

const CarouselPhotos = () => {
    const imagens = [
        '/guns/036.jpg',
        '/guns/001.jpg',
        '/guns/002.jpg',
        '/guns/003.jpg',
        '/guns/004.jpg',
        '/guns/005.jpg',
        '/guns/006.jpg',
        '/guns/007.jpg',
        '/guns/008.jpg',
        '/guns/009.jpg',
        '/guns/010.jpg',
        '/guns/011.jpg',
        '/guns/012.jpg',
        '/guns/013.jpg',
        '/guns/014.jpg',
        '/guns/015.jpg',
        '/guns/016.jpg',
        '/guns/017.jpg',
    ]
    return (
        <Carousel autoPlay transitionTime={1000} swipeable={false} interval={5000} stopOnHover={false} showStatus={false} showIndicators={false} infiniteLoop showArrows={false}>
            {imagens.map((img, index) => {
                return (
                    <div key={index}>
                        <img src={`${img}`} alt={`Imagem ${index + 1}`} />
                    </div>
                )
            })}
        </Carousel>
    );
};

const CarouselPhotos2 = () => {
    const imagens2 = [
        '/guns/035.jpg',
        '/guns/033.jpg',
        '/guns/034.jpg',
        '/guns/020.jpg',
        '/guns/021.jpg',
        '/guns/022.jpg',
        '/guns/023.jpg',
        '/guns/024.jpg',
        '/guns/025.jpg',
        '/guns/026.jpg',
        '/guns/027.jpg',
        '/guns/028.jpg',
        '/guns/029.jpg',
        '/guns/030.jpg',
        '/guns/031.jpg',
        '/guns/032.jpg',
        '/guns/018.jpg',
        '/guns/019.jpg',
    ]
    return (
        <Carousel autoPlay transitionTime={1000} swipeable={false} interval={5000} stopOnHover={false} showStatus={false} showIndicators={false} infiniteLoop showArrows={false}>
            {imagens2.map((img, index) => {
                return (
                    <div key={index}>
                        <img src={`${img}`} alt={`Imagem ${index + 1}`} />
                    </div>
                )
            })}
        </Carousel>
    );
};

const CarouselHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState('animation-one');

    const handleSlideChange = (index) => {
        setCurrentSlide(index);

        if (index % 2 === 0) {
            setAnimationClass('animation-one');
        } else {
            setAnimationClass('animation-two');
        }
    };

    return (
        <Carousel className={`custom-carousel ${animationClass}`} selectedItem={currentSlide} onChange={handleSlideChange} autoPlay transitionTime={300} swipeable={false} interval={5000} showThumbs={false} stopOnHover={false} showStatus={false} showIndicators={false} infiniteLoop showArrows={true}>
            <div className='wallpaper-ca'>
                <div className='div-imgs'>
                    <img src={'/files/wallpaper.jpg'} alt='Imagem de Fundo' />
                </div>
                <div className='title-box'>
                    <div className='box__container--main'>
                        <div className='box__content--main'>
                            <h1 id='title--uii'>Bem-vindo(a) ao Guns Airsoft</h1>
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
                    <img src={'/files/wallpaper2.jpg'} alt='Imagem de Fundo 2' />
                </div>
                <div className='title-box'>
                    <div className='box__container--main'>
                        <div className='box__content--main'>
                            <h1>Proteja-se e Domine o Campo!</h1>
                        </div>
                        <div className='box__content--main'>
                            <p>Descubra os equipamentos de Airsoft que garantem segurança e estilo.</p>
                        </div>
                        <div className='box__content--main button'>
                            <a target='_blank' className='button-contact' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Quero saber mais sobre o campo e valores.')}`}><FaWhatsapp />・Entrar em Contato</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='jspqjw2od__dsk' className='wallpaper-ca'>
                <div className='div-imgs'>
                    <img src={'/files/wallpaper3.jpg'} alt='Imagem de Fundo 2' />
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

export {CarouselPhotos, CarouselPhotos2, CarouselHome};