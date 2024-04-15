import React from "react";

const tags = [
	"Artificial Intelligence",
	"Integrations",
	"Saas",
	"Cloud Services",
	"Designers",
	"Marketing",
];

const Tags = () => {
	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag, i) => (
				<div
					key={i}
					className="text-[--gray] bg-[--neutral] rounded-[2rem] px-3 py-2 text-[0.8rem] lg:text-sm font-bold"
				>
					{tag}
				</div>
			))}
		</div>
	);
};

export default Tags;
