import './App.css';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import { useNavStore } from './utils/config';

import {
	Hero,
	About,
	OurValues,
	Services,
	DigitalSolutions,
	Contact,
	DesktopWrapper,
} from './containers';
import {
	Navbar,
	Footer,
	SmoothScroll,
	SideNav,
	FixedNavbar,
	Overlay,
} from './components';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

function App() {
	// !NAVIGATION
	const navId = useNavStore((state) => state.navId);
	const [sectionInView, setSectionInView] = useState('home');

	const about = useRef();
	const values = useRef();
	const services = useRef();
	const digitalSolutions = useRef();
	const contact = useRef();

	const aboutIsInView = useInView(about, { margin: '-40% 50% 50% -50%' });
	const valuesIsInView = useInView(values, { margin: '-40% 50% 50% -50%' });
	const servicesIsInView = useInView(services, { margin: '-40% 50% 50% -50%' });
	const digitalSolutionsIsInView = useInView(digitalSolutions, {
		margin: '-40% 50% 50% -50%',
	});
	const contactIsInView = useInView(contact, { margin: '-40% 50% 50% -50%' });

	useEffect(() => {
		const navs = [
			'home',
			'about',
			'values',
			'services',
			'digital-solutions',
			'contact',
		];
		if (aboutIsInView) {
			setSectionInView(navs[1]);
		} else if (valuesIsInView) {
			setSectionInView(navs[2]);
		} else if (servicesIsInView) {
			setSectionInView(navs[3]);
		} else if (digitalSolutionsIsInView) {
			setSectionInView(navs[4]);
		} else if (contactIsInView) {
			setSectionInView(navs[5]);
		} else {
			setSectionInView(navs[0]);
		}

		// console.log(sectionInView);
	}, [
		sectionInView,
		aboutIsInView,
		valuesIsInView,
		servicesIsInView,
		digitalSolutionsIsInView,
		contactIsInView,
	]);

	// *OVERLAY CONSTANTS
	const [cubeOverlay, setCubeOverlay] = useState(true);

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// *STICKY SIDEBAR
	const [sticky, setSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (screenSize.width >= 768) {
				if (
					scrollTop >= screenSize.height * 1 &&
					scrollTop <= screenSize.height * 2
				) {
					setSticky(true);
				} else {
					setSticky(false);
				}
			} else {
				if (
					scrollTop >= screenSize.width * 1.33 &&
					scrollTop <= screenSize.height * 2
				) {
					setSticky(true);
				} else {
					setSticky(false);
				}
			}

			if (scrollTop >= screenSize.height) {
				setCubeOverlay(false);
			} else {
				setCubeOverlay(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<SmoothScroll>
				{/* <div className="w-full h-[100vh]" /> */}
				<Hero />
				<DesktopWrapper />
				<div className="overflow-hidden relative">
					<div className="overflow-hidden relative xl:hidden">
						<div ref={about} id="about">
							<About />
						</div>
						<div ref={values} id="values">
							<OurValues />
						</div>
						<div ref={services} id="services">
							<Services />
						</div>
						<div ref={digitalSolutions} id="digital-solutions">
							<DigitalSolutions />
						</div>
						<div ref={contact} id="contact">
							<Contact />
							<Footer />
						</div>
					</div>
					{/* Footer and Navbar */}
					{navId === 'home' && (
						<AnimatePresence>
							{sticky && (
								<motion.div
									initial={{ x: -10, opacity: 0 }}
									whileInView={{ x: [-10, 0], opacity: [0.5, 1] }}
									exit={{ x: -10, opacity: 0 }}
									className="fixed  top-0 left-0 w-[60px] lg:w-[60px] bg-[--neutral] min-h-screen"
								>
									<SideNav animate />
								</motion.div>
							)}
						</AnimatePresence>
					)}
					<Navbar sectionInView={sectionInView} />
					{/* {navId === 'home' ? (
            <Navbar />
          ) : navId === 'about' ? (
            <Navbar />
          ) : (
            <FixedNavbar />
          )} */}
					{/* <Navbar /> */}
				</div>

				{/* <AnimatePresence>
					{cubeOverlay && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ type: 'tween', duration: 1 }}
							className="w-full h-[100vh] fixed top-0 left-0  pointer-events-none"
						>
							<Overlay />
						</motion.div>
					)}
				</AnimatePresence> */}
			</SmoothScroll>
		</>
	);
}

export default App;
