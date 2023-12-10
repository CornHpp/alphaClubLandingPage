"use client"
import Image from "next/image"
import { useEffect } from "react"
import alphaClueIcon from "@/assets/home/alphaClueIcon.png"
import mouse from "@/assets/home/mouse.png"
import banner from "@/assets/home/banner.png"
import HomeContent from "@/components/homeContent"
import firstBg from "@/assets/background/firstBg.png"
import secondBg from "@/assets/background/secondBg.png"

export default function Home() {
  return (
    <div className="w-full">
      <div className=" relative">
        <Image src={firstBg} alt="alphaClue alpha-clue"></Image>
        <div className="absolute left-0 top-[85px]">
          <Image src={banner} alt="alphaClue alpha-clue"></Image>
        </div>
      </div>
      <div className="relative">
        <Image src={secondBg} alt="alphaClue alpha-clue"></Image>
        <div
          className="absolute left-0 top-0 w-full "
          style={{
            height: "calc(100% - 87px)",
          }}
        >
          <Image
            className="mx-auto"
            src={alphaClueIcon}
            width={160}
            height={87}
            alt="alphaClue alpha-clue"
          ></Image>
          <HomeContent></HomeContent>
        </div>
      </div>

      <Image
        className="fixed left-[50%] bottom-10 translate-x-[-50%]"
        src={mouse}
        width={84}
        height={100}
        alt="alphaClue alpha-clue"
      ></Image>
    </div>
  )
}
