import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaLocationDot,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { Logo, SocialButton } from "../components";
import { footerSectionText } from "../utils/constants";

const Footer = () => {
  const socialIcons = [
    <FaFacebookF size={18} />,
    <FaLinkedinIn size={18} />,
    <BiMessageRounded size={18} />,
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full relative bg-carbon-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />

      <div className="container space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <Logo h="h-8 lg:h-9 object-contain filter invert brightness-200" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {footerSectionText.text}
            </p>
            <div className="flex gap-3">
              {footerSectionText.socialMedia.map((sme, i) => (
                <SocialButton key={i} link={sme.link} icon={socialIcons[i]} />
              ))}
            </div>
          </div>

          {/* Quick links & Contact Cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Contact Col */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Contact</h4>
              <div className="space-y-3">
                {footerSectionText.contact.map((phoneNumber, id) => (
                  <p key={id}>
                    <a href={`tel:${phoneNumber}`} className="text-sm text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                      <FaPhone className="text-brand-indigo text-xs" />
                      {phoneNumber}
                    </a>
                  </p>
                ))}
                <p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bluebeans+Ankeny+IA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 hover:text-white flex items-start gap-2 transition-colors"
                  >
                    <FaLocationDot className="text-slate-400 text-sm mt-0.5" />
                    {footerSectionText.location}
                  </a>
                </p>
              </div>
            </div>

            {/* Email Col */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Inquiries</h4>
              <p>
                <a href={`mailto:${footerSectionText.mail}`} className="text-sm text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                  <FaEnvelope className="text-brand-indigo text-xs" />
                  {footerSectionText.mail}
                </a>
              </p>
            </div>

            {/* Policy Col */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Legal</h4>
              <a href="/privacy-policy" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-white/10 hover:border-brand-indigo/30 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all bg-white/5"
                >
                  Privacy Policy
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Kiss Agency. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Back to top <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
