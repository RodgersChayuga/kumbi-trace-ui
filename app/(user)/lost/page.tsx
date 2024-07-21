"use client";

import Image from "next/image";
import React from "react";

const LostPerson = () => {
  return (
    <div className="h-[79%] w-full bg-green-400 flex justify-center items-center">
      <div className="card items-center gap-2 my-4 bg-[#fff] p-6 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col justify-around">
              <div>
                <h3 className="text-4xl flex-wrap font-bold text-[#bb0000]">
                  Derrick
                </h3>
                <h3 className="text-4xl flex-wrap font-bold text-[#bb0000]">
                  Wakesho
                </h3>
              </div>
              <div>
                <h3>Age: 34</h3>
                <h3>Gender: Male</h3>
                <h3>Last Seen: June 25, 2024</h3>
                <h3>Location: Utawala </h3>
              </div>
            </div>
            <div>
              <Image
                src="/person.jpg"
                alt="lost-person"
                height="300"
                width="200"
                className="object-contain border border-black rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3>
              <span className="text-[#bb0000]">Derrick</span> was last seen on{" "}
              <span className="text-[#bb0000]">02/07/2024</span>
            </h3>
            <h3>
              His last known location was{" "}
              <span className="text-[#bb0000]">Utawala, Benedictor</span>
            </h3>
          </div>
          
          <div className="px-4 py-2 bg-black text-white rounded-lg">0722 437 455</div>
          <div className="px-4 py-2 bg-black text-white rounded-lg">0716 546 110</div>
        </div>
        {/* <div className="text-black text-xl md:text-2xl font-extrabold">
          <h3>Derrick Wakesho</h3>
          <h3>Age: 34</h3>
          <h3>Gender: Male</h3>
          <h3>Last Seen: June 25, 2024</h3>
          <h3>Location: Utawala </h3>
        </div>
        <Image
          src="/person.jpg"
          alt="lost-person"
          height="400"
          width="300"
          className="object-contain border border-black rounded-md"
        /> */}
      </div>
    </div>
  );
};

export default LostPerson;
