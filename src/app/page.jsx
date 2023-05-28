'use client';

import React, {useState, useEffect} from 'react';
import './style/globals.css';

import HomeScreen from '@/components/HomeScreen';

import PuffLoader from 'react-spinners/PuffLoader';

export default function Home() {

  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 5000);
    }, []);

  return (
    <div>
      {loading ?
        <div>
          <div className='loading'>
            <PuffLoader color={'#48D904'} loading={loading} size={100} />
          </div>
        </div>
      :
        <div>
          <HomeScreen />
        </div>
      }
    </div>
  )
};