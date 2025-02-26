import React from 'react';
import { Zap } from 'lucide-react';

function Logo() {
  return (
        <>
          
          {/* Main Logo */}
          <div className="w- relative flex items-center bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-6 rounded-2xl shadow-2xl">
            {/* Lightning Icon */}
            <Zap 
              className="w-12 h-12 text-yellow-400 animate-bounce mr-3 transform group-hover:scale-110 transition-transform duration-300" 
              strokeWidth={2.5}
            />
            
            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-200 via-yellow-200 to-red-200 text-transparent bg-clip-text tracking-tight">
                Blinkr
                <span className="text-yellow-400"> Loan</span>
              </h1>
            </div>
          </div>
        </>
  );
}

export default Logo;