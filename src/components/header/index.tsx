"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import homeIcon from "@/assets/header/homeIcon.png"
import arrowIcon from "@/assets/header/arrowIcon.png"
import signIcon from "@/assets/header/personIcon.png"
import launchApp from "@/assets/header/launchApp.png"
import { useRouter } from "next/navigation"
import { getTimeRemaining } from "@/lib/utils"

interface HeaderProps {
  // Add any props you need for the header component
}

let timer: any
const Header: React.FC<HeaderProps> = () => {
  const [opacity, setOpacity] = React.useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollHeight = window.scrollY
      const opacity = scrollHeight / windowHeight
      const opacityMax = Math.min(0.6, opacity)
      setOpacity(opacityMax)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [timeFilter, setTimeFilter] = React.useState<any>("")

  useEffect(() => {
    timer = setInterval(() => {
      setTimeFilter(getTimeRemaining("2024-1-1 00:00:00"))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [timeFilter])

  useEffect(() => {}, [timeFilter])

  return (
    <div
      style={{
        background: `rgba(0,0,0,${opacity})`,
      }}
      className="z-10 max-w-[1920px] fixed w-full flex items-center h-[80px] backdrop-blur-md justify-between  bg-opacity-40 px-[70px]"
    >
      <div className="flex items-center text-white text-[32px]">
        <div className="flex items-center cursor-pointer">
          <Image
            className="w-[32px] h-[32px] mt-[-5px]"
            src={homeIcon}
            alt="home"
            width={32}
            height={32}
          ></Image>
          <div
            className="ml-[6px]"
            onClick={() => {
              router.push("/")
            }}
          >
            HOME
          </div>

          <div className="flex items-center cursor-pointer">
            <div
              className="ml-[44px]"
              onClick={() => {
                console.log("join whitelist")
                if (
                  timeFilter.hour == 0 &&
                  timeFilter.minutes == 0 &&
                  timeFilter.seconds == 0
                ) {
                  router.push("/whitelist")
                } else {
                  console.log("The whitelist is not open yet")
                  alert("The whitelist is not open yet")
                }
              }}
            >
              <div>JOIN WHITELIST</div>
              {timeFilter && (
                <div className="mt-[-20px]">
                  {timeFilter.hours}h {timeFilter.minutes}m {timeFilter.seconds}
                  s
                </div>
              )}
            </div>

            <Image
              className="w-[32px] h-[32px] ml-[4px]"
              src={arrowIcon}
              alt="home"
              width={31}
              height={34}
            ></Image>

            {/* <Image
              className="w-[32px] h-[32px] ml-[44px]"
              src={signIcon}
              alt="home"
              width={32}
              height={32}
            ></Image> */}
            {/* <div className="ml-[6px] cursor-pointer">SIGN IN</div> */}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className=" text-[32px] text-white cursor-pointer">
          <div>Launch App</div>
          <div className="text-base mt-[-10px]">coming soon</div>
        </div>
        <Image
          className="w-[50px] h-[56px] ml-[18px]"
          src={launchApp}
          alt="home"
          width={50}
          height={56}
        ></Image>
      </div>
    </div>
  )
}

export default Header
