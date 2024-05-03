import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import {
	Heading,
	ServicesSlide,
	ServiceList,
	DottedNavigation,
} from '../components';

import { servicesSectionText, services } from '../utils/constants';

const Services = () => {
	const container = useRef();

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
		layoutEffect: false,
	});

	return (
		<div
			ref={container}
			// id="services"
			className="w-full relative mt-[50px] section-py"
		>
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-5">
				<div className="space-y-7 lg:space-y-10 xl:pr-10">
					<Heading
						tag={servicesSectionText.tag}
						header={servicesSectionText.heading}
						content={servicesSectionText.text}
						btn={['See All', '#']}
					/>
				</div>
				<div>
					<ServicesSlide services={services} />
				</div>
				<div className="col-span-1 lg:col-span-2">
					<ServiceList scrollYProgress={scrollYProgress} />
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</div>
	);
};

export default Services;
