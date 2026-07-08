import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Heading, Accordion } from '../components';
import { digitalSolutionsSectionText, solutions } from '../utils/constants';
import { slideInBottom } from '../utils/variants';

const DigitalSolutions = () => {
	return (
		<section
			id="digital-solutions"
			className="w-full relative py-20 lg:py-32 overflow-hidden bg-white"
		>
			<div className="container space-y-16">
				{/* Top section: Heading on left, Accordion on right */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					<div className="lg:col-span-6 space-y-8">
						<Heading
							tag={digitalSolutionsSectionText.tag}
							header={digitalSolutionsSectionText.heading}
							content={digitalSolutionsSectionText.text}
							light={true}
						/>
					</div>
					<div className="lg:col-span-6 w-full">
						<Accordion />
					</div>
				</div>

				{/* Bottom section: Two horizontal cards with illustrations */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
					{solutions.map((solution, i) => (
						<motion.div
							variants={slideInBottom}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true, margin: '-50px' }}
							custom={i * 0.1}
							key={i}
							className="flex flex-col md:flex-row items-center gap-6 p-6 panel-light border-black/5 rounded-3xl hover:border-slate-300 transition-all bg-white/80"
						>
							{/* Lottie Graphic Wrapper */}
							<div className="w-full md:w-[160px] h-[125px] flex-shrink-0 bg-slate-50 border border-black/5 rounded-2xl flex items-center justify-center p-2">
								<Lottie
									animationData={solution.img}
									style={{
										width: '100%',
										height: '100%',
									}}
								/>
							</div>
							
							{/* Description Text */}
							<div className="flex-1">
								<p className="text-sm text-slate-600 leading-relaxed font-semibold">
									{solution.text}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DigitalSolutions;
