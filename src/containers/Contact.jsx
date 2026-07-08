import React from 'react';
import { Heading, ContactForm } from '../components';
import { subscribeSectionText } from '../utils/constants';

const Contact = () => {
  return (
    <section id="contact" className="w-full relative py-20 lg:py-32 overflow-hidden bg-carbon-900/30">
      {/* Glow decorative behind */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-[112px] pointer-events-none -z-10" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Info Column */}
        <div className="space-y-6">
          <Heading
            tag={subscribeSectionText.tag}
            header={subscribeSectionText.heading}
            content={subscribeSectionText.text}
          />
          
          {/* Quick info points */}
          <div className="pt-6 space-y-4 border-t border-white/5 max-w-md">
            <div className="flex gap-4 items-start">
              <span className="text-brand-indigo text-lg font-bold">01</span>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Initial Consultation</h4>
                <p className="text-xs text-slate-400 mt-1">We discuss your digital goals and formulate a comprehensive strategy.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-brand-indigo text-lg font-bold">02</span>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Agile Action Plan</h4>
                <p className="text-xs text-slate-400 mt-1">Our in-house specialists design, develop, and market in continuous sprints.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
