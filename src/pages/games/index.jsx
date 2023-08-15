'use client';

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/games.css';

import { CONFIGS } from '@/__config';

const Games = () => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();
  
    useEffect(() => {
        router.push('/_maintenance');
        // setTimeout(() => {
        //     setLoading(false);
        // }, 2000);
    }, [router]);

    // return (
    //     <>
    //         {loading ?
    //             <LoadingScreen loading={loading} />
    //         :
    //             <div>
    //                 <Head>
    //                     <meta charSet='UTF-8' />
    //                     <meta name='viewport' content='width=device-width, initial-scale=1.0' />

    //                     <meta property='og:type' content='website' />

    //                     <meta name='theme-color' content='#54A824' />

    //                     <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
    //                     <meta name='title' content={`${CONFIGS.gerais['nome']} - Modos de Jogo`} />
    //                     <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
    //                     <meta name='url' content='https://gunsairsoftarena.netlify.app/games' />

    //                     <meta property='og:title' content={`${CONFIGS.gerais['nome']} - Modos de Jogo`} />

    //                     <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

    //                     <meta property='og:site_name' content={`${CONFIGS.gerais['nome']} - Modos de Jogo`} />
    //                     <meta property='og:url' content='https://gunsairsoftarena.netlify.app/games' />

    //                     <meta property='og:image' content='/files/transparent.png' />
    //                     <meta property='og:image:width' content='200' />
    //                     <meta property='og:image:height' content='200' />

    //                     <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
    //                     <link rel='image_src' href='/files/transparent.png' />
                        
    //                     <title>{CONFIGS.gerais['nome']} - Modos de Jogo</title>
    //                 </Head>
    //                 <Navbar bool={2} />
    //                 <CustomNav link='/' text='Modos de Jogo' />
    //                 <div className='main'>
    //                     <div className='title'>
    //                         <h1>Modos de Jogo</h1>
    //                         <p>Conheça os modos de jogo que temos disponíveis para você se divertir com seus amigos!</p>
    //                     </div>
    //                     <div className='games'>
    //                         <div className='game'>
    //                             <div className='game-img'>
    //                                 <img src='/files/noturno.jpg' alt='Modo de Jogo Noturno' />
    //                             </div>
    //                             <div className='game-info'>
    //                                 <h2>Modo de Jogo Noturno</h2>
    //                                 <p>Atualmente realizamos três modos de jogos em nossa arena, buscando sempre estimular o trabalho em equipe e raciocínio lógico. Conheça eles:</p>
    //                             </div>
    //                         </div>
    //                         <div className='game'>
    //                             <div className='game-img'>
    //                                 <img src='/files/noturno.jpg' alt='Modo de Jogo Noturno' />
    //                             </div>
    //                             <div className='game-info'>
    //                                 <h2>Modo de Jogo</h2>
    //                                 <p>Descrição do modo de jogo</p>
    //                             </div>
    //                         </div>
    //                     </div>                            
    //                 </div>
    //                 <Footer />
    //             </div>
    //         }
    //     </>
    // )
};

export default Games;