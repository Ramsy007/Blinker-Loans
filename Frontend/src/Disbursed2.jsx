import React, { useEffect } from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

function Disbursed2() {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC700', '#8B0000']
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC700', '#8B0000']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#660000] to-[#330000] flex items-center justify-center p-4">
      <div className="relative">
        {/* Lightning effects */}
        <div className="absolute -left-20 -top-20 animate-pulse">
          <Zap size={64} className="text-[#FFC700]" />
        </div>
        <div className="absolute -right-20 -bottom-20 animate-pulse">
          <Zap size={64} className="text-[#FFC700]" />
        </div>
        
        {/* Main content card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-lg w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFC700] to-[#8B0000] animate-[shimmer_2s_infinite]"></div>
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800">
              Loan Disbursed Successfully!
            </h1>
            
            <div className="space-y-2">
              <p className="text-gray-600">
                Your loan has been successfully disbursed to:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-800">Bank Account: XXXX-XXXX-1234</p>
                <p className="text-gray-600">ACME National Bank</p>
              </div>
            </div>
            
            <button onClick={() => window.location.href = '/dashboard'}
              className="bg-gradient-to-r from-[#8B0000] to-[#660000] text-white px-8 py-3 rounded-full font-semibold hover:from-[#660000] hover:to-[#330000] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disbursed2;