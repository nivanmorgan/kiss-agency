import React from 'react';

const ResponseContainer = ({ question, answer }) => {
	return (
		<div className="bg-[--neutral] p-7 rounded-lg flex flex-col gap-2 max-w-[50vw]">
			<h3>{question}</h3>
			<p>{answer}</p>
		</div>
	);
};

export default ResponseContainer;
