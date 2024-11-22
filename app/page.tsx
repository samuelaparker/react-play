"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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

  useEffect(() => {
    document.body.addEventListener("click", bodyColor);

    return () => {
      document.body.removeEventListener("click", bodyColor);
    };
  }, []);

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
          className="bg-gray-500 hover:bg-[#1E7DD9] text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-[#1E7DD9] rounded m-2"
        >
          CLICK
        </button>
        <button
          onClick={buttonClick_2}
          className="bg-gray-500 hover:bg-[#1E7DD9] text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-[#1E7DD9] rounded m-2"
        >
          CLICK
        </button>
        <button
          onClick={buttonClick_3}
          className="bg-gray-500 hover:bg-[#1E7DD9] text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-[#1E7DD9] rounded m-2"
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
      <div className="border-4 border-blue-700 mt-16 p-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:shadow-lg cursor-pointer">
        <Link href="/play-2">shadcn / ui playground</Link>
      </div>
    </main>
  );
}
