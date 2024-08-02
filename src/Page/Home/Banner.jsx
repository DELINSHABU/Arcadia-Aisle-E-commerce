import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectCoverflow, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useEffect, } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountdownTimer from './CountdownTimer';
import Homebanner from "../../../public/Homebanner.json"
import Homebanner1 from "../../../public/Homebanner1.json"
import Lottie from 'lottie-react';

function Banner() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 154);
    useEffect(() => {
        AOS.init()
    }, [])
    return (
       
            <div className=' container mx-auto py-10 '>
                <Swiper
                    spaceBetween={30}
                    loop={true}
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
                    className="mySwiper "

                >

                    <SwiperSlide>
                        <div className=' relative mx-auto w-[100%] bg-black rounded-2xl'>
                            <div className=' absolute top-[20px] md:top-[50px] right-0   text-white px-5 z-10'>
                                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-serif '>Our Best <span className='text-[#F26E00]'>Luxury</span><br /> Watch Collection <br /> For You</h1>
                                <p className='py-5 text-lg mx-auto'>you can adjust  and personality this names <br /> to match brand and style</p>
                                <button className='btn md:w-72 bg-white text-black  lg:mx-16 ml-auto flex justify-center w-fit '>SHOP NOW</button>
                            </div>

                            <img className='h-96 w-[100%]  mx-auto object-cover opacity-50  rounded-2xl' src='https://i.ibb.co/NxX0gFp/img5.jpg' />


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' relative mx-auto w-[100%] bg-black rounded-2xl'>
                            <div className=' absolute top-[30px] md:top-[80px]  lg:left-10  text-white px-5 z-10'>
                                <h1 className='text-2xl md:text-5xl font-bold font-serif'>I am Growing</h1>
                                <p className='py-5 text-lg mr-12 md:mr-0'>Embrace each new day s journey in comfort and confidence.</p>
                                <button className='btn lg::w-72 bg-white text-black my-1 md:my-4   lg:mx-16 ml-auto lg:flex lg:justify-around w-fit '>SHOP NOW</button>
                            </div>

                            <img className='h-72 md:h-96 w-[100%]  mx-auto object-fill  opacity-50  rounded-2xl' src="https://i.ibb.co/Kqtpfzb/img7.jpg" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' relative mx-auto w-[100%] bg-white rounded-2xl'>
                            <div className=' absolute top-1/3 md:top-[50px] left-[38%]   text-b px-5 z-10'>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold font-serif '>FASHION <br /><span className=' text-[#F26E00] text-2xl md:text-5xl lg::text-7xl'>BIG SALE</span><br /> <span className='md:text-3xl lg:text-4xl'>THIS WEEKEND</span></h1>

                                <div className='grid md:flex md:justify-between md:items-center md:gap-2 py-5'>
                                    <button className='btn mb-2 md:mb-0  bg-white text-black border-2 border-orange-500 md:ml-auto  w-fit '>SHOP NOW</button>
                                    <button className='btn  bg-white text-black border-2 border-orange-500  md:ml-auto  w-fit hidden md:block '>VEIW DETAILS</button>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                                <Lottie className='h-72 md:h-96 lg:w-[100%]  mx-auto object-cover bg-white  rounded-2xl' animationData={Homebanner}></Lottie>
                                <Lottie className='h-96 hidden md:block lg:w-[100%]  mx-auto object-cover bg-white  rounded-2xl' animationData={Homebanner1}></Lottie>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=' relative mx-auto w-[100%] '>
                            <div className=' absolute top-1/3 md:top-[100px] right-0   text-white px-5 z-10'>
                                <h1 className='text-3xl md:text-4xl lg::text-5xl font-bold font-serif '>
                                    Aurora Headset
                                </h1>

                                <div className='my-10'>
                                    <CountdownTimer targetDate={targetDate} />
                                </div>
                                <button className='btn lg::w-72 bg-white text-black  md:mx-16 ml-auto lg:flex lg:justify-center w-fit '>BUY NOW</button>
                            </div>

                            <img className='h-96 w-[100%]  mx-auto object-fill object-left-top bg-opacity-50 rounded-2xl' src="https://i.ibb.co/JC6Dj6m/img3.jpg" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        



    );
}

export default Banner