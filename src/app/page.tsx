"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import LoadinScreen from "./components/loading";
import CarouselContainer from "./components/carousel";

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
        </main>
      }
    </>
  );
};

export default HomePage;