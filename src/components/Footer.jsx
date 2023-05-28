import React from 'react';

import './utils/footer.css';

import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaHome, FaPhoneSquare, FaHandHoldingUsd, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' id='wave-footer'>
                <path fill='#0b0b0b' fillOpacity='1' d='M0,256L1440,288L1440,320L0,320Z'></path>
            </svg>
            <footer className='footer'>
                <div className='container-footer'>

                    <div className='content-footer'>
                        <p className='title-footer'>Formas de Pagamento</p>
                        <div className='payments'>
                            <img src={'/payments/card.png'} alt='Formas de Pagamento' />
                            <img src={'/payments/picpay.png'} alt='Formas de Pagamento' />
                            <img src={'/payments/pix.png'} alt='Formas de Pagamento' />
                        </div>
                        <p className='copyright'>© 2021 - {new Date().getFullYear()} | Todos os direitos reservados</p>
                        <p className='copyright'>GUNS AIRSOFT ARENA | CNPJ: 44.433.534/0001-87</p>
                        <a target='_blank' className='drypzz' href='https://drypzz.netlify.app/'>Developed by @drypzz</a>
                    </div>
                    
                    <div className='content-footer'>
                        <p className='title-footer'>Menu Rápido</p>
                        <div className='about-footer'>
                            <div className='about-footer-container'>
                                <div className='about-footer-content'>
                                    <a href='/contact'><FaPhoneSquare /> Contato</a>
                                </div>
                                <div className='about-footer-content'>
                                    <a href='/service'><FaHandHoldingUsd /> Serviço</a>
                                </div>
                                <div className='about-footer-content'>
                                    <a href='/'><FaHome /> Inicio</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='content-footer'>
                        <p className='title-footer'>Links</p>
                        <div className='about-footer'>
                            <div className='about-footer-container'>
                                <div className='about-footer-content'>
                                    <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'><FaInstagram /> Instagram</a>
                                </div>
                                <div className='about-footer-content'>
                                    <a target='_blank' href='https://www.facebook.com/gunsairsoftarena'><FaFacebook /> Facebook</a>
                                </div>
                                <div className='about-footer-content'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp /> Whatsapp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='content-footer'>
                        <p className='title-footer'>Localização</p>
                        <div className='about-footer'>
                            <div className='about-footer-container'>
                                <div className='about-footer-content'>
                                    <a target='_blank' href='https://goo.gl/maps/rLWMmyMyFr234XPe6'><FaMapMarkerAlt /> Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;