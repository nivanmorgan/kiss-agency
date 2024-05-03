import React from 'react';
import { motion } from 'framer-motion';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { Logo, DottedNavigation, SocialButton } from '../components';

import { slideInRight, slideInBottom } from '../utils/variants';
import { footerSectionText } from '../utils/constants';

const Footer = () => {
	const socialIcons = [
		<FaFacebookF className="text-xl" />,
		<FaInstagram className="text-2xl" />,
		<BiMessageRounded className="text-2xl" />,
	];
	return (
		<motion.div
			variants={slideInBottom}
			initial="initial"
			whileInView="animate"
			custom={0}
			className="py-[25px] md:py-[50px] xl:py-10 bg-[--white] xl:!min-h-[175px] xl:max-h-[175px]  xl:h-full"
		>
			<div className="container grid grid-cols-1 lg:grid-cols-5 gap-[25px] lg:gap-[50px]">
				<div className="lg:col-span-2 footer-header-space">
					{/* <img
            src={logo}
            alt="logo"
            className="w-auto h-[45px] lg:h-[50px] object-contain"
          /> */}
					<Logo />
					<p>{footerSectionText.text}</p>
				</div>
				<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 footer-header-space gap-[25px]">
					<div className="mt-[8px]">
						<h2>Call</h2>
						<p>
							{footerSectionText.contact.map((phoneNumber, id) => (
								<a href={`tel:${phoneNumber}`} key={id}>
									{phoneNumber}
								</a>
							))}
						</p>
					</div>
					<div>
						<h2>Mail</h2>
						<p>
							<a href={`mailto:${footerSectionText.mail}`}>
								{footerSectionText.mail}
							</a>
						</p>
					</div>
					<div>
						<h2>Socials</h2>
						<p className="flex gap-2 pt-1">
							{footerSectionText.socialMedia.map((sme, i) => (
								<SocialButton key={i} link={sme.link} icon={socialIcons[i]} />
							))}
						</p>
					</div>
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</motion.div>
	);
};

export default Footer;
