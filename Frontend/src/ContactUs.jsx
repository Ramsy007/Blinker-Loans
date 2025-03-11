import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'General Inquiry'
        });
      }, 3000);
    }, 1500);
  };
  
  const locations = [
    {
      city: "Mumbai",
      address: "Lightning Tower, Floor 26, Financial District, Mumbai 400001",
      phone: "+91 22 4789 0000",
      email: "mumbai@blinkrloan.com"
    },
    {
      city: "Delhi",
      address: "Speedforce Plaza, Connaught Place, New Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "gurgaon@blinkrloan.com"
    },
    {
      city: "Gurgaon",
      address: "Flash Tech Park, Whitefield, Bangalore 560066",
      phone: "+91 80 4123 5678",
      email: "bangalore@blinkrloan.com"
    }
  ];
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-950">
      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/api/placeholder/1200/800')] opacity-10 bg-no-repeat bg-right-top"></div>
        <div className="absolute -left-20 top-40 w-96 h-96 rounded-full bg-yellow-400 blur-3xl opacity-10"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-red-500 blur-3xl opacity-15"></div>
        <div className={`absolute top-20 right-20 w-40 h-1 bg-yellow-400 transform rotate-45 transition-all duration-700 ${animate ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-40 w-20 h-1 bg-yellow-400 transform rotate-45 transition-all duration-700 delay-300 ${animate ? 'opacity-70' : 'opacity-0'}`}></div>
      </div>
      
      
      {/* Content Container */}
      <div className="mt-5 container mx-auto px-4 py-10 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-300">
            Contact Blinkr Loan
          </h1>
          <p className="mt-3 text-xl text-red-100 max-w-2xl mx-auto">
            Need lightning-fast assistance? Our team is ready to respond at super speed. Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={`transition-all duration-700 transform ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 shadow-2xl border border-red-700 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-yellow-500 blur-2xl opacity-20"></div>
              
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-red-100 text-center">Thank you for reaching out. We'll get back to you at flash speed!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-red-100 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-red-950 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-red-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-red-100 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-red-950 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-red-100"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-red-100 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-red-950 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-red-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-red-100 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-red-950 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-red-100"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Loan Application">Loan Application</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-red-100 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 bg-red-950 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-red-100"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cursor-pointer w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-75' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className={`transition-all duration-700 transform ${animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 shadow-2xl border border-red-700 mb-8 relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-yellow-500 blur-2xl opacity-20"></div>
              
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Quick Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-700 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Call Us</h3>
                    <p className="text-red-100">Toll Free: 1800-BLINKR (1800-254-6537)</p>
                    <p className="text-red-100">Support: +91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-700 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Email Us</h3>
                    <p className="text-red-100">info@blinkerloan.com</p>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 shadow-2xl border border-red-700 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-yellow-500 blur-2xl opacity-20"></div>
              
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Connect With Us</h2>
              
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <a href="#" className="flex flex-col items-center p-4 bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-yellow-400 font-bold">f</span>
                  </div>
                  <span className="text-red-100">Facebook</span>
                </a>
                
                <a href="#" className="flex flex-col items-center p-4 bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-yellow-400 font-bold">in</span>
                  </div>
                  <span className="text-red-100">LinkedIn</span>
                </a>
                
                <a href="#" className="flex flex-col items-center p-4 bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-yellow-400 font-bold">𝕏</span>
                  </div>
                  <span className="text-red-100">Twitter</span>
                </a>
                
                <a href="#" className="flex flex-col items-center p-4 bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mb-2">
                    <span className="text-yellow-400 font-bold">IG</span>
                  </div>
                  <span className="text-red-100">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        
       
        
        {/* FAQ Section */}
        <div className={`mt-16 mb-8 transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-400">Frequently Asked Questions</h2>
            <p className="text-lg text-red-100 mt-2">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "How quickly can I get a loan approved?", a: "With our Flash Approval system, most loans are approved within 5 minutes and funds are disbursed within 24 hours." },
              { q: "What documents do I need to apply?", a: "You'll need your ID proof, address proof, income proof, and bank statements for the last 3 months." },
              { q: "What are the interest rates?", a: "Our interest rates start from 9.99% and vary based on your credit score and loan amount." },
              { q: "Is there a prepayment penalty?", a: "No, Blinker Loan allows you to prepay your loan without any additional charges or penalties." }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-red-800 to-red-900 rounded-xl p-6 border border-red-700">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{faq.q}</h3>
                <p className="text-red-100">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium">
              <span>View all FAQs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;