import React from "react";
import Image from "next/image";

const Last = () => {
  return (
    <div className="relative flex w-full min-h-[443px] rounded-[50px] overflow-hidden">
      
     
      <div className="flex flex-col justify-between bg-[#DEDEE0] w-1/2 p-10 rounded-l-[50px]">
        <div>
          <p className="text-[#1C1A1A] font-bold text-lg mb-6">
            Next-Gen AI Summit 2052
          </p>
          <div className="grid grid-cols-2 gap-y-3 text-[#1C1A1A]">
            <span>Agenda</span>
            <span>Terms & Conditions</span>
            <span>Speakers</span>
            <span>Privacy Policy</span>
            <span>Register</span>
            <span>Cookie Policy</span>
            <span>FAQ</span>
          </div>
        </div>
        <p className="text-[#1C1A1A] text-sm   mt-6">
          © 2052 Next-Gen AI Summit. All rights reserved.
        </p>
      </div>

      
      <div className=" absolute left-[470px] h-[443px] flex flex-col justify-center bg-[#0147FF] w-1/2 px-20 text-white rounded-[50px]">
        <h1 className="text-[25px] font-bold leading-none mb-4">
          STAY UPDATED
        </h1>
        <p className="mb-6 text-sm">
          Subscribe for event updates & exclusive content.
        </p>

       
        <div className="mb-6">
          <p className="text-[#7E7E7E] text-sm mb-1">Email</p>
          <Image src="/line.png" alt="" width={300} height={30} />
        </div>

       
        <button className="bg-white text-black font-medium px-6 py-3 rounded-full w-fit hover:bg-gray-200 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Last;
