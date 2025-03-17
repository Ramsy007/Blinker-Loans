import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, PenTool, CreditCard } from "lucide-react";

const steps = [
  { label: "Eligibility Check", icon: <CheckCircle className="w-5 h-5" />, completed: true },
  { label: "Loan Approved", icon: <CreditCard className="w-5 h-5" />, completed: true },
  { label: "KYC", icon: <FileText className="w-5 h-5" />, completed: false },
  { label: "E-Sign", icon: <PenTool className="w-5 h-5" />, completed: false },
  { label: "Disbursal", icon: <CreditCard className="w-5 h-5" />, completed: false },
];

const VerticalStatus = ({ currentStepIndex }) => {
  return (
    <div className="absolute right-2 md:right-6 lg:right-10 top-1/4 flex flex-col items-end space-y-4 md:space-y-6 text-white">
      {steps.map((step, index) => {
        return (
          <div key={index} className="flex items-center gap-2 md:gap-3 relative">
            {/* Step Label */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className={`text-xs md:text-sm font-semibold text-right w-16 md:w-20 ${
                index === currentStepIndex ? "text-yellow-400" : ""
              }`}
            >
              {step.label}
            </motion.span>

            {/* Step Indicator */}
            <div className="relative">
              <motion.div
                className={`relative flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md ${
                  step.completed
                    ? "bg-green-600"
                    : index === currentStepIndex
                    ? "bg-yellow-400"
                    : "bg-gray-700"
                }`}
              >
                {/* Blinking Effect for Current Step */}
                {index === currentStepIndex && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 border-2 border-yellow-400 rounded-full"
                  ></motion.div>
                )}
                <div
                  className={`p-2 rounded-full ${
                    step.completed
                      ? "bg-white text-red-600"
                      : index === currentStepIndex
                      ? "bg-white text-yellow-400"
                      : "bg-gray-500"
                  }`}
                >
                  {step.icon}
                </div>
              </motion.div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute h-1 w-6 md:w-8 lg:w-10 top-1/2 -translate-y-1/2 -right-6 md:-right-8 lg:-right-10 ${
                    step.completed ? "bg-red-600" : "bg-gray-700"
                  }`}
                ></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalStatus;
