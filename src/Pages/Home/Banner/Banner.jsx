import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
      <div className="carousel w-full  h-[600px] mx-auto  xs:w-xl sm:w-xl xs:w-full md:max-w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/brunette-seamstress-apron-measuring-beautiful-fabric-black-dummy-workshop_171337-7341.jpg?w=1060&t=st=1686752927~exp=1686753527~hmac=f73f69ddddd73d406f9ae1c220a4d120620bb0206362bf4caf6a7f44bd1aa4cc"
            className="w-full"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-4 text-center">"Fashion design courses unlock limitless creativity,</h2>
              <p className='text-center mx-4'>
              transforming dreams into exquisite garments that redefine style."
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/pretty-brunette-girl-grey-dress-yellow-jacket-is-standing-near-clothes-workshop-studio-she-is-smiling-camera_197531-840.jpg?w=1060&t=st=1686753897~exp=1686754497~hmac=ec196abf5c65ad446a34661b6d95c1dfea3ad5aa03fce2e9c9f4904ad0a519e8"
            className="w-full"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-8 text-center">"Unlock your creativity and passion with transformative </h2>
              <p className='text-center mx-8'>
              fashion design courses, where style meets artistry."
              
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-indoors_23-2148875315.jpg?w=1060&t=st=1686753965~exp=1686754565~hmac=4e9c4092645475aeaa4da1098887f7a0ed298bb239a323c05f0daa7eb4774891"
            className="w-full h-[600px]"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-8 text-center">"Embark on a creative journey </h2>
              <p className='text-center mx-8'>
              and   unleash your style with captivating fashion design courses "
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
  );
};

export default Banner;
