import { useRef } from 'react';
import {
  Heading,
  ServicesSlide,
  ServiceList,
  DottedNavigation,
} from '../components';

const Services = () => {
  const container = useRef();
  return (
    <div
      ref={container}
      id="our-services"
      className="w-full relative mt-[50px] section-py"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-7 lg:space-y-10">
          <Heading
            tag="Our Services"
            header={['Tailored to', 'Your Business', 'Needs']}
            content="Our Mission is to drive the digital evolution by delivering unparalleled solutions in Design, Software & Web Development, Digital Marketing, & AI Engineering. We are dedicated to staying ahead of the curve, embracing challenges, and redefining industry standards. We are determined to be the strategic partner that propels businesses into the future"
            btn={['See All', '#']}
          />
        </div>
        <div>
          <ServicesSlide />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ServiceList container={container} />
        </div>
      </div>
      <DottedNavigation />
    </div>
  );
};

export default Services;
