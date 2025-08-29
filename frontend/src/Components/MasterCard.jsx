import { useState } from "react";

const MasterCard = ({
  type = "Master Card",
  number = "**** **** 5678 9082",
  name = "Aashish Timlasina",
  expiry = "08/30",
  cvv = "897",
  dark = false,
}) => {
  const [flipped, setFlipped] = useState(false);
  const isMaster = type.toLowerCase() === "master card";

  return (
    <div
      className="w-80 h-48 perspective-distant cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className={` absolute w-full h-full rounded-2xl shadow-2xl text-black overflow-hidden backface-hidden ${
            dark
              ? "bg-gradient-to-r from-gray-300 via-blue-100 to-amber-400"
              : isMaster
              ? "bg-gradient-to-r from-gray-100 via- to-amber-400"
              : "bg-gradient-to-r from-purple-500 to-pink-500"
          }`}
        >
          <div className="flex justify-between items-center px-5 pt-5">
            <div className="w-8 h-8 bg-amber-400 bg-opacity-30 rounded-md" />
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full opacity-90" />
                <div className="w-8 h-8 bg-pink-400 rounded-full opacity-90" />
              </div>
              <span className="text-lg font-semibold">Master Card</span>
            </div>
          </div>

          <div className="text-xl font-mono tracking-widest px-5 pt-8">
            {number}
          </div>

          <div className="flex justify-between items-end px-5 pb-5 text-md">
            <div>
              <p className="uppercase text-xs opacity-70">Card Owner</p>
              <p className="font-semibold">{name}</p>
            </div>
            <div>
              <p className="uppercase text-sm opacity-70">Expires</p>
              <p className="ml-2 font-semibold">{expiry}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full rounded-2xl shadow-2xl text-black overflow-hidden backface-hidden rotate-y-180 ${
            dark
              ? "bg-gradient-to-r from-gray-300 via-blue-100 to-amber-400"
              : isMaster
              ? "bg-gradient-to-r from-gray-100 via-amber-200 to-amber-400"
              : "bg-gradient-to-r from-purple-500 to-pink-500"
          }`}
        >
          <div className="bg-black w-full h-10 mt-6" />

          <div className="mt-6 px-5">
            <div className="bg-white text-black w-40 h-8 flex items-center justify-end pr-2 font-mono text-sm rounded">
              {cvv}
            </div>
          </div>

          <div className="absolute bottom-3 left-5 right-5 text-xs opacity-70">
            This is your secure card. Do not share your CVV.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
