import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

import { serviceList } from '../utils/constants';

const ServiceList = ({ container }) => {
  let [ref, { width }] = useMeasure();

  const containerTranslation = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const xTranslation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -width / 4 - 16]
  );
  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2 - 8;

  //   controls = animate(containerTranslation, [0, finalPosition], {
  //     ease: 'linear',
  //     duration: 25,
  //     repeat: Infinity,
  //     repeatType: 'loop',
  //     repeatDelay: 0,
  //   });

  //   return controls.stop;
  // }, [containerTranslation, width]);

  return (
    <motion.div
      ref={ref}
      style={{ x: containerTranslation }}
      className="w-full overflow-x-auto no-scrollbar"
    >
      <motion.div style={{ translateX: xTranslation }} className="flex gap-4">
        {[...serviceList, ...serviceList].map((item, i) => (
          <div
            key={i}
            className={`min-w-[170px] flex flex-col gap-4 items-center  justify-center text-center px-8 py-5 border-2 relative ${
              i % 2 ? 'border-[--black]' : 'border-[--gray]'
            }`}
          >
            <span className="absolute top-0 right-0 bg-[--neutral] w-[15px] h-full"></span>
            <img
              src={item.icon}
              alt={item.text}
              className="w-[40px] h-[40px] object-contain"
            />
            <p className="font-bold">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceList;
