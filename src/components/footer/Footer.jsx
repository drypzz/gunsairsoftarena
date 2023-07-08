import React from 'react';

import '../utils/footer.css';

import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <section className='custom__footer'>
                <div className='custom__footer__layout'>
                    <div className='custom__footer__container'>

                        <div className='custom__footer__content--box'>
                            <h2 className='custom__footer__box--title'><span>Formas de Pagamento</span></h2>
                            <ul className='custom__footer__box--img'>
                                <li><img src={'/payments/card.png'} alt='Aceitamos Cartao de Crédito e Debito' title='Cartão' /></li>
                                <li><img src={'/payments/money.png'} alt='Aceitamos Dinheiro' title='Dinheiro' /></li>
                                <li><img src={'/payments/picpay.png'} alt='Aceitamos Picpay' title='PicPay' /></li>
                                <li><img src={'/payments/pix.png'} alt='Aceitamos Pix' title='Pix' /></li>
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
                                    <a target='_blank' href='https://www.facebook.com/gunsairsoftarena/'><FaFacebook/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'><FaInstagram/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp/></a>
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
                        <p>CNPJ: 44.433.534/0001-87</p>
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