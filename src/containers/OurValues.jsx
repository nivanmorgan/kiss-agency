import { motion } from 'framer-motion';
import { Heading, Tags, Blog } from '../components';
import { ourValuesSectionText, values } from '../utils/constants';

const OurValues = () => {
	return (
		<section
			id="values"
			className="w-full relative py-20 lg:py-32 overflow-hidden bg-white"
		>
			<div className="container space-y-16">
				{/* Top Section: Header & Keywords */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
					<div className="lg:col-span-8 space-y-6">
						<Heading
							tag={ourValuesSectionText.tag}
							header={ourValuesSectionText.heading}
							content={ourValuesSectionText.text}
							light={true}
						/>
					</div>
					<div className="lg:col-span-4 flex lg:justify-end">
						<Tags tags={ourValuesSectionText.keywords} />
					</div>
				</div>

				{/* Values Cards Grid */}
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, margin: '-50px' }}
					transition={{ staggerChildren: 0.1 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
				>
					{values.map((value, i) => (
						<Blog
							key={i}
							title={value.title}
							excerpt={value.excerpt}
							lottie={value.lottie}
							i={i}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default OurValues;
