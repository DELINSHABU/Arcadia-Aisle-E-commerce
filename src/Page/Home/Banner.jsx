import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectCoverflow, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "/img1.jpg"
import img2 from "/img2.jpg"

function Banner() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className=' py-10'>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}


                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation, EffectFade]}
                    className="mySwiper"

                >
                    <SwiperSlide>

                        <div


                        >
                            <h1 className='text-2xl text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corrupti!</h1>
                            <img data-aos="fade-up"
                                data-aos-anchor-placement="center-center"
                                data-aos-duration="1000" className='w-[80%] object-cover object-left-top mx-auto h-96 ' src={img1} />


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div


                        >
                            <h1 className='text-2xl text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corrupti!</h1>
                            <img data-aos="fade-up"
                                data-aos-anchor-placement="center-center"
                                data-aos-duration="1000" className='w-[80%] object-cover  mx-auto h-96 ' src="	https://woodmart.b-cdn.net/wp-content/uploads/2018/09/camping-slider-img-s2-1.png.webp" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[80%] object-cover object-left-top mx-auto h-96 ' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>



    );
}

export default Banner