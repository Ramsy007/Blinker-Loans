import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import flashPlayer from "/flash-player.png";
import "./PlayerDetails.css";

const PlayerDetails = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center bg-center bg-cover relative overflow-hidden"
        style={{ backgroundImage: "url('/player-details-bg.png')" }}
      >
        <Navbar />

        {/* Lightning Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="lightning absolute w-full h-full top-0 left-0"></div>
        </div>

        <div className="p-10 rounded-xl w-[900px] flex z-10">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayerDetails;
