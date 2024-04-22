import React from 'react';
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
// import lottie from '../assets/lottie/handshake.json';

import { slideInRight, slideInBottom } from '../utils/variants';

const Blog = ({ title, excerpt, link, img, type, lottie, clip, i }) => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      custom={0}
      className="relative flex flex-col blog-card lg:min-w-[300px]"
    >
      <motion.div
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={1}
        className="relative bg-[--neutral] py-5"
      >
        {/* <span
          className={`absolute w-[50%] h-[90px] bg-[--neutral] border-2 border-[--black] ${
            type[0] === 't' ? 'top-[-10px]' : 'bottom-[-10px]'
          } ${type[1] === 'l' ? 'left-[-10px]' : 'right-[-10px]'} `}
        ></span>
        <img
          src={img}
          alt={title}
          className="relative h-[100px] w-full object-cover"
        /> */}
        <div
          className={`!my-[-${clip[0]}%] flex object-contain p-0 m-0 ${
            i === 2 && 'scale-[1.8]'
          } ${i === 3 && 'scale-[1.3]'} `}
        >
          <Lottie
            animationData={lottie}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '200px',
              // clipPath: `polygon(0% 0%, 0% ${clip[0]}%, 100% ${clip[0]}%, 100% ${clip[1]}%, 0% ${clip[1]}%)`,
              // background: 'blue',
            }}
          />
        </div>
      </motion.div>
      <motion.h3
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={1}
        className="pt-4 pb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={3}
      >
        <span className="hidden lg:block">{excerpt.slice(0, 150)}...</span>
        <span className="lg:hidden">{excerpt}</span>
      </motion.p>
      <motion.div
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={4}
        className="pt-2"
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          href="#"
          className="btn-2"
        >
          Know More
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
