import React from 'react';

import '../utils/footer.css';

import { FaInstagram, FaWhatsapp, FaFacebook, FaCcVisa } from 'react-icons/fa';
import { CONFIGS } from '@/__config';

const Footer = () => {
    return (
        <>
            <section className='custom__footer'>
                <div className='custom__footer__layout'>
                    <div className='custom__footer__container'>

                        <div className='custom__footer__content--box'>
                            <h2 className='custom__footer__box--title'><span>Formas de Pagamento</span></h2>
                            <ul className='custom__footer__box--img'>
                                <li>
                                    <img src={'/payments/visa.svg'} alt={'Cartao'} title={'Visa'} />
                                </li>
                                <li>
                                    <img src={'/payments/mastercard.svg'} alt={'Cartao'} title={'Mastercard'} />
                                </li>
                                <li>
                                    <img src={'/payments/pix.svg'} alt={'Cartao'} title={'Pix'} />
                                </li>
                                <li>
                                    <img src={'/payments/hipercard.svg'} alt={'Cartao'} title={'Hipercard'} />
                                </li>
                                <li>
                                    <img src={'/payments/elo.svg'} alt={'Cartao'} title={'Elo'} />
                                </li>
                            </ul>
                            <div className='dev'>
                                <a target='_blank' href='https://drypzz.netlify.app/'>Developed by @drypzz</a>
                            </div>
                        </div>

                        <div className='custom__footer__content--box'>
                            <h2 className='custom__footer__box--title'><span>Menu Rápido</span></h2>
                            <ul className='custom__footer__box--list'>
                                <li><a href='/'>{'•'} Inicio</a></li>
                                <li><a href='/equipaments'>{'•'} Equipamentos</a></li>
                                <li><a href='/games'>{'•'} Modos de Jogo</a></li>
                                <li><a href='/midia'>{'•'} Fotos</a></li>
                                <li><a href='/values'>{'•'} Valores</a></li>
                                <li><a href='/contact'>{'•'} Contato</a></li>
                            </ul>
                        </div>

                        <div className='custom__footer__content--box'>
                            <div className='custom__footer__box--icons'>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href={CONFIGS.gerais.redesSociais['facebook']}><FaFacebook/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href={CONFIGS.gerais.redesSociais['instagram']}><FaInstagram/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href={`https://api.whatsapp.com/send?phone=${CONFIGS.gerais['telefone']}`}><FaWhatsapp/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-content'>
                        <p>© 2021 - {new Date().getFullYear()} | Todos os direitos reservados</p>
                    </div>
                    <div className='footer-content'>
                        <p>CNPJ: {CONFIGS.gerais['cnpj']}</p>
                    </div>
                    <div className='footer-content'>
                        <img src={'/files/transparent.png'} />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;