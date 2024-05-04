import { useRef, useState, useEffect } from 'react';

import { motion, useAnimate, stagger } from 'framer-motion';

import { Heading, Tags, Blog, DottedNavigation } from '../components';
import { ourValuesSectionText, values } from '../utils/constants';

import useMeasure from 'react-use-measure';
import { useValuesWidthStore } from '../utils/config';

const OurValues = () => {
	let [container, { width }] = useMeasure();
	const updateSectionWidth = useValuesWidthStore((state) => state.updateWidth);
	const [containerWidth, setContainerWidth] = useState(width);

	useEffect(() => {
		setContainerWidth(width);
		return updateSectionWidth(containerWidth);
	}, [containerWidth, width]);

	return (
		<div
			ref={container}
			// id="values"
			className="w-full relative mt-[50px] section-py"
		>
			<div className="container grid grid-cols-1 xl:grid-cols- gap-y-10 xl:gap-[50px] xl:flex xl:!max-w-full xl:pl-[8rem]">
				<div className="space-y-7 lg:space-y-10 w-full md:w-[85%] xl:w-full col-span-2 flex flex-col justify-center xl:min-w-[500px] xl:max-w-[500px]">
					<Heading
						tag={ourValuesSectionText.tag}
						header={ourValuesSectionText.heading}
						content={ourValuesSectionText.text}
					/>
					<Tags tags={ourValuesSectionText.keywords} />
				</div>
				<div className="grid col-span-3 grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 xl:grid-cols-4 xl:min-w-[1240px]">
					{values.map((value, i) => (
						<Blog
							key={i}
							title={value.title}
							excerpt={value.excerpt}
							link={value.link}
							img={value.img}
							type={value.type}
							lottie={value.lottie}
							clip={value.clip}
							i={i}
						/>
					))}
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</div>
	);
};

export default OurValues;
