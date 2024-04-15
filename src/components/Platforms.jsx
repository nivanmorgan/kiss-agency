import React from "react";

import logo1 from "../assets/imgs/platform-1.svg";
import logo2 from "../assets/imgs/platform-2.svg";
import logo3 from "../assets/imgs/platform-3.svg";
import logo4 from "../assets/imgs/platform-4.svg";
import logo5 from "../assets/imgs/platform-5.svg";

const Platforms = () => {
	return (
		<div className="w-full flex">
			<div className="bg-[--neutral] w-auto px-4 py-5 lg:py-5 lg:px-8 space-y-2">
				<h3>Platforms</h3>
				<div className="overflow-x-auto no-scrollbar">
					<div className="flex gap-4">
						<img src={logo1} className="w-[45px] h-[45px] object-contain p-1" />
						<img src={logo2} className="w-[45px] h-[45px] object-contain" />
						<img src={logo3} className="w-[45px] h-[45px] object-contain" />
						<img src={logo4} className="w-[45px] h-[45px] object-contain" />
						<img src={logo5} className="w-[45px] h-[45px] object-contain" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Platforms;
