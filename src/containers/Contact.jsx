import React from 'react';

import { Heading, ContactForm } from '../components';

const Contact = () => {
  return (
    <div id="subscribe" className="w-full relative mt-[50px] section-py h-full">
      <span className="hidden lg:block absolute top-0 left-0 h-full 0 w-[30vw] md:w-[20vw] bg-[--neutral]" />
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
        <div className="space-y-7 lg:space-y-10 flex items-center h-full">
          <Heading
            tag="Subscribe Us"
            header={['Dicover how we can', 'evolve your vision']}
            content="Enter your email to discover how our services can transform your ideas into reality"
          />
        </div>
        <div className="flex items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
