import { useState } from "react";
import { RadiosProps } from "../types/type";
import React from "react";

const RadioButton = ({ data }:RadiosProps) => {
  const [marketOpen, setMarketOpen] = useState<boolean>(true);
  return (
    <div className="radio-container w-[160px] flex flex-col" style={{justifyContent:"center"}}>
      <h2 className=" ms-4 mb-[10px] relative radio-h2">
        {marketOpen == true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            height={20}
            className=" absolute top-[50%] left-[-15px] transform translate-y-[-50%]"
            onClick={() => setMarketOpen(false)}
          >
            <path
              fill="white"
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            height={20}
            className=" absolute top-[50%] left-[-15px] transform translate-y-[-50%]"
            onClick={() => setMarketOpen(true)}
          >
            <path
              fill="white"
              d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            />
          </svg>
        )}
        {data.title}
      </h2>
      <div
        className=" flex flex-col gap-[10px] w-[100%]  relative mx-auto"
        style={{
          clipPath:
            marketOpen == true
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          transition: "0.5s",
          alignItems: "center",
        }}
      >
       {data.radios.map((ele) => (
         <div className="flex mid-selector" style={{fontSize:"12px"}}>
         <input type="radio" id={ele} name="micro" />
         <label htmlFor={ele} className="">
           {ele}
         </label>
       </div>
       ))}
      </div>
    </div>
  );
};

export default RadioButton;
