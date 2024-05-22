import React from 'react';
import { motion } from 'framer-motion';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import {
	FaFacebookF,
	FaInstagram,
	FaPhone,
	FaLocationDot,
	FaEnvelope,
} from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { Logo, DottedNavigation, SocialButton } from '../components';

import {
	slideInRight,
	slideInBottom2,
	fallDownVariant,
} from '../utils/variants';
import { footerSectionText } from '../utils/constants';

const Footer = () => {
	const socialIcons = [
		<FaFacebookF className="text-xl" />,
		<FaInstagram className="text-2xl" />,
		<BiMessageRounded className="text-2xl" />,
	];
	return (
		<motion.div
			// variants={slideInBottom2}
			initial="initial"
			whileInView="animate"
			className="py-[25px] md:py-[50px] xl:py-10 bg-[--white] xl:!min-h-[175px] xl:max-h-[175px]  xl:h-full"
		>
			<div className="container grid grid-cols-1 lg:grid-cols-5 gap-[25px] lg:gap-[50px]">
				<motion.div
					variants={slideInBottom2}
					initial="initial"
					whileInView="animate"
					className="lg:col-span-2 footer-header-space"
				>
					<Logo />
					<p>{footerSectionText.text}</p>
				</motion.div>
				<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 footer-header-space gap-[25px]">
					<motion.div
						variants={slideInBottom2}
						initial="initial"
						whileInView="animate"
						className="mt-[8px]"
					>
						<h2>Contact</h2>
						<div className="!space-y-1 gap-0">
							<p>
								{footerSectionText.contact.map((phoneNumber, id) => (
									<a href={`tel:${phoneNumber}`} key={id}>
										<FaPhone className="inline mr-1 w-5 text-sm" />
										{phoneNumber}
									</a>
								))}
							</p>
							<p>
								<a
									href="https://www.google.com/maps/place/Des+Moines,+IA,+USA/@41.5667265,-93.7713268,11z/data=!3m1!4b1!4m6!3m5!1s0x87ee99a4c1611ee7:0x710028512691e4b2!8m2!3d41.5868417!4d-93.6249522!16zL20vMDJqM3c?entry=ttu"
									target="_blank"
								>
									<FaLocationDot className="inline text-sm w-5" />{' '}
									{footerSectionText.location}
								</a>
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={slideInBottom2}
						initial="initial"
						whileInView="animate"
					>
						<h2>Mail</h2>
						<p>
							<a href={`mailto:${footerSectionText.mail}`}>
								<FaEnvelope className="inline text-sm mr-1 w-5" />
								{footerSectionText.mail}
							</a>
						</p>
					</motion.div>
					<motion.div
						variants={slideInBottom2}
						initial="initial"
						whileInView="animate"
					>
						<h2>Socials</h2>
						<p className="flex gap-2 pt-1">
							{footerSectionText.socialMedia.map((sme, i) => (
								<SocialButton key={i} link={sme.link} icon={socialIcons[i]} />
							))}
						</p>
					</motion.div>
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</motion.div>
	);
};

export default Footer;
