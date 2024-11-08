"use client";
import { useState } from "react";

export default function Home() {
  const [bgColorState, setBGColor] = useState("");
  const [textColorState, setTextColor] = useState("");

  let buttonClick_1 = () => {
    setBGColor("#260101");
    setTextColor("white");
  };

  let buttonClick_2 = () => {
    setBGColor("#D9751E");
    setTextColor("white");
  };

  let buttonClick_3 = () => {
    setBGColor("#7ED994");
    setTextColor("white");
  };

  const bodyColor = () => {
    setBGColor("white");
    setTextColor("black");
  };
  document.body.addEventListener("click", bodyColor);

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24`}
      style={{ backgroundColor: bgColorState }}
    >
      <div style={{ color: textColorState }} className="p-8">
        Click anywhere to reset background color to white.
      </div>
      <div>
        <button
          onClick={buttonClick_1}
          className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        >
          CLICK
        </button>
        <button
          onClick={buttonClick_2}
          className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        >
          CLICK
        </button>
        <button
          onClick={buttonClick_3}
          className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        >
          CLICK
        </button>
      </div>

      <div style={{ color: textColorState }}>
        <div className="mt-24">
          <p className="font-silkscreen text-9xl">Silkscreen font</p>
        </div>
        <div className="mt-24">
          <p className="font-rubikPuddles text-9xl">Rubik Puddles font</p>
        </div>
      </div>
    </main>
  );
}
