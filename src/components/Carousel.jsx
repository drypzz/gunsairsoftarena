import { Carousel } from 'react-responsive-carousel';
import './utils/carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    const imagens = [
        '/guns/001.jpg',
        '/guns/002.jpg',
        '/guns/003.jpg',
        '/guns/004.jpg',
        '/guns/005.jpg',
        '/guns/006.jpg',
        '/guns/007.jpg',
        '/guns/008.jpg',
        '/guns/009.jpg',
        '/guns/010.jpg',
        '/guns/011.jpg',
        '/guns/012.jpg',
        '/guns/013.jpg',
        '/guns/014.jpg',
        '/guns/015.jpg',
        '/guns/016.jpg',
    ]
    return (
        <Carousel autoPlay transitionTime={1000} swipeable={false} interval={4000} stopOnHover={false} showStatus={false} showIndicators={false} infiniteLoop showArrows={false}>
            {imagens.map((img, index) => {
                return (
                    <div className='modal-content' key={index}>
                        <img src={`${img}`} alt={`Imagem ${index + 1}`} />
                    </div>
                )
            })}
        </Carousel>
    );
};

const MyCarousel2 = () => {
    const imagens2 = [
        '/guns/017.jpg',
        '/guns/018.jpg',
        '/guns/019.jpg',
        '/guns/020.jpg',
        '/guns/021.jpg',
        '/guns/022.jpg',
        '/guns/023.jpg',
        '/guns/024.jpg',
        '/guns/025.jpg',
        '/guns/026.jpg',
        '/guns/027.jpg',
        '/guns/028.jpg',
        '/guns/029.jpg',
        '/guns/030.jpg',
        '/guns/031.jpg',
        '/guns/032.jpg',
    ]
    return (
        <Carousel autoPlay transitionTime={1000} swipeable={false} interval={4000} stopOnHover={false} showStatus={false} showIndicators={false} infiniteLoop showArrows={false}>
            {imagens2.map((img, index) => {
                return (
                    <div className='modal-content' key={index}>
                        <img src={`${img}`} alt={`Imagem ${index + 1}`} />
                    </div>
                )
            })}
        </Carousel>
    );
};

export {MyCarousel, MyCarousel2};