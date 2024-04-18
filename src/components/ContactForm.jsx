import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-[--neutral] w-full p-5 lg:p-7 space-y-5">
      <h2 className="text-xl lg:text-2xl">Form</h2>
      <form action="" className="space-y-4 lg:space-y-5">
        <div className="form-grid">
          <input type="text" placeholder="First Name" className="" />
          <input type="text" placeholder="Last Name" className="" />
        </div>
        <div className="form-grid">
          <input type="text" placeholder="Email Address" className="" />
          <input type="text" placeholder="Phone Number" className="" />
        </div>
        <div className="form-grid">
          <textarea name="message" id="" rows="10"></textarea>
        </div>
        <div className="pt-4 pb-2">
          <button type="button" className="btn-1">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
