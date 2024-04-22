import { useRef, useState, useEffect } from 'react';

import { motion, useAnimate, stagger, useScroll } from 'framer-motion';

import { Heading, Tags, Blog } from '../components';
import { values } from '../utils/constants';

const OurValues = () => {
  return (
    <div id="our-values" className="flex-container !min-w-[2000px]">
      <div className="space-y-7 lg:space-y-10 w-full md:w-[85%] xl:w-full col-span-2 flex flex-col justify-center flex-content-box !min-w-[500px]">
        <Heading
          tag="Our Values"
          header={['Why', 'Choose Us']}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Tags />
      </div>
      <div className="flex-content-box flex gap-8">
        {values.map((value, i) => (
          <Blog
            key={i}
            title={value.title}
            excerpt={value.excerpt}
            link={value.link}
            img={value.img}
            type={value.type}
            lottie={value.lottie}
            clip={value.clip}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
