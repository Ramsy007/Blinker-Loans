import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const KYCpage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState(["Belthara Road, Balliyan, Uttar Pradesh, 221715"]);
  const [newAddress, setNewAddress] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddressChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  const addNewAddress = () => {
    if (newAddress.trim() !== "") {
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
      setNewAddress("");
      setIsAdding(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/enter-adhar"); 
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./KYCadd.png')" }}
      >
        <div className="bg-[#58050f] p-10 rounded-xl shadow-lg w-[500px] text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Address Based <span className="text-yellow-400">KYC</span>
          </h2>
          <form onSubmit={handleSubmit}>
            {addresses.map((address, index) => (
              <div key={index} className="mb-6 text-left">
                <label className="text-white block mb-2 text-lg">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                  className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
                />
              </div>
            ))}
            {isAdding && (
              <div className="mb-6 text-left">
                <label className="text-white block mb-2 text-lg">New Address</label>
                <input
                  type="text"
                  placeholder="Enter new address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
                />
                <button
                  type="button"
                  onClick={addNewAddress}
                  className="w-full bg-green-500 text-white py-3 rounded mt-2 text-lg hover:bg-green-600 border border-white cursor-pointer"
                >
                  Save Address
                </button>
              </div>
            )}
            {!isAdding && (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="w-full bg-yellow-500 text-black py-3 rounded mt-2 text-lg hover:bg-yellow-600 border border-white cursor-pointer"
              >
                Add New Address
              </button>
            )}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white cursor-pointer"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KYCpage;
