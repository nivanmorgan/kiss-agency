import { useState } from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import clapping from '../assets/clapping.wav';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const { firstName, lastName, phoneNumber, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const playAudio = (audio) => {
    const music = new Audio(audio);
    music.playbackRate = 1;
    music.play();
  };

  const handleSubmit = () => {
    if (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.phoneNumber !== '' &&
      formData.message !== ''
    ) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setIsFormSubmitted(true);
        }, 6000);
        playAudio(clapping);

        setTimeout(() => {
          setShowFireworks(false);
        }, 6000);
      }, 2000);
    }
  };

  return (
    <div className="bg-[--neutral] w-full p-5 lg:p-7 space-y-5">
      <h2 className="text-xl lg:text-2xl">Form</h2>
      {!isFormSubmitted ? (
        <form action="" className="space-y-4 lg:space-y-5">
          <div className="form-grid">
            <input
              type="text"
              placeholder="First Name"
              className=""
              name="firstName"
              value={firstName}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="Last Name"
              className=""
              name="lastName"
              value={lastName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Email Address"
              className=""
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className=""
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-grid">
            <textarea
              name="message"
              id=""
              rows="5"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <div className="pt-4 pb-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              type="button"
              className="btn-1"
              onClick={handleSubmit}
            >
              Submit Now
            </motion.button>
          </div>
        </form>
      ) : (
        <div className="py-[25px] md:py-[50px]">
          <p>
            Thank you for <span>reaching out</span>, we'd get back to you{' '}
            <span>shortly</span>
          </p>
        </div>
      )}

      {showFireworks && (
        <div
          className="fixed top-0 left-0 h-screen w-full z-[1000]"
          style={{ pointerEvents: 'none' }}
        >
          <Fireworks autorun={{ speed: 2 }} />
        </div>
      )}
    </div>
  );
};

export default ContactForm;
