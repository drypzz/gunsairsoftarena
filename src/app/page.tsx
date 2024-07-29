"use client";

import React, { useEffect, useState } from "react";

import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import Navbar from "./components/navbar";
import LoadinScreen from "./components/loading";
import CarouselContainer from "./components/carousel";

import { getYear } from "./utils/getDate";

import "./page.style.css";

const HomePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <>
      {loading ?
        <LoadinScreen />
      :
        <main>  
          <Navbar number={0} />
          <CarouselContainer />
          <section className="guns-information">
            <div className="guns-information-content">
              <h4><FaWhatsapp /> Mande um Whats</h4>
              <h3>(47) 9657-3081</h3>
            </div>
            <div className="guns-information-content">
              <h4><FaMapMarkerAlt /> R. Boehmerwald, 170</h4>
              <h3>Joinville, SC</h3>
            </div>
          </section>
          <section className="guns-about-us">
            <div className="guns-about-us-content">
              <div className="guns-about-us-content-box">
                <img draggable="false" src="/logo/transparent.png" alt="Logo da Guns Airsoft Arena" />
              </div>
            </div>
            <div className="guns-about-us-content">
              <div className="guns-about-us-content-box">
                <h1>Sobre Nós</h1>
              </div>
              <div className="guns-about-us-content-box">
                <p>A <span className="guns">Guns Airsoft Arena</span> foi fundada no ano de 2021 com o objetivo de oferecer uma forma de entretenimento distinta para a cidade de Joinville e região. O Airsoft, como esporte, tem-se destacado como uma opção de alto valor para aqueles que buscam uma atividade capaz de aliviar as tensões do cotidiano. Isso se deve, em parte, à sua natureza prazerosa, mas também ao fato de que o Airsoft envolve exercícios de resistência, trabalho em equipe e raciocínio rápido, proporcionando benefícios significativos tanto para a saúde física quanto mental dos praticantes. Portanto, se você está em busca de um local onde possa reduzir o estresse proveniente de sua vida profissional e pessoal, convidamos você a reunir seus amigos e visitar-nos para desfrutar dessa experiência. A Guns Airsoft Arena se apresenta como o lugar ideal para tal finalidade.</p>
              </div>
            </div>
          </section>
          <footer>
            <div className="guns-footer-content">
              <div>
                <p>2021 - {getYear()} © Todos os direitos reservados.</p>
              </div>
              <div>
                <p>CNPJ: 41.181.619/0001-27</p>
              </div>
            </div>
          </footer>
        </main>
      }
    </>
  );
};

export default HomePage;