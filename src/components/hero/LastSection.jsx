import React from 'react';

import hero2 from '../../assets/imgs/hero-2.png';

const LastSection = () => {
  return (
    <div className="w-full min-w-[100vw] md:min-w-[650px] h-[95vh] md:h-[85vh] lg:h-[80vh]">
      <div className="relative w-full h-full pl-5 lg:pl-[30px] pb-5 lg:pb-[20px]">
        <span className="absolute bottom-0 left-0 w-[80px] h-[50%] bg-[--black] block" />
        <div className="relative w-full h-full border-l-[5p] border-b-[5px] border-white">
          <img
            src={hero2}
            alt="hero"
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
