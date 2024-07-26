"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import LoadinScreen from "./components/loading";

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
          <div>
            <h1>Home Page</h1>
          </div>
        </main>
      }
    </>
  );
};

export default HomePage;