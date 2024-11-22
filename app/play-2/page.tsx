import React from "react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <div className="container border-red-500 border-4 m-auto h-screen py-4">
        <div className="flex justify-center flex-col items-center">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="border-green-400 border-4 w-full flex flex-col items-center"
            >
              page
            </div>
          ))}
          <Button />
        </div>
      </div>
    </div>
  );
}
