import React from 'react';

import PuffLoader from 'react-spinners/PuffLoader';

import '../app/style/globals.css';
import Head from 'next/head';

const LoadingScreen = ( {loading} ) => {
    return (
        <>
            <Head>
                <title>Carregando...</title>
            </Head>
            <div>
                <div className='loading'>
                    <PuffLoader color={'#48D904'} loading={loading} size={100} />
                </div>
            </div>
        </>
    )
};

export default LoadingScreen;