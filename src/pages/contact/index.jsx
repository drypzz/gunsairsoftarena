'use client';

import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CustomNav from '@/components/customnav/CustomNav';
import LoadingScreen from '@/components/loading/Loading';

import '../utils/contact.css';

import ClipLoader from 'react-spinners/ClipLoader';

import { FaInstagram, FaWhatsapp, FaFacebook, FaMap, FaPhoneAlt, FaRegEnvelope, FaClock, FaExclamationCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

import { CONFIGS, LIST_HOURS } from '@/__config';

import { getDay, getHours, getMinutes, addDays, format } from 'date-fns';

const Contacts = () => {
    const [loading, setLoading] = useState(true);
    const [map, setMap] = useState([]);
    const [getLoadingMap, setLoadingMap] = useState(true);
    
    const [getActiveDay, setActiveDay] = useState(false); // Verifica se o dia atual é o dia que está aberto
    const [getDataNextDay, setDataNextDay] = useState({}); // Armazena os dados do próximo dia
    const [getActiveNow, setActiveNow] = useState(false); // Verifica se no dia atual o local está aberto ou fechado
    const [getDataNow, setDataNow] = useState({}); // Armazena os dados do dia atual

    async function loadMap() {
        setMap(<iframe style={{ border: 'none' }} src='https://maps.google.com/maps?q=Guns+Airsoft+Arena&t=&z=17&ie=UTF8&iwloc=&output=embed&sa'></iframe>);
        setTimeout(() => {
            setLoadingMap(false)
        }, 5000);
    };

    const formatPhoneNumber = (phoneNumber) => {
        const cleanedNumber = phoneNumber.replace(/\D/g, '');

        if (cleanedNumber.length === 12) {
            return `+${cleanedNumber.slice(0, 2)} (${cleanedNumber.slice(2, 4)}) ${cleanedNumber.slice(4, 8)}-${cleanedNumber.slice(8)}`;
        }else{
            return `+${cleanedNumber.slice(0, 2)} (${cleanedNumber.slice(2, 3)}) ${cleanedNumber.slice(3, 7)}-${cleanedNumber.slice(7)}`;
        };
    };
    
    const getCheckDayActive = () => {
        const now = new Date();
        const dayOfWeek = getDay(now);
        const hours = getHours(now);
        const minutes = getMinutes(now);
        const getList = LIST_HOURS.find((e) => e.number === dayOfWeek);
    
        if (getList.type.toLowerCase() === 'fechado') {
            setActiveNow(false);
        } else {
            const check = (getList.open <= `${(hours <= 9 ? `0${hours}` : hours)}:${minutes}` && getList.close >= `${(hours <= 9 ? `0${hours}` : hours)}:${minutes}`);
            setActiveDay(check ? getList.number : false);
            setActiveNow(check);
            setDataNow(getList);
        }
    };

    const waitForNextOpening = async (number) => {
        const now = new Date();
        const diasDaSemana = {
            Sunday: 'Dom.',
            Monday: 'Seg.',
            Tuesday: 'Ter.',
            Wednesday: 'Qua.',
            Thursday: 'Qui.',
            Friday: 'Sex.',
            Saturday: 'Sáb.'
        };
    
        const nextDay = addDays(now, number);
        const nextDayName = diasDaSemana[format(nextDay, 'EEEE')];
        const nextListDay = LIST_HOURS.find((e) => e.number === getDay(nextDay));
    
        if (nextListDay.type === 'fechado') {
            if (number < LIST_HOURS.length - 1) {
                return waitForNextOpening(number + 1);
            } else {
                return {
                    message: `・Estamos fechados até o momento.`,
                };
            }
        } else {
            return {
                message: `・Atendimento Fechado - Aberto ${nextDayName} ás ${nextListDay.open}`,
            };
        }
    };

    const fetchNationalHolidays = async (countryCode, year) => {
        try {
            const response = await fetch(`https://date.nager.at/api/v2/PublicHolidays/${year}/${countryCode}`);
            const holidays = await response.json();
            return holidays;
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    
    useEffect(() => {
        getCheckDayActive();
    
        fetchNationalHolidays('BR', new Date().getFullYear()).then(async (res) => {
            const now = new Date();
            const dayOfWeek = getDay(now);
    
            const getList = LIST_HOURS.find((e) => e.number === dayOfWeek);
    
            const holidays = res.filter((e) => e.date.split('-')[1] == (now.getMonth() + 1) && e.date.split('-')[2] == now.getDate());
    
            if (holidays.length > 0) {
                setActiveDay(false);
                setActiveNow(false);
                setDataNextDay({
                    message: `・Atendimento Fechado (${holidays[0].localName})`,
                });
            } else {
                const hours = getHours(now);
                const minutes = getMinutes(now);

                const isAfterClosingTime = hours > parseInt(getList.close.split(':')[0]) || (hours === parseInt(getList.close.split(':')[0]) && minutes >= parseInt(getList.close.split(':')[1]));

                if (isAfterClosingTime || getList.type === 'fechado') {
                    const nextOpeningData = await waitForNextOpening(1);

                    setActiveDay(false);
                    setActiveNow(false);

                    setDataNextDay({
                        message: nextOpeningData.message,
                    });
                }else{
                    setDataNextDay({
                        status: 'warn',
                        message: `・Atendimento Fechado - Aberto hoje ás ${getList.open}`,
                    });
                }
            }
        });
    
        loadMap();
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [getDataNow]);

    return (
        <>
            {loading ?
                <LoadingScreen loading={loading} />
            :
                <div>
                    <Head>
                        <meta charSet='UTF-8' />
                        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                        <meta property='og:type' content='website' />

                        <meta name='theme-color' content='#54A824' />

                        <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
                        <meta name='title' content={`${CONFIGS.gerais['nome']} - Contato`} />
                        <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
                        <meta name='url' content='https://gunsairsoftarena.netlify.app/contact' />

                        <meta property='og:title' content={`${CONFIGS.gerais['nome']} - Contato`} />

                        <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

                        <meta property='og:site_name' content={`${CONFIGS.gerais['nome']} - Contato`} />
                        <meta property='og:url' content='https://gunsairsoftarena.netlify.app/contact' />

                        <meta property='og:image' content='/files/transparent.png' />
                        <meta property='og:image:width' content='200' />
                        <meta property='og:image:height' content='200' />

                        <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
                        <link rel='image_src' href='/files/transparent.png' />
                        
                        <title>{CONFIGS.gerais['nome']} - Contato</title>
                    </Head>
                    <Navbar bool={3} />
                    <CustomNav link='/' text='Contato' />
                    <div className='main'>
                        <div className='title'>
                            <h1>Localização</h1>
                            <p>Observe a nossa localização atual.</p>
                        </div>
                        <div className='location'>
                            {getLoadingMap ? <ClipLoader color={'#48D904'} loading={getLoadingMap} size={100} /> : map}
                        </div>
                        <div className='contacts'>
                            <div className='contacts-container'>
                                <div className='contacts-info'>
                                    <div className='titlesdop'>
                                        <h3 className='title--info'>Contato</h3>
                                    </div>
                                    <ul id='kasw' className='contacts-info-item--ul'>
                                        <li>
                                            <a target='_blank' href='https://goo.gl/maps/cxPno5J1cjJEvS1W6'><FaMap />・{CONFIGS.gerais['endereco']}</a>
                                        </li>
                                        <li>
                                            <a href={`tel:+${CONFIGS.gerais['telefone']}`}><FaPhoneAlt />・{formatPhoneNumber(CONFIGS.gerais['telefone'])}</a>
                                        </li>
                                        <li>
                                            <a target='_blank' href='mailto:gunsairsoftarena@gmail.com'><FaRegEnvelope />・{CONFIGS.gerais['email']}</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='contacts-info'>
                                    <div className='titlesdop'>
                                        <h3 className='title--info'>Horário de Funcionamento</h3>
                                    </div>
                                    {getActiveNow !== true
                                    ?
                                        <div className={`hours ${getDataNextDay['status'] === 'warn' ? 'warn' : ''}`}>
                                            <span>{getDataNextDay['status'] === 'warn' ? <FaExclamationTriangle /> : <FaExclamationCircle />}{getDataNextDay['message']}</span>
                                        </div>
                                    :
                                        <div id='openss' className='hours'>
                                            <span><FaCheckCircle />・Atendimento Online - Encerra hoje ás {getDataNow['close']}</span>
                                        </div>
                                    }
                                    <ul className='contacts-info-item--ul'>
                                        {LIST_HOURS.map((e, index) => (
                                            <li key={index}>
                                                <FaClock />{e.day} {e.number === getActiveDay ? '-' : ''}
                                                <span id='horario' className={`${e.number === getActiveDay ? (e.type == 'fechado' ? '' : 'active') : ''}`}>
                                                    {`${e.number === getActiveDay ? (e.type == 'fechado' ? ' Fechado' : ' Aberto') : ''}`}
                                                </span>
                                                <span className={`${e.number === getActiveDay ? (e.type == 'fechado' ? '' : 'active') : ''}`}>
                                                    {e.open} - {e.close}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='contacts-info'>
                                    <div className='titlesdop'>
                                        <h3 className='title--info'>NOS ENCONTRE</h3>
                                    </div>
                                    <div className='container--red'>
                                        <div className='itens--red'>
                                            <a target='_blank' href={CONFIGS.gerais.redesSociais['instagram']}><FaInstagram/></a>
                                        </div>
                                        <div className='itens--red'>
                                            <a target='_blank' href={CONFIGS.gerais.redesSociais['facebook']}><FaFacebook/></a>
                                        </div>
                                        <div className='itens--red'>
                                            <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
};

export default Contacts;