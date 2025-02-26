import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const Navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-br from-red-700 via-red-600 to-yellow-500 min-h-screen p-8 text-white overflow-hidden">
      <div className={`max-w-6xl mx-auto ${animate ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
       
        {/* Hero Section */}
        <div className="text-center mb-16 mt-14">
          <h1 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
              Accelerating Financial Freedom
            </span>
            <div className="absolute -left-8 -right-8 h-1 bg-yellow-300 bottom-0 transform scale-x-0 animate-expand"></div>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're not just another financial platform. We're supercharging how you access financial services with 
            lightning-fast technology and next-gen AI.
          </p>
        </div>
        
        {/* Stats Row - Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: "600K+", label: "Active Users", delay: "100" },
            { value: "₹200Cr+", label: "Loans Disbursed", delay: "200" },
            { value: "4.9/5", label: "User Rating", delay: "300" },
            { value: "3 min", label: "Average Approval Time", delay: "400" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-yellow-500 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex flex-col items-center justify-center ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.value}</div>
              <div className="text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Feature Section - Side by side */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-600 blur-xl opacity-20 rounded-3xl"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-10 rounded-3xl border border-red-500">
            <div className={`space-y-8 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700`}>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-yellow-500 p-3 rounded-full transform hover:rotate-12 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Lightning Fast Approvals</h3>
                  <p>Get your loan approved in just 3 minutes with our speed-of-light AI processing system. No waiting, no delays.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-yellow-500 p-3 rounded-full transform hover:rotate-12 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Intelligent Analytics</h3>
                  <p>Our powerful AI processes thousands of data points at superhuman speed to find you the absolute best loan terms available.</p>
                </div>
              </div>
            </div>
            
            <div className={`space-y-8 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-300`}>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-yellow-500 p-3 rounded-full transform hover:rotate-12 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Quantum-Grade Security</h3>
                  <p>Your data is protected with cutting-edge encryption and blockchain security protocols that move faster than villains can track.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-yellow-500 p-3 rounded-full transform hover:rotate-12 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Speedforce Community</h3>
                  <p>Join millions who trust Flash Finance for rapid and reliable financial services. Be part of the fastest growing financial community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className={`bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-12 mb-16 text-center relative overflow-hidden border-2 border-yellow-500 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-1000 delay-500`}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">Our Mission</h2>
            
            <p className="text-xl max-w-4xl mx-auto">
              To democratize access to financial services through breakthrough technology. We believe everyone deserves fast, fair, and transparent access to credit, powered by our proprietary Speedforce AI and secure blockchain technology.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center pb-12 pt-8">
          <button onClick={() => Navigate("/start-kyc")} className="bg-yellow-500 text-red-900 font-bold py-4 px-10 rounded-full text-xl transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
            <span className="relative z-10">Join the Speed Force</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>
        
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;