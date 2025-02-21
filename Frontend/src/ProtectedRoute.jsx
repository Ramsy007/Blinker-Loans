// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children, requiredStep }) => {
//   const location = useLocation();
//   const currentStep = localStorage.getItem("step") || "";

//   // Define the order of steps
//   const stepOrder = [
//     "", 
//     "kyc-completed",
//     "otp-completed",
//     "credit-score-completed",
//     "aadhaar-email-completed",
//     "final-step",
//   ];

//   // Ensure user has completed previous steps
//   if (stepOrder.indexOf(currentStep) < stepOrder.indexOf(requiredStep)) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
