import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSwiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { slide1, slide2, slide3, slide4 } from '../../assets/imgs'


const HomeSwiper = () => {

    const slides = [slide4, slide2, slide1, slide3]

    return (
        <div className='mt-20'>
            <Swiper
                modules={[Navigation]}
                speed={800}
                slidesPerView={1}
                autoplay
                loop
                navigation
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide}>
                        <figure>
                            <img src={slide} alt="Pessoa se exercitando" className=' w-full h-[530px] object-cover' />
                        </figure>
                    </SwiperSlide>
                ))}
                <div className='absolute top-32 left-28 z-10 '>
                    <h3 className='text-white text-3xl font-bold'>NUNCA É TARDE PARA</h3>
                    <h4 className='text-white text-4xl font-bold'>CUIDAR DA SUA SAÚDE!</h4>
                    <a href="#modalidades"><button className='py-5 px-8 bg-red-600 rounded-full mt-4 hover:bg-red-700'>Saiba mais!</button></a>
                </div>
            </Swiper >
        </div>
    )
}

export default HomeSwiper