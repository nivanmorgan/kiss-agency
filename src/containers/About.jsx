import { useRef } from 'react';
import useMeasure from 'react-use-measure';

import { useScroll, useTransform, motion } from 'framer-motion';

import { Heading, Platforms } from '../components';
import dashboard from '../assets/imgs/dashboard.jpeg';

const About = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  let [contentContainer, { width }] = useMeasure();
  const displaceY = useTransform(
    scrollYProgress,
    [0, 1],
    [width >= 600 ? 300 : 100, 0]
  );
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imgZ = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div
      ref={container}
      id="about"
      className="w-full relative h-[200vh] lg:h-[200vh]"
    >
      <div
        ref={contentContainer}
        className="sticky top-0 mt-[50px] section-py container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
      >
        <motion.div
          style={{ y: displaceY }}
          className="space-y-7 lg:space-y-10 order-2 md:order-1"
        >
          <Heading
            tag="About Us"
            header={['Crafting', "Tomorrow's Experience"]}
            content="Our Mission is to drive the digital evolution by delivering unparalleled solutions in Design, Software & Web Development, Digital Marketing, & AI Engineering. We are dedicated to staying ahead of the curve, embracing challenges, and redefining industry standards. We are determined to be the strategic partner that propels businesses into the future"
          />
          <Platforms container={container} />
        </motion.div>
        <div className="md:absolute top-0 right-0 md:w-[50vw] md:h-full flex items-center md:pl-[50px] lg:pl-[70px]">
          <motion.div className="relative pl-[10px] lg:pl-[25px] pt-[25px] md:pt-[35px] lg:pt-[50px] pb-[15px] lg:pb-[25px] overflow-hidden">
            <div
              //   style={{ scale: imgScale }}
              className="h-[240px] w-[110%] md:h-[65vh] md:max-h-[500px] max-h-[600px] bg-[--neutral] rounded-l-2xl md:rounded-l-[1.65rem] xl:rounded-l-[1.8rem]"
            >
              {/* Floaters */}
              <motion.span
                // initial={{ opacity: 0 }}
                // whileInView={{ x: [75, 25], y: [-50, 0], opacity: [0, 1] }}
                // transition={{ delay: 0.25 }}
                className="absolute top-0 right-0 w-[45%] h-[50%] bg-[--gray]"
              />
              <motion.span
                // initial={{ opacity: 0 }}
                // whileInView={{ x: [-50, 0], y: [50, 0], opacity: [0, 1] }}
                // transition={{ delay: 0.25 }}
                className="absolute bottom-0 left-0 w-[35%] h-[50%] bg-[--dark] rounded-bl-2xl md:rounded-bl-3xl"
              />

              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ scale: [0.9, 1.1, 1], opacity: [0, 1] }}
                //   transition={{ delay: 0.25 }}

                src={dashboard}
                className="relative w-full h-full object-cover object-left rounded-l-2xl md:rounded-l-[1.65rem] xl:rounded-l-[1.8rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
