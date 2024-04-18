import React from 'react';

import { Heading, Accordion } from '../components';
import { solutions } from '../utils/constants';

const DigitalSolutions = () => {
  return (
    <div className="w-full relative mt-[50px] section-py">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-7 lg:space-y-10">
          <Heading
            tag="Digital Solutions"
            header={[
              'From Machine Learning',
              'Algorithms to AI-powered',
              'Applications',
            ]}
            content="We Integrate Intelligence Into Your Digital Solutions, Fostering Efficiency And Innovation"
          />
        </div>
        <div>
          <Accordion />
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-5 p-2 border-2 border-[--gray]"
            >
              <div className="w-full md:w-[150px] min-w-[150px] h-[100px]">
                <img
                  src={solution.img}
                  alt={solution.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;
