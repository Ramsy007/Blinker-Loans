import React from "react";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#600606] to-[#c60c0c] text-yellow-400 flex justify-center items-center p-3 sm:p-6 overflow-hidden">
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-center lg:text-left items-center">
        {/* About Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-2 tracking-wide">About Us</h3>
          <ul className="text-white space-y-1 text-lg tracking-wide">
            <li>Loan Products</li>
            <li>Interest Rates</li>
            <li>FAQs</li>
            <li>Loan Calculator</li>
          </ul>
        </div>

        {/* Loan Processor Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-2 tracking-wide">Loan Processor</h3>
          <ul className="text-white space-y-1 text-lg tracking-wide">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Responsible Lending Policy</li>
            <li>Contact Support</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-2 tracking-wide">Contact Us</h3>
          <p className="text-white text-lg tracking-wide">Email: blinkrloan@gmail.com</p>
          <p className="text-white text-lg tracking-wide">Phone: +91 XXXXXXXXXX</p>
          <p className="font-bold text-lg mt-2 tracking-wide">Social Media</p>
          <div className="flex justify-center lg:justify-start space-x-2 mt-1 text-yellow-400 text-3xl">
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* Flash Footer Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/flash-footer2.png"
            alt="Flash Footer"
            className="w-28 md:w-40 lg:w-52 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
