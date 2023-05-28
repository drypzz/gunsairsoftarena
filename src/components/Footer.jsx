import React from 'react';

import './utils/footer.css';

const Footer = () => {
    return (
        <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' id='wave-footer'>
                <path fill='#0b0b0b' fill-opacity='1' d='M0,256L1440,288L1440,320L0,320Z'></path>
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
                        <p class='copyright'>Copyright © 2020 - {new Date().getFullYear()} | Todos os direitos reservados a <span style={{color: '#54A824'}}>Guns Airsoft Arena</span></p>
                        <a target='_blank' className='drypzz' href='https://drypzz.netlify.app/'>Developed by @drypzz</a>
                    </div>
                    
                    <div className='content-footer'>
                        <p className='title-footer'>Menu Rápido</p>
                        <div className='about-footer'>
                            <div className='about-footer-container'>
                                <div className='about-footer-content'>
                                    <a href='/contact'>Contato</a>
                                </div>
                                <div className='about-footer-content'>
                                    <a href='/service'>Serviço</a>
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