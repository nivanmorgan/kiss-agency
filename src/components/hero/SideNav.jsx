import React from 'react';

import { motion } from 'framer-motion';
import { useNavStore } from '../../utils/config';

import { navigation } from '../../utils/constants';

const NavLink = ({ text, link, contact }) => {
  const updateNavId = useNavStore((state) => state.updateNavId);
  const navigate = (link) => {
    window.scrollTo({ top: 0 });
    updateNavId(link);
  };

  return (
    <div className={`vertical-text`}>
      <a
        // href={link}
        onClick={() => (contact ? navigate('contact') : navigate(link))}
        className={`capitalize text-[13px] font-bold cursor-pointer ${
          contact && 'bg-[--black] text-[--white] py-4 px-2 block text-nowrap '
        }`}
      >
        {text}
      </a>
    </div>
  );
};

const SideNav = ({ y, animate }) => {
  return (
    <motion.div
      style={{ translateY: y && y }}
      transition={{ type: animate ? 'spring' : 'tween' }}
      className="absolute w-full h-full min-h-screen bg-[--neutral] overflow-y-scroll no-scrollbar pointer-events-auto"
    >
      <div className="flex flex-col-reverse items-center justify-center gap-4 py-[2rem] min-h-screen">
        {navigation.map((nav, i) => (
          <NavLink key={i} text={nav.text} link={nav.link} />
        ))}
        <NavLink contact text="contact us" link="contact" />
      </div>
    </motion.div>
  );
};

export default SideNav;
