import React from 'react';
import logo from '../assets/imgs/kiss-logo.gif';

const Logo = ({ h }) => {
	return (
		<a href="/#home" className="pointer-events-auto">
			<img src={logo} className={h ? h : 'h-[40px] lg:h-[50px] object-cover'} />
		</a>
	);
};

export default Logo;
