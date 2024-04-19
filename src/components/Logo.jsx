import React from 'react';
import logo from '../assets/imgs/kiss-agency-logo.svg';

const Logo = () => {
  return (
    <a href="#">
      <img src={logo} className="h-[40px] lg:h-[50px] object-cover" />
    </a>
  );
};

export default Logo;
