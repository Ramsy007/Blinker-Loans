import React, { useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 min-w-40 group"
    >
      {loading ? (
        <div className="flex items-center justify-center h-8">
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
          <div className="quantum-loader">
            <div className="quantum-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="quantum-particle"></div>
              ))}
            </div>
            <div className="quantum-ring-container">
              <div className="quantum-ring"></div>
              <div className="quantum-ring"></div>
              <div className="quantum-ring"></div>
            </div>
            <div className="quantum-core"></div>
          </div>
          <style jsx>{`
            .quantum-loader {
              position: relative;
              width: 32px;
              height: 32px;
              perspective: 100px;
            }
            
            .quantum-particles {
              position: absolute;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              animation: particleOrbit 3s infinite linear;
            }
            
            .quantum-particle {
              position: absolute;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: cyan;
              box-shadow: 0 0 6px 2px rgba(0, 255, 255, 0.8);
              animation: particlePulse 2s infinite ease-in-out;
            }
            
            .quantum-particle:nth-child(1) { 
              transform: rotateY(0deg) translateZ(16px); 
              animation-delay: 0s;
            }
            .quantum-particle:nth-child(2) { 
              transform: rotateY(60deg) translateZ(16px); 
              animation-delay: -0.3s;
            }
            .quantum-particle:nth-child(3) { 
              transform: rotateY(120deg) translateZ(16px); 
              animation-delay: -0.6s;
            }
            .quantum-particle:nth-child(4) { 
              transform: rotateY(180deg) translateZ(16px); 
              animation-delay: -0.9s;
            }
            .quantum-particle:nth-child(5) { 
              transform: rotateY(240deg) translateZ(16px); 
              animation-delay: -1.2s;
            }
            .quantum-particle:nth-child(6) { 
              transform: rotateY(300deg) translateZ(16px); 
              animation-delay: -1.5s;
            }
            
            .quantum-ring-container {
              position: absolute;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
            }
            
            .quantum-ring {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 30px;
              height: 30px;
              border: 1px solid rgba(255, 255, 255, 0.5);
              border-radius: 50%;
              transform: translate(-50%, -50%);
              animation: ringPulse 3s infinite ease-in-out;
            }
            
            .quantum-ring:nth-child(1) {
              border-color: rgba(130, 255, 255, 0.8);
              animation-delay: 0s;
            }
            
            .quantum-ring:nth-child(2) {
              border-color: rgba(170, 111, 255, 0.8);
              animation-delay: -1s;
            }
            
            .quantum-ring:nth-child(3) {
              border-color: rgba(255, 51, 204, 0.8);
              animation-delay: -2s;
            }
            
            .quantum-core {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 8px;
              height: 8px;
              background: white;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0.8);
              animation: corePulse 2s infinite alternate;
            }
            
            @keyframes particleOrbit {
              0% { transform: rotateY(0deg) rotateX(65deg); }
              100% { transform: rotateY(360deg) rotateX(65deg); }
            }
            
            @keyframes particlePulse {
              0%, 100% { opacity: 0.6; width: 3px; height: 3px; }
              50% { opacity: 1; width: 5px; height: 5px; }
            }
            
            @keyframes ringPulse {
              0%, 100% { transform: translate(-50%, -50%) scale(0.8) rotate(0deg); opacity: 0.3; }
              50% { transform: translate(-50%, -50%) scale(1.2) rotate(180deg); opacity: 0.8; }
            }
            
            @keyframes corePulse {
              0% { transform: translate(-50%, -50%) scale(0.8); box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5); }
              100% { transform: translate(-50%, -50%) scale(1.2); box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.9); }
            }
          `}</style>
        </div>
      ) : (
        <span className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="mr-2 text-cyan-300">⟁</span>
          INITIALIZE
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-cyan-300">⟁</span>
        </span>
      )}
      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md"></div>
      </div>
    </button>
  );
};

export default Loader;