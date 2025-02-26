import React from 'react';

const FlashLoanApplication = () => {
  return (
    <div className="bg-red-900 min-h-screen p-4 font-sans">
      {/* Top section with flash character and loan details */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-lg p-4 mb-6 border border-yellow-600 shadow-lg">
        <div className="flex flex-wrap items-center">
          {/* Flash Character */}
          <div className="w-1/3 md:w-1/4">
            <div className="relative h-32 md:h-40">
              <img 
                src="/api/placeholder/150/200" 
                alt="Flash Character" 
                className="absolute h-full object-contain transform -translate-y-4 -translate-x-2"
              />
            </div>
          </div>
          
          {/* Loan Detail Cards */}
          <div className="w-2/3 md:w-3/4 flex flex-wrap justify-end gap-2">
            <div className="bg-gradient-to-b from-red-950 to-red-900 rounded-lg p-3 text-center w-28 border border-red-800">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-yellow-600 flex items-center justify-center">
                <span className="text-red-900 text-xs">₹</span>
              </div>
              <p className="text-yellow-500 font-bold">₹ 5555</p>
              <p className="text-yellow-200 text-xs">Monthly EMI (₹)</p>
            </div>
            
            <div className="bg-gradient-to-b from-red-950 to-red-900 rounded-lg p-3 text-center w-28 border border-red-800">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-yellow-600 flex items-center justify-center">
                <span className="text-red-900 text-xs">%</span>
              </div>
              <p className="text-yellow-500 font-bold">₹ 5555</p>
              <p className="text-yellow-200 text-xs">Total Interest Payable(₹)</p>
            </div>
            
            <div className="bg-gradient-to-b from-red-950 to-red-900 rounded-lg p-3 text-center w-28 border border-red-800">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-yellow-600 flex items-center justify-center">
                <span className="text-red-900 text-xs">₹</span>
              </div>
              <p className="text-yellow-500 font-bold">₹ 5555</p>
              <p className="text-yellow-200 text-xs">Total Loan Cost (₹)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle section with action buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-full md:w-5/12 bg-yellow-600 rounded-lg p-4 flex items-center shadow-lg border border-yellow-500">
          <div className="w-1/3">
            <img 
              src="/api/placeholder/100/100" 
              alt="Flash Ready" 
              className="h-24 object-contain"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-red-900 text-2xl font-bold">Lets Begin</h2>
          </div>
        </div>
        
        <div className="w-full md:w-5/12 bg-yellow-600 rounded-lg p-4 flex items-center shadow-lg border border-yellow-500">
          <div className="w-2/3">
            <h2 className="text-red-900 text-2xl font-bold">Instant Eligibility Check</h2>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="relative h-24 w-full">
              <div className="absolute right-0 top-0 h-full flex flex-col items-center justify-center">
                <div className="h-12 w-2 bg-black transform rotate-12 translate-x-2"></div>
                <div className="h-12 w-2 bg-black transform -rotate-12 translate-x-2 -translate-y-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* KYC section */}
      <div className="bg-yellow-600 rounded-lg p-4 mb-6 flex items-center justify-between shadow-lg border border-yellow-500">
        <div className="w-1/6">
          <img 
            src="/api/placeholder/50/100" 
            alt="Flash Running" 
            className="h-16 object-contain"
          />
        </div>
        
        <div className="w-4/6 flex justify-center space-x-1">
          <div className="flex flex-col items-center">
            <div className="bg-red-600 w-16 h-16 flex items-center justify-center border-2 border-yellow-400">
              <span className="text-yellow-400 text-3xl font-bold">K</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center border-2 border-yellow-400">
              <span className="text-red-800 text-3xl font-bold">Y</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 w-16 h-16 flex items-center justify-center border-2 border-yellow-400">
              <span className="text-red-800 text-3xl font-bold">C</span>
            </div>
          </div>
        </div>
        
        <div className="w-1/6 flex justify-end">
          <img 
            src="/api/placeholder/50/100" 
            alt="Flash Running" 
            className="h-16 object-contain"
          />
        </div>
      </div>
      
      {/* CIBIL section */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-lg p-4 flex items-center justify-between shadow-lg border border-yellow-600">
        <div className="w-2/3">
          <h2 className="text-yellow-500 text-xl font-bold">Upload Your CIBIL Report</h2>
          <h3 className="text-yellow-500 text-lg font-bold">& Get Eligibility?</h3>
          
          <button className="mt-4 bg-red-950 text-yellow-500 px-4 py-1 rounded-lg text-sm border border-yellow-500 hover:bg-red-800 transition-colors">
            Upload & Ask
          </button>
        </div>
        
        <div className="w-1/3 flex justify-end">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-xs">Max.</div>
                  <div className="text-white font-bold">250</div>
                </div>
              </div>
            </div>
            <img 
              src="/api/placeholder/100/150" 
              alt="Flash Character" 
              className="absolute -bottom-4 -right-4 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashLoanApplication;