import React from "react";

import { serviceList } from "../utils/constants";

const ServiceList = () => {
	return (
		<div className="w-full overflow-x-auto no-scrollbar">
			<div className="flex gap-4">
				{serviceList.map((item, i) => (
					<div
						className={`min-w-[170px] flex flex-col gap-4 items-center  justify-center text-center px-8 py-5 border-2 relative ${
							i % 2 ? "border-[--black]" : "border-[--gray]"
						}`}
					>
						<span className="absolute top-0 right-0 bg-[--neutral] w-[15px] h-full"></span>
						<img
							src={item.icon}
							alt={item.text}
							className="w-[40px] h-[40px] object-contain"
						/>
						<p className="font-bold">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceList;
