import React from "react";

import { Heading, Tags, Blog } from "../components";
import { values } from "../utils/constants";

const OurValues = () => {
	return (
		<div className="w-full relative mt-[50px] section-py">
			<div className="container grid grid-cols-1 xl:grid-cols-5 gap-y-10 xl:gap-[50px]">
				<div className="space-y-7 lg:space-y-10 w-full md:w-[85%] xl:w-full col-span-2 flex flex-col justify-center">
					<Heading
						tag="Our Values"
						header={["Why", "Choose Us"]}
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
					/>
					<Tags />
				</div>
				<div className="grid col-span-3 grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
					{values.map((value, i) => (
						<Blog
							key={i}
							title={value.title}
							excerpt={value.excerpt}
							link={value.link}
							img={value.img}
							type={value.type}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurValues;
