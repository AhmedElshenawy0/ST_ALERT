/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react";
import { leftIndustry, rightIndustry } from "../../dummyData";
import RadioButton from "../RadioButton";
import Swipper from "./Swipper";
import { CloseContext } from "../../App";
import { RadiosData } from "../../types/type";
import React from "react";

const Filter = () => {
  const { close, setClose } = useContext<{close:boolean}>(CloseContext);
  const strategy:string[] = ["Big Option Buys", "Merger Arbitrage", "Short Reports"];
  const asset:string[] = ["Stocks", "Options", "Futures"];
  const [industryOpen, setIndustryOpen] = useState<boolean>(true);
  const [radioBtnData, setRadioBtnData] = useState<
    RadiosData >([
    {
      title: "Market cap",
      radios: ["Micro", "Small jggf", "Large"],
    },
    {
      title: "Risk Level",
      radios: ["Low Risk", "Mid Risk", "High Risk"],
    },
  ]);

  return (
    <div
      style={{ display: close == true && "block" }}
      className="pt-[17px] px-[26px] filter text-white"
    >
      <button className="close-btn" onClick={() => setClose(false)}>
        <svg
          className=""
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6283 0.371747C10.1326 -0.123916 9.32895 -0.123916 8.83333 0.371747L5.49998 3.70515L2.16663 0.37178C1.67095 -0.123882 0.867438 -0.123882 0.371759 0.37178C-0.123919 0.867443 -0.123919 1.67109 0.371759 2.16667L3.70494 5.50002L0.371759 8.83337C-0.123919 9.32888 -0.123919 10.1326 0.371759 10.6282C0.867438 11.1239 1.67112 11.1239 2.1668 10.6282L5.49998 7.29506L8.83316 10.6282C9.32891 11.1239 10.1326 11.1239 10.6282 10.6282C11.1239 10.1326 11.1239 9.32905 10.6282 8.83337L7.29485 5.50002L10.6283 2.16667C11.1239 1.67105 11.1239 0.867409 10.6283 0.371747Z"
            fill="#414040"
          />
        </svg>
      </button>

      <h2
        style={{
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Filters
      </h2>
      <div>
        <div className="flex justify-between ">
          <p
            style={{
              color: "#979797",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Filters Applied
          </p>
          <button style={{ fontWeight: 500, lineHeight: "24px" }}>
            Clear All
          </button>
        </div>
        <div className=" w-[100%] filter-box rounded-[7px] flex flex-wrap gap-1"></div>
      </div>
      <div>
        <h2 className="stock" style={{ fontWeight: 700, lineHeight: "32px" }}>
          Stock
        </h2>
        <div className="flex-1 relative first-line mr-2 mb-[4px]">
          <input
            type="search"
            className="h-[27px] rounded-[5px] w-[100%]  search"
            style={{ color: "#737373" }}
          />
          <small
            style={{ fontSize: "14px", fontWeight: 400, color: "#737373" }}
            className=" uppercase absolute left-[18px] top-[50%] transform translate-y-[-50%] text-white"
          >
            $ tICKER
          </small>
          <svg
            style={{ color: "#6B6B6B" }}
            className=" absolute transform translate-y-[-50%] right-3 top-[50%]"
            width="13"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7679 16.5926C15.2819 14.9866 16.9189 10.6213 15.4259 6.84242C13.9329 3.06342 9.87488 1.30192 6.36088 2.90792C2.84788 4.51392 1.21084 8.87932 2.70384 12.6582C4.19684 16.4371 8.25487 18.1986 11.7679 16.5926Z"
                stroke="#F5F5F5"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9519 15.0068L19.3129 20.7737"
                stroke="#F5F5F5"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="">
        <h2 className="relative industry-h2">
          {industryOpen == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              height={20}
              className=" absolute top-[50%] left-[-15px] transform translate-y-[-50%]"
              onClick={() => setIndustryOpen(false)}
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
              onClick={() => setIndustryOpen(true)}
            >
              <path
                fill="white"
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              />
            </svg>
          )}
          Industry
        </h2>

        <div
          className="flex gap-[11px] "
          style={{
            clipPath:
              industryOpen == true
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: "0.5s",
          }}
        >
          <div
            style={{ borderLeft: "1px solid white" }}
            className="pl-[12px] flex-1"
          >
            {leftIndustry.map((ele) => (
              <div
                style={{ alignItems: "center" }}
                className="flex gap-[8px] industry-item mb-1"
              >
                <img src={ele.icon} alt="" width={15} /> <p>{ele.title}</p>
              </div>
            ))}
          </div>
          <div
            style={{ borderLeft: "1px solid white" }}
            className="pl-[12px] flex-1"
          >
            {rightIndustry.map((ele) => (
              <div
                style={{ alignItems: "center" }}
                className="flex gap-[8px] industry-item mb-1"
              >
                <img src={ele.icon} alt="" width={15} />{" "}
                <h4
                  className=""
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {ele.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[10px] mt-md-[24px]">
        {radioBtnData.map((ele) => (
          <RadioButton data={{ title: ele.title, radios: ele.radios }} />
        ))}
      </div>
      <div className="swiper-container flex justify-between mt-[10px] mt-md-[24px]">
        <div className="strategy-swipper flex flex-col">
          <h3>Strategy</h3>
          <Swipper data={strategy} />
        </div>
        <div className="asset-swipper flex flex-col">
          <h3>Asset</h3>
          <Swipper data={asset} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
