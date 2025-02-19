import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import flashPlayer from "/flash-player.png";

const PlayerDetails = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}
      >
        <Navbar />

        <div className="bg-[#58050f] p-10 rounded-xl shadow-lg w-[900px] flex">
          <div className="w-1/2 pr-4">
            <h2 className="text-white text-3xl font-bold mb-6">
              PLAYER <span className="text-yellow-400">DETAIL</span>
            </h2>
            <div className="mb-6">
              <label className="text-white block mb-2 text-lg">Player Name</label>
              <p className="w-full p-3 bg-yellow-400 text-black rounded text-lg">John Doe</p>
            </div>
            <div className="mb-6">
              <label className="text-white block mb-2 text-lg">Email ID</label>
              <p className="w-full p-3 bg-yellow-400 text-black rounded text-lg">johndoe@gmail.com</p>
            </div>
            <div className="mb-6">
              <label className="text-white block mb-2 text-lg">Your Address</label>
              <p className="w-full p-3 bg-yellow-400 text-black rounded text-lg">123, Flash Avenue, Speed City</p>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 cursor-pointer">
              Submit
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="w-[600px] h-[300px] bg-[#ffe86f] rounded-full blur-[250px]" />
            <img src={flashPlayer} alt="Flash Player" className="absolute w-auto h-[300px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayerDetails;
