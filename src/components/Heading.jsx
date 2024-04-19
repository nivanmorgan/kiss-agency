import React from 'react';

import { motion } from 'framer-motion';
import { slideInRight, slideInBottom } from '../utils/variants';

const Heading = ({ tag, header, content, btn }) => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      className="flex flex-col gap-5"
    >
      <p>
        <span className="border border-[--black] text-[--black] px-5 py-2 font-bold">
          {tag}
        </span>
      </p>
      <h1>
        {header.map((word, i) => (
          <span
            key={i}
            className={`${i % 2 ? 'text-[--gray]' : 'text-[--black]'}`}
          >
            {word}{' '}
          </span>
        ))}
      </h1>
      <p>{content}</p>
      {btn && (
        <div className="pt-3 flex">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href={btn[1]}
            className="btn-1-v2"
          >
            {btn[0]}
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

export default Heading;
