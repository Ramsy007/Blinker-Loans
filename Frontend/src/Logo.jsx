import React from "react";
import { Zap } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-3">
      {/* Lightning Icon */}
      <Zap
        className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 animate-bounce transform group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2.5}
      />

      {/* Text */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-200 via-yellow-200 to-red-200 text-transparent bg-clip-text tracking-tight">
          Blinkr<span className="text-yellow-400"> Loan</span>
        </h1>
      </div>
    </div>
  );
}

export default Logo;