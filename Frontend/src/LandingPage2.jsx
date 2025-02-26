import React from 'react';
import { Zap, Clock, Shield, DollarSign, ChevronRight, Award, Users, Sparkles } from 'lucide-react';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800">
      {/* Hero Section */}
      <nav className="bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold text-white">Blinkr</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-2 rounded-full 
            hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-yellow-500/25">
            Apply Now
          </button>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Get Your Loan
              <span className="block text-yellow-400">In a Flash ⚡</span>
            </h1>
            <p className="text-red-100 text-xl">
              Experience lightning-fast loan approvals with Blinkr. 
              Your financial solutions delivered at superhero speed.
            </p>
            <div className="flex space-x-4">
              <button className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full 
                hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-red-500/50 flex items-center space-x-2">
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 
                transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80" 
              alt="Fast Loans" 
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Blinkr?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8 text-yellow-400" />,
              title: "Lightning Fast",
              description: "Get approved in minutes, not days"
            },
            {
              icon: <Shield className="w-8 h-8 text-yellow-400" />,
              title: "Secure Process",
              description: "Bank-level security for your peace of mind"
            },
            {
              icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
              title: "Competitive Rates",
              description: "Best-in-class interest rates for all loans"
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-gradient-to-br from-red-800 to-red-900/50 p-8 rounded-2xl
              hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10
              backdrop-blur-sm">
              <div className="bg-red-950/50 p-3 rounded-lg w-fit mb-4 group-hover:bg-red-900/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-red-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-red-950 to-black py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "Happy Customers" },
              { icon: <Sparkles className="w-8 h-8" />, value: "99%", label: "Approval Rate" },
              { icon: <Award className="w-8 h-8" />, value: "4.9/5", label: "Customer Rating" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-center text-yellow-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920&q=80')] 
            opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-red-100 text-xl max-w-2xl mx-auto">
              Join thousands of satisfied customers who've experienced the fastest loan service in the industry.
            </p>
            <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-full text-lg font-semibold
              hover:bg-yellow-300 transition-colors duration-300 hover:scale-105 transform">
              Apply Now and Get Instant Approval
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer/>
    </div>
  );
}

export default App;