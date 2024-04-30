import AlertItem from "./AlertItem"
import { data } from "../../dummyData"
import React from "react"
const AlertComp = () => {
  return (
    <div style={{height:"calc(100vh)" }} className=" alertCom  mt-2 flex flex-col gap-[16px] overflow-y-auto">
      {data.map((ele) => (
        <AlertItem data={ele}/>
      ))}
    </div>
  )
}

export default AlertComp