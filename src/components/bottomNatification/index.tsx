"use client"
import React, { useState } from "react"
import { NoticeBar } from "antd-mobile"
import currency from "@/assets/bottomNotification/currency.png"
import Image from "next/image"

const BottomNotification: React.FC = () => {
  const [message, setMessage] = useState()
  return (
    <div className=" fixed left-1/2 translate-x-[-50%] bottom-0 w-full max-w-[1920px] ">
      <NoticeBar
        content={<NotificationMessage />}
        style={{
          "--background-color": "rgba(16, 23, 59, 1)",
        }}
        delay={1000}
        color="alert"
      ></NoticeBar>
    </div>
  )
}

const NotificationMessage = () => {
  const [message, setMessage] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}])
  return (
    <div className="flex">
      {message.map((item, index) => {
        return (
          <div
            className="flex items-center flex-shrink-0 ml-[24px] "
            style={{
              color: "rgba(250, 209, 47, 1)",
            }}
            key={index + "s"}
          >
            The 1st Bitcoin-
            <span
              style={{
                color: "rgba(47, 250, 236, 1)",
              }}
            >
              Ethereum
            </span>{" "}
            Omnichain Social App
            <Image
              className="ml-[24px]"
              src={currency}
              alt="currency"
              width={128}
              height={32}
            ></Image>
          </div>
        )
      })}
    </div>
  )
}

export default BottomNotification
