"use client"
import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import firstBg from "@/assets/background/firstBg.png"

import alphaClueIcon from "@/assets/whiteList/alphaClueIcon.png"

const Finish = () => {
  return (
    <div className="relative">
      <Image src={firstBg} alt="" className="max-h-[100vh]"></Image>

      <div
        style={{ height: "calc(100vh - 91px)" }}
        className="absolute left-[50%] translate-x-[-50%]  box-border top-0 pt-[91px] mx-auto"
      >
        <Image
          src={alphaClueIcon}
          className="z-10"
          alt="aplhaclue"
          width={796}
          height={436}
        ></Image>
        <div className="mt-[50px] text-[60px] text-white  bg-cover flex  items-center">
          <div className="bg-finish-mintbg1 bg-no-repeat w-[369px] h-[164px] bg-cover">
            <div className="mt-[75px] ml-[50px] text-[48px]">
              107 H 40 M 30S
            </div>
          </div>

          <div className="ml-[50px] bg-finish-mintbg2 bg-no-repeat w-[369px] h-[164px] bg-cover">
            <div className="mt-[75px] ml-[50px] text-[48px]">
              107 H 40 M 30S
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Finish)
