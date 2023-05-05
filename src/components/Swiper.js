import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/Swiper.css"
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import faceprep from "../assets/faceprep.png"
import supersaga from "../assets/supersaga.png"
import highavenue from "../assets/highavenue.png"

export default () => {
      SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      className="swiper"
    >
      <SwiperSlide className='flex items-center justify-center'><div className='object-cover '><img className='object-cover swiperImg' src={faceprep} alt="faceprep"/></div></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><div className='object-cover'><img className='object-cover swiperImg' src={highavenue} alt="highavenue"/></div></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><div className='object-cover'><img className='object-cover swiperImg' src={supersaga} alt="supersaga"/></div></SwiperSlide>
    </Swiper>
  );
};