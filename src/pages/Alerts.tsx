import { useContext } from "react";
import AlertComp from "../components/Alert/AlertComp";
import Filter from "../components/Alert/Filter";
import { CloseContext } from "../App";
import React from "react";

const Alerts = () => {
  const { setClose } = useContext(CloseContext);
  const {navState} = useContext(CloseContext)
  return (
    <div style={{marginLeft:navState == false ? "110px" : "45px"}} className=" w-[100%] alert pl-[20px] pr-[32px] pt-[36px] pb-[39px] flex gap-[32px]">
      <div className=" flex-1">
        <div className="flex " style={{ alignItems: "center" }}>
          <h1
            style={{ fontWeight: 700 }}
            className=" text-white mr-[10px] alert-text"
          >
            ALERTS
          </h1>
          <div className=" h-fit flex justify-between flex-1 my-auto">
            <div className="flex-1 relative first-line mr-2">
              <input
                type="search"
                className="h-[30px] rounded-[5px] w-[100%]  search"
              />
              <small
                style={{ fontWeight: 400 }}
                className="absolute left-[12px] top-[50%] transform translate-y-[-50%] text-white"
              >
                Search
              </small>
              <svg
                className=" absolute transform translate-y-[-50%] right-3 top-[50%]"
                width="18"
                height="19"
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
            <svg
              className="alert-icon"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2913 15.1342L17.8688 13.7117C17.542 13.3599 17.3527 12.9024 17.3353 12.4226V9.62203C17.3353 6.02135 14.9349 2.9541 10.6674 2.9541C6.39995 2.9541 3.9995 5.93244 3.9995 9.62203V12.7337C3.99127 13.0151 3.88062 13.2838 3.68833 13.4894L2.04357 15.1342C1.87606 15.2983 1.7802 15.522 1.77686 15.7565V18.9571C1.77686 19.1929 1.87052 19.419 2.03725 19.5858C2.20398 19.7525 2.43012 19.8462 2.66591 19.8462H7.60018C7.72387 20.5701 8.09962 21.2269 8.66095 21.7005C9.22228 22.174 9.93302 22.4338 10.6674 22.4338C11.4018 22.4338 12.1126 22.174 12.6739 21.7005C13.2352 21.2269 13.611 20.5701 13.7347 19.8462H18.6689C18.9047 19.8462 19.1309 19.7525 19.2976 19.5858C19.4643 19.419 19.558 19.1929 19.558 18.9571V15.7565C19.5546 15.522 19.4588 15.2983 19.2913 15.1342Z"
                fill="#53ACFF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5841 11.0128C21.6252 11.0128 24.0905 8.54752 24.0905 5.50641C24.0905 2.46531 21.6252 0 18.5841 0C15.5429 0 13.0776 2.46531 13.0776 5.50641C13.0776 8.54752 15.5429 11.0128 18.5841 11.0128Z"
                fill="#118F4B"
              />
              <path
                d="M18.6915 9.08776C17.9251 9.08776 17.3312 8.81863 16.91 8.28038C16.4946 7.74213 16.2869 6.98741 16.2869 6.01621C16.2869 4.96896 16.5209 4.15866 16.989 3.5853C17.4629 3.01195 18.1152 2.72527 18.946 2.72527C19.2736 2.72527 19.5983 2.7867 19.9201 2.90956C20.2419 3.02657 20.5169 3.19624 20.745 3.41856L20.3765 4.26104C20.16 4.06212 19.9289 3.91586 19.6832 3.82225C19.4374 3.72279 19.1859 3.67306 18.9284 3.67306C18.4194 3.67306 18.0304 3.8515 17.7613 4.20839C17.4921 4.56527 17.3576 5.09767 17.3576 5.80559V6.06009C17.4804 5.73831 17.6793 5.48674 17.9543 5.30537C18.2293 5.124 18.5452 5.03332 18.9021 5.03332C19.259 5.03332 19.5749 5.11815 19.8499 5.28782C20.1249 5.45748 20.3414 5.6915 20.4993 5.98988C20.6573 6.28826 20.7363 6.63052 20.7363 7.01666C20.7363 7.4145 20.6485 7.77138 20.473 8.08731C20.3033 8.39739 20.0635 8.64312 19.7534 8.82448C19.4491 9 19.0952 9.08776 18.6915 9.08776ZM18.6301 8.19262C18.946 8.19262 19.2005 8.09024 19.3936 7.88547C19.5925 7.67485 19.6919 7.39987 19.6919 7.06054C19.6919 6.7212 19.5925 6.44623 19.3936 6.23561C19.2005 6.02499 18.946 5.91968 18.6301 5.91968C18.3141 5.91968 18.0567 6.02499 17.8578 6.23561C17.6647 6.44623 17.5682 6.7212 17.5682 7.06054C17.5682 7.39987 17.6647 7.67485 17.8578 7.88547C18.0567 8.09024 18.3141 8.19262 18.6301 8.19262Z"
                fill="white"
              />
            </svg>
          </div>
          <button
            className="filter-btn text-white px-[8px] py-[6px] py-md-[24px] rounded-[4px] bg-[#53ACFF]"
            style={{ fontSize: "11px" }}
            onClick={() => setClose(true)}
          >
            Filters
          </button>
        </div>
        <AlertComp />
      </div>
      <Filter />
    </div>
  );
};

export default Alerts;
