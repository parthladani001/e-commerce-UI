import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-15 px-4 md:px-16 lg:px-24 font-sans">
      {/* Breadcrumb */}
      <nav className="mb-15  text-sm">
        <span className="text-gray-400">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-black font-medium">Contact</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-sm p-8 border border-gray-50">
          {/* Call To Us Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#DB4444] p-3 rounded-full text-white">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-lg text-black">Call To Us</h3>
            </div>
            <div className="space-y-3 text-sm text-black">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Write To Us Section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#DB4444] p-3 rounded-full text-white">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg text-black">Write To Us</h3>
            </div>
            <div className="space-y-3 text-sm text-black">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-sm p-8 border border-gray-50">
          <form className="space-y-6">
            {/* Top Row Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full bg-[#F5F5F5] p-4 rounded-sm focus:outline-none text-sm"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full bg-[#F5F5F5] p-4 rounded-sm focus:outline-none text-sm"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full bg-[#F5F5F5] p-4 rounded-sm focus:outline-none text-sm"
                required
              />
            </div>

            {/* Message Area */}
            <textarea
              placeholder="Your Massage"
              rows="8"
              className="w-full bg-[#F5F5F5] p-4 rounded-sm focus:outline-none text-sm resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#DB4444] hover:bg-[#c13b3b] text-white px-10 py-4 rounded-sm transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;