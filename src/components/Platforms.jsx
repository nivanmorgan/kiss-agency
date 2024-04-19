import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

import logo1 from '../assets/imgs/platform-1.svg';
import logo2 from '../assets/imgs/platform-2.svg';
import logo3 from '../assets/imgs/platform-3.svg';
import logo4 from '../assets/imgs/platform-4.svg';
import logo5 from '../assets/imgs/platform-5.svg';

const Platforms = ({ container }) => {
  let [ref, { width }] = useMeasure();

  const containerTranslation = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const xTranslation = useTransform(
    scrollYProgress,
    [0, 1],
    [-width / 4 - 8, 0]
  );
  // console.log(scrollYProgress);

  //   useEffect(() => {
  //     let controls;
  //     let finalPosition = -width / 2 - 8;

  //     controls = animate(containerTranslation, [0, finalPosition], {
  //       ease: 'linear',
  //       duration: 25,
  //       repeat: Infinity,
  //       repeatType: 'loop',
  //       repeatDelay: 0,
  //     });

  //     return controls.stop;
  //   }, [containerTranslation, width]);

  return (
    <div className="w-full flex">
      <div className="bg-[--neutral] w-auto px-4 py-5 lg:py-5 lg:px-8 space-y-2">
        <h3>Platforms</h3>
        <motion.div
          ref={ref}
          style={{ x: containerTranslation }}
          className="overflow-x-auto no-scrollbar max-w-[300px]"
        >
          <motion.div
            style={{ translateX: xTranslation }}
            className="flex gap-4"
          >
            <img src={logo1} className="w-[45px] h-[45px] object-contain p-1" />
            <img src={logo2} className="w-[45px] h-[45px] object-contain" />
            <img src={logo3} className="w-[45px] h-[45px] object-contain" />
            <img src={logo4} className="w-[45px] h-[45px] object-contain" />
            <img src={logo5} className="w-[45px] h-[45px] object-contain" />
            <img src={logo1} className="w-[45px] h-[45px] object-contain p-1" />
            <img src={logo2} className="w-[45px] h-[45px] object-contain" />
            <img src={logo3} className="w-[45px] h-[45px] object-contain" />
            <img src={logo4} className="w-[45px] h-[45px] object-contain" />
            <img src={logo5} className="w-[45px] h-[45px] object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Platforms;
