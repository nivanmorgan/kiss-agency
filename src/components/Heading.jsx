import React from "react";

const Heading = ({ tag, header, content, btn }) => {
	return (
		<div className="flex flex-col gap-5">
			<p>
				<span className="border border-[--black] text-[--black] px-5 py-2">
					{tag}
				</span>
			</p>
			<h1>
				{header.map((word, i) => (
					<span
						key={i}
						className={`${i % 2 ? "text-[--gray]" : "text-[--black]"}`}
					>
						{word}{" "}
					</span>
				))}
			</h1>
			<p>{content}</p>
			{btn && (
				<div className="pt-3">
					<a href={btn[1]} className="btn-1-v2">
						{btn[0]}
					</a>
				</div>
			)}
		</div>
	);
};

export default Heading;
