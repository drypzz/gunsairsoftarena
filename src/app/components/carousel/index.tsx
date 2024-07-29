"use client";

import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ButtonStyled from "../buttonStyled";

import getRandomNumber from "@/app/utils/randomNumber";

import "./index.style.css";

const CarouselContainer = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState('animation-one');

    const handleSlideChange = (index: number) => {
        
        const classes = [
            {text: 'animation-one'},
            {text: 'animation-two'},
        ];

        setCurrentSlide(index);

        const random = Math.floor(getRandomNumber({ min: 0, max: 2 }));

        return setAnimationClass(classes[random].text);
    };

    return (
        <Carousel
            className={`guns-custom-carousel ${animationClass}`}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
            autoPlay
            transitionTime={(20 * 10)}
            swipeable={false}
            interval={(15 * 1000)}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop
            showArrows={true}
        >
            <div className="guns-custom-carousel-container slide-1">
                <div className="guns-custom-carousel-wallpaper">
                    <img src="/wallpaper/3.jpg" alt="Imagem de Fundo 1" />
                </div>
                <div className="guns-custom-carousel-content">
                    <div className="guns-custom-carousel-content-container">
                        <div className="guns-custom-carousel-content-container-box">
                            <h1>Bem-Vindo(a) ao <span className="guns">Guns Airsoft Arena</span></h1>
                        </div>
                        <div  className="guns-custom-carousel-content-container-box">
                            <p>Aqui, a sua diversão é garantida.</p>
                        </div>
                        <div  className="guns-custom-carousel-content-container-box">
                            <ButtonStyled number="554796573081" desc="Olá! Gostaria de marcar um game, quais os valores?" text="Reserve Agora" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="guns-custom-carousel-container slide-2">
                <div className="guns-custom-carousel-wallpaper">
                    <img src="/wallpaper/2.jpg" alt="Imagem de Fundo 1" />
                </div>
                <div className="guns-custom-carousel-content">
                    <div className="guns-custom-carousel-content-container">
                        <div className="guns-custom-carousel-content-container-box">
                            <h1>Proteja-se e Domine o Campo!</h1>
                        </div>
                        <div  className="guns-custom-carousel-content-container-box">
                            <p>Nossos equipamentos garantem segurança e estilo.</p>
                        </div>
                        <div  className="guns-custom-carousel-content-container-box">
                            <ButtonStyled number="554796573081" desc="Olá! Gostaria de marcar um game, quais os valores?" text="Reserve Agora" />
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselContainer;