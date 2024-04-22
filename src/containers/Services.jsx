import { useRef } from 'react';
import { Heading, ServicesSlide, ServiceList } from '../components';

const Services = () => {
  const container = useRef();
  return (
    <div
      ref={container}
      id="our-services"
      className="flex-container !min-w-[1240px"
    >
      <div className="flex flex-col justify-center gap-0 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-7 lg:space-y-10">
            <Heading
              tag="Our Services"
              header={['Tailored to', 'Your Business', 'Needs']}
              content="Our Mission is to drive the digital evolution by delivering unparalleled solutions in Design, Software & Web Development, Digital Marketing, & AI Engineering. We are dedicated to staying ahead of the curve, embracing challenges, and redefining industry standards. We are determined to be the strategic partner that propels businesses into the future"
              btn={['See All', '#digital-solutions']}
            />
          </div>
          <div>
            <ServicesSlide />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ServiceList container={container} />
        </div>
      </div>
    </div>
  );
};

export default Services;
