import { useState } from "react";

export default function Form() {
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with PAN: ${pan} and Phone: ${phone}`);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/the-flash-background-7i5uck673cqp3lla.jpg')",
      }}
    >
      {/* Flashing Overlay Effect */}
      <div className="absolute inset-0 bg-red-600 opacity-10 mix-blend-overlay animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      <div className="bg-black/90 p-8 rounded-2xl shadow-2xl w-[400px] border-4 border-yellow-500 relative flex flex-col items-center backdrop-blur-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-400 tracking-widest">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-lg font-bold uppercase tracking-wider">
              PAN Number
            </label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="w-full mt-2 p-3 rounded bg-yellow-500 text-black text-lg font-bold focus:ring-4 focus:ring-yellow-300 shadow-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold uppercase tracking-wider">
              Phone Number
            </label>
            <div className="flex items-center">
              <span className="bg-gray-800 text-white px-4 py-3 rounded-l font-extrabold text-lg">
                +91
              </span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-r bg-yellow-500 text-black text-lg font-bold focus:ring-4 focus:ring-yellow-300 shadow-lg"
                required
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mr-2 w-6 h-6 accent-red-500 cursor-pointer"
            />
            <label className="text-lg font-medium">
              Agreeing to Terms & Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-red-600 text-white font-extrabold text-xl rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300 shadow-2xl uppercase tracking-wider"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
