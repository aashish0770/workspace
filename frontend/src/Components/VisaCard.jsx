import { useState } from "react";

export default function VisaCard({
  type = "visa",
  number = "**** **** **** 1234",
  name = "Aashish Timalsina",
  expiry = "12/28",
  cvv = "123",
  dark = false,
}) {
  const [flipped, setFlipped] = useState(false);
  const isVisa = type.toLowerCase() === "visa";

  return (
    <div
      className="w-80 h-48 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full rounded-2xl shadow-lg text-white overflow-hidden backface-hidden
            ${dark
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
              : isVisa
              ? "bg-gradient-to-r from-blue-600 to-blue-800"
              : "bg-gradient-to-r from-red-500 to-yellow-500"
            }`}
        >
          <div className="flex justify-between items-center px-5 pt-5">
            <div className="w-8 h-8 bg-amber-300 bg-opacity-20 rounded-sm" />
            {isVisa ? (
              <span className="text-2xl font-bold tracking-wider">VISA</span>
            ) : (
              <div className="flex space-x-[-10px]">
                <div className="w-8 h-8 bg-red-600 rounded-full opacity-90" />
                <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-90" />
              </div>
            )}
          </div>

          <div className="text-xl font-mono tracking-widest px-5 pt-8">
            {number}
          </div>

          <div className="flex justify-between items-end px-5 pb-5 text-sm">
            <div>
              <p className="uppercase text-xs opacity-70">Card Holder</p>
              <p className="font-semibold">{name}</p>
            </div>
            <div>
              <p className="uppercase text-xs opacity-70">Expires</p>
              <p className="font-semibold">{expiry}</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full rounded-2xl shadow-lg text-white overflow-hidden backface-hidden rotate-y-180
            ${dark
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
              : isVisa
              ? "bg-gradient-to-r from-blue-600 to-blue-800"
              : "bg-gradient-to-r from-red-500 to-yellow-500"
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
}
