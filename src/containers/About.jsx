import React from "react";

import { Heading, Platforms } from "../components";
import dashboard from "../assets/imgs/dashboard.jpeg";

const About = () => {
	return (
		<div className="w-full relative mt-[50px] section-py">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="space-y-7 lg:space-y-10 order-2 md:order-1">
					<Heading
						tag="About Us"
						header={["Crafting", "Tomorrow's Experience"]}
						content="Our Mission is to drive the digital evolution by delivering unparalleled solutions in Design, Software & Web Development, Digital Marketing, & AI Engineering. We are dedicated to staying ahead of the curve, embracing challenges, and redefining industry standards. We are determined to be the strategic partner that propels businesses into the future"
					/>
					<Platforms />
				</div>
				<div className="md:absolute top-0 right-0 md:w-[50vw] md:h-full flex items-center md:pl-[50px] lg:pl-[70px]">
					<div className="relative pl-[10px] lg:pl-[25px] pt-[25px] md:pt-[35px] lg:pt-[50px] pb-[15px] lg:pb-[25px] overflow-x-hidden">
						<div className="h-[240px] w-[110%] md:h-[65vh] md:max-h-[500px] max-h-[600px]">
							{/* Floaters */}
							<span className="absolute top-0 right-0 w-[35%] h-[50%] bg-[--gray]"></span>
							<span className="absolute bottom-0 left-0 w-[35%] h-[50%] bg-[--dark] rounded-bl-2xl md:rounded-bl-3xl"></span>

							<img
								src={dashboard}
								className="relative w-full h-full object-cover object-left rounded-l-2xl md:rounded-l-[1.65rem] xl:rounded-l-[1.8rem]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
