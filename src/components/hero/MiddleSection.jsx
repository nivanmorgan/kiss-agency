import React from 'react';

import logo from '../../assets/imgs/kiss-agency-logo.svg';

const MiddleSection = () => {
  return (
    <div className="w-screen min-w-[100vw] h-screen flex flex-col items-center justify-around lg:justify-between gap-0">
      <div className="flex flex-col lg:h-full justify-center w-full">
        <div className="w-full pl-[25px] lg:pl-[100px] md:pr-[50px] grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[60px] self-start hidden lg:block">
            <img
              src={logo}
              alt="logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="space-y-5">
            <div className="h-[45px] lg:h-[60px] flex lg:justify-end -ml-1">
              <img
                src={logo}
                alt="logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="!leading-[160%] w-full md:w-[350px]">
              Your Vision, Our Expertise: <br /> Crafting Innovative Solutions
              In Design, Development, Digital Marketing, And AI.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-[15vw] lg:text-[11vw] font-medium !leading-[100%] lg:!leading-[90%] pb-[2.5vw] relative pr-[25px] px-5 lg:px-0">
        Elevate Your
        <br />
        <span>Business</span> With
        <br />
        <span>KISS</span> Design
        <button className=" lg:absolute lg:bottom-0 right-0 btn-1-v2 !font-medium text-sm md:text-base lg:mb-[4vw] block mt-7 md:mt-12 lg:mt-0">
          Learn More
        </button>
      </h1>
    </div>
  );
};

export default MiddleSection;
