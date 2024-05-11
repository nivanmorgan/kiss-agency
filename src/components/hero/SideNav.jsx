import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useNavStore } from '../../utils/config';
import { FaPhoneFlip } from 'react-icons/fa6';
import { footerSectionText } from '../../utils/constants';

import {
	useAboutWidthStore,
	useContainerWidthStore,
	useValuesWidthStore,
} from '../../utils/config';
import { navigation } from '../../utils/constants';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const NavLink = ({ text, link, contact, scrollPoint }) => {
	return (
		<div className={`vertical-text`}>
			{scrollPoint ? (
				<a
					onClick={() => window.scrollTo(scrollPoint)}
					className={`capitalize text-[13px] font-bold cursor-pointer flex items-center justify-center gap-2 ${
						contact &&
						'bg-[--black] text-[--white] py-4 px-2 block text-nowrap '
					}`}
				>
					{contact && <FaPhoneFlip className="rotate-180" />} {text}
				</a>
			) : (
				<a
					href={contact ? link : '#' + link}
					className={`capitalize text-[13px] font-bold cursor-pointer flex items-center justify-center gap-2 ${
						contact &&
						'bg-[--black] text-[--white] py-4 px-2 block text-nowrap '
					}`}
				>
					{contact && <FaPhoneFlip className="rotate-180" />} {text}
				</a>
			)}
		</div>
	);
};

const SideNav = ({ y, animate }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const containerWidth = useContainerWidthStore((state) => state.width);
	const aboutWidth = useAboutWidthStore((state) => state.width);
	const valuesWidth = useValuesWidthStore((state) => state.width);

	// NAVIGATION SCROLL
	const heroScrollSize = screenSize.height * 4;
	const wrapperScrollSize = screenSize.height * 6;

	const contactPoint = heroScrollSize + wrapperScrollSize - screenSize.height;
	const aboutPoint = heroScrollSize;
	const valuesPoint =
		18 +
		heroScrollSize +
		(screenSize.width / containerWidth) * wrapperScrollSize;
	const solutionsPoint =
		-18 +
		contactPoint -
		(screenSize.width / containerWidth) * wrapperScrollSize;
	const servicesPoint =
		-9 +
		solutionsPoint -
		(screenSize.width / containerWidth) * wrapperScrollSize;

	const scrollPoints = [
		{ top: 0, behavior: 'smooth' },
		{ top: aboutPoint, behavior: 'smooth' },
		{ top: valuesPoint, behavior: 'smooth' },
		{ top: servicesPoint, behavior: 'smooth' },
		{ top: solutionsPoint, behavior: 'smooth' },
		{ top: contactPoint, behavior: 'smooth' },
	];

	return (
		<motion.div
			style={{ translateY: y && y }}
			transition={{ type: animate ? 'spring' : 'tween' }}
			className="absolute w-full h-full min-h-screen bg-[--neutral] overflow-y-scroll no-scrollbar pointer-events-auto"
		>
			<div className="flex flex-col-reverse items-center justify-center gap-4 py-[2rem] min-h-screen">
				{navigation.map((nav, i) =>
					screenSize.width >= 1280 ? (
						<NavLink key={i} text={nav.text} scrollPoint={scrollPoints[i]} />
					) : (
						<NavLink key={i} text={nav.text} link={nav.link} />
					)
				)}
				<NavLink
					contact
					text="Call us"
					link={`tel:${footerSectionText.contact[0]}`}
				/>
				{/* {screenSize.width >= 1280 ? (
					<NavLink
						contact
						text="Call us"
						scrollPoint={scrollPoints[scrollPoints.length - 1]}
					/>
				) : (
					<NavLink contact text="contact us" link="contact" />
				)} */}
			</div>
		</motion.div>
	);
};

export default SideNav;
