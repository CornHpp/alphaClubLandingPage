"use client"
import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import titleImg from "@/assets/whiteList/titleImg.png"
import styles from "./index.module.scss"
import select from "@/assets/whiteList/select.png"
import selected from "@/assets/whiteList/selected.png"
import firstBg from "@/assets/background/firstBg.png"
import ButtonImg from "@/assets/whiteList/Button.png"
import { useRouter } from "next/navigation"

const whiteList = () => {
  const router = useRouter()
  return (
    <div className="relative ">
      <Image src={firstBg} alt="" className="max-h-[100vh]"></Image>

      <div className="absolute w-full left-0 h-full  box-border top-0 flex items-center justify-center">
        <Image
          src={titleImg}
          className="ml-[97px] z-10"
          alt="aplhaclue"
          width={499}
          height={309}
        ></Image>
        <div className=" relative ml-[-100px] bg-whitelist-taskbg bg-no-repeat w-[827px] h-[574px] bg-cover flex flex-col items-center justify-center">
          <Image
            src={ButtonImg}
            className=" absolute top-[50px] left-[180px] z-10"
            alt="aplhaclue"
            width={481}
            height={95}
            onClick={() => {
              router.push("/finished")
            }}
          ></Image>
          <div className={styles.checkBox}>
            {taskList.map((item, index) => {
              return (
                <div
                  key={index + "a"}
                  className="flex items-center mt-[20px] text-[28px]"
                >
                  <Image src={select} alt="" width={35} height={35}></Image>
                  <div className="ml-[30px] text-black">{item.value}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const taskList = [
  {
    value: "Connect on X",
  },
  {
    value: "Make a retweet",
  },
  {
    value: "Like on our tweet ",
  },
  {
    value: "Tag 3 Friends in tweet",
  },
]

export default React.memo(whiteList)
