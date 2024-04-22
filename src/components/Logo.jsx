import React from 'react';
import logo from '../assets/imgs/kiss-agency-logo.png';

const Logo = () => {
  return (
    <a href="#home" className="pointer-events-auto">
      <img src={logo} className="h-[40px] lg:h-[50px] object-cover" />
    </a>
  );
};

export default Logo;
