import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-red-900 opacity-30"></div>
          <div className="absolute -inset-x-20 -bottom-40 h-80 bg-gradient-to-t from-red-900 to-transparent"></div>
          <div className={`absolute -left-10 top-10 w-40 h-40 rounded-full bg-yellow-400 blur-3xl opacity-20 transition-all duration-1000 ${animate ? 'translate-x-5' : '-translate-x-40'}`}></div>
          <div className={`absolute right-20 bottom-40 w-72 h-72 rounded-full bg-yellow-400 blur-3xl opacity-10 transition-all duration-1000 delay-300 ${animate ? '-translate-y-5' : 'translate-y-40'}`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className={`text-center transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-300">
              Speed is Our Superpower
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              We're not just another lending platform. We're revolutionizing how you access financial services through cutting-edge technology and AI.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { value: "500K+", label: "Active Users", icon: "👥" },
            { value: "₹1000Cr+", label: "Loans Disbursed", icon: "💰" },
            { value: "4.8/5", label: "User Rating", icon: "⭐" },
            { value: "5 min", label: "Average Approval Time", icon: "⚡" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-red-800 to-red-900 rounded-xl p-6 shadow-lg border border-red-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${animate ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
                  <p className="text-red-200">{stat.label}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Lightning Fast",
              description: "Get your loan approved in just 5 minutes with AI-powered processing.",
              icon: "⚡",
              delay: 0
            },
            {
              title: "Bank-Grade Security",
              description: "Your data is protected with end-to-end encryption and blockchain security.",
              icon: "🔒",
              delay: 150
            },
            {
              title: "Smart Analytics",
              description: "Our AI evaluates thousands of data points to provide the best loan offers.",
              icon: "📊",
              delay: 300
            },
            {
              title: "Community First",
              description: "Join millions who trust Speed Loan for fast and reliable financial services.",
              icon: "🤝",
              delay: 450
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br from-red-900 to-red-950 rounded-xl p-6 shadow-lg transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-red-600 opacity-20"></div>
              <div className="flex items-start gap-4">
                <div className="bg-red-700 rounded-full p-3 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
                  <p className="text-red-100">{feature.description}</p>
                </div>
              </div>
              <button className="mt-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-yellow-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className={`text-center mb-8 transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-block bg-red-800 rounded-full p-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">Our Mission</h2>
        </div>
        <div className={`max-w-4xl mx-auto bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 shadow-2xl border border-red-700 relative overflow-hidden transition-all duration-700 transform ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '750ms' }}>
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-yellow-500 blur-3xl opacity-10"></div>
          <p className="text-xl text-center relative z-10">
            To democratize access to financial services through innovative technology. We believe everyone deserves quick, fair, and transparent access to credit, powered by next-generation AI and blockchain technology.
          </p>
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full font-bold hover:from-yellow-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;