import  { useRef} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function TopSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full lg:mt-10 opacity-80 bg-gradient-to-r from-gray-500'>
            <img src="https://img.freepik.com/free-photo/fashion-girls_1157-5471.jpg?w=1060&t=st=1686138760~exp=1686139360~hmac=5fe3f1d57f13957d6b842040874cd97a4cfeb9b23782ca4c9b82ed5d0b55e3e8" alt="" height={600} className='w-full h-1/2'/>
            <div className='-mt-96  '>
            <h1 className='text-center text-5xl font-bold text-orange-400'>Outwear fashion</h1>
            <p className='text-orange-400 p-10 text-2xl text-center'>Outwear fashion embraces functionality and style, offering diverse options to stay both warm and fashionable during the colder seasons.</p>
           </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide><div className='w-full opacity-80 lg:mt-10 bg-gradient-to-r from-gray-500'>
            <img src="https://img.freepik.com/free-photo/group-beautiful-chlidren-posing_155003-1987.jpg?w=1060&t=st=1686142805~exp=1686143405~hmac=03cf48f0894a46c9dd402a5ec7b5442d08871d4dbe1d3c8805db9cbd412721a3" alt="" height={600} className='w-full'/>
            <div className='-mt-96  '>
            <h1 className='text-center text-5xl font-bold text-orange-400'>Children Fashion</h1>
            <p className='text-orange-400 p-10 text-2xl text-center'>Children fashion is a vibrant world of colorful and playful styles, keeping up with the latest trends while prioritizing comfort and practicality for active little ones.</p>
           </div>
            </div></SwiperSlide>

        <SwiperSlide ><div className='w-full opacity-80 lg:mt-10 bg-gradient-to-r from-gray-500'>
            <img src="https://img.freepik.com/free-photo/couple-holding-hands-front-view_23-2149956411.jpg?w=1060&t=st=1686139652~exp=1686140252~hmac=b348430d8aa56b5e2abc24ef2ca9992eac1b6cd803a5489dbb7e0c95a7be44e7" alt="" height={600} className='w-full '/>
            <div className='-mt-96  '>
            <h1 className='text-center text-5xl font-bold text-orange-400'>Bridal Fashion</h1>
            <p className='text-orange-400 p-10 text-2xl text-center'>Bridal fashion embraces timeless elegance and modern trends, offering brides a stunning array of designs to fulfill their wedding day dreams.</p>
           </div>
            </div></SwiperSlide>
        <SwiperSlide className='w-3/4 h-1/2 opacity-80'>

          <div className='w-full lg:mt-10 '>
            <img src="https://img.freepik.com/free-photo/man-sitting-cobblestone-road_23-2147657088.jpg?w=1060&t=st=1686142993~exp=1686143593~hmac=358d4479079afe7de1b27cc386a23fb2a97dde3b369b86e0597e6bfdae820788" alt=""  className='w-full'/>
           <div className='-mt-96  '>
            <h1 className='text-center text-5xl  font-bold text-orange-400'>Man Fashion</h1>
            <p className='text-orange-400 p-10 text-2xl text-center'>Men fashion is constantly evolving, combining classic styles with contemporary <br /> trends to create a stylish and confident look.</p>
           </div>
            </div>
            </SwiperSlide>
        
        <div className="autoplay-progress"  slot="container-end">
        <svg ref={progressCircle}>
        <span ref={progressContent}></span>
          </svg>
          
        </div>
      </Swiper>
    </>
  );
}

