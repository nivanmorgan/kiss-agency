import React from 'react';
import { motion } from 'framer-motion';

import { slideInRight, slideInBottom } from '../utils/variants';

const Blog = ({ title, excerpt, link, img, type, i }) => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      custom={0}
      className="relative flex flex-col blog-card"
    >
      <motion.div
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={1}
        className="relative bg-[--neutral]"
      >
        <span
          className={`absolute w-[50%] h-[90px] bg-[--neutral] border-2 border-[--black] ${
            type[0] === 't' ? 'top-[-10px]' : 'bottom-[-10px]'
          } ${type[1] === 'l' ? 'left-[-10px]' : 'right-[-10px]'} `}
        ></span>
        <img
          src={img}
          alt={title}
          className="relative h-[100px] w-full object-cover"
        />
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
        {excerpt}
      </motion.p>
      <motion.div
        variants={slideInRight}
        initial="initial"
        animate="animate"
        custom={4}
        className="pt-2"
      >
        <a href="#" className="btn-2">
          Know More
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
