import { Bolt } from "lucide-react";

const Consent = ({ onAgree, onClose }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0  z-50">
      <div className="bg-red-900 p-8 rounded-2xl shadow-2xl w-3/4 md:w-1/2 border border-yellow-500 text-white">
        <div className="flex items-center mb-4">
          <Bolt className="text-yellow-400" size={24} />
          <h2 className="text-yellow-400 text-2xl font-bold ml-2">User Consent</h2>
        </div>
        <p className="text-yellow-300 mb-4">
          By agreeing to the terms and conditions, you consent to the processing of your data for verification purposes.
        </p>
        <ul className="list-disc pl-6 text-white-200 mb-4 space-y-2">
          <li className="pl-2">
            Interest occurs on a daily basis and needs to be paid on the date set out in the agreement.
          </li>
          <li className="pl-2">
            Actual interest rate charged to Borrower account may vary.
          </li>
          <li className="pl-2">
            Borrower can pay the Repayment amount through National Automated Clearing House (NACH) or by setting up a 
            Standing Instruction (SI) on Borrower's Bank Account.
          </li>
          <li className="pl-2">
            Borrower needs to pay the total Loan amount on the due date every month till the loan is fully repaid. 
            Non-repayment of Loan amount may lead to situations, including but not limited to:
          </li>
          <ol className="list-[lower-alpha] pl-10 space-y-2">
            <li>Impact on Borrower's credit score, rating, and history (reporting to Credit Information Companies (CICs)).</li>
            <li>Impact on other credit facilities availed from Blinkr Loan.</li>
            <li>The institute may initiate appropriate recovery and legal proceedings against Borrower to recover the dues.</li>
          </ol>
        </ul>
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-yellow-400 text-red-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 cursor-pointer"
            onClick={onAgree}
          >
            I Agree
          </button>
          <button
            className="bg-red-700 text-yellow-300 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-red-600 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
