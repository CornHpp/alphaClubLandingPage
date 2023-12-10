"use client"
import React from "react"
import Image from "next/image"
import Tip1 from "@/assets/home/Tip1.png"
import blackArrowIcon from "@/assets/home/blackArrowIcon.png"
import Tip2 from "@/assets/home/Tip2.png"
import Tip3 from "@/assets/home/Tip3.png"
import Tip4 from "@/assets/home/Tip4.png"
import alphaClueIcon2 from "@/assets/home/alphaClueIcon2.png"
import x from "@/assets/home/X.png"
import discard from "@/assets/home/discard.png"
import telegram from "@/assets/home/telegram.png"
import x2 from "@/assets/home/2.png"

const HomeContent: React.FC = () => {
  return (
    <div className="h-full mx-auto flex flex-col  py-[20px]">
      <div className="text-[24px] mx-auto w-[90%]  mt-[20px] border-[6px] rounded-2xl border-[#000]  relative min-h-[326px] bg-white bg-opacity-80 flex justify-between items-center">
        <Image
          className=""
          src={Tip1}
          width={325}
          height={325}
          alt="alphaClue alpha-clue"
        ></Image>
        <div className=" px-[38px]  relative flex flex-col  ">
          <div className="text-[44px]">Bitcoin-Ethereum Omnichain</div>
          <div className="italic">
            <div className="font-lowerCase">
              Alpha Club is the pioneering social app for the Bitcoin-Ethereum
              Omnichain.{" "}
            </div>
            <div className="">
              Our OG Pass will be issued within the Bitcoin ecosystem, while our
              smart contracts will operate within the Ethereum ecosystem.{" "}
            </div>
            <div className="">
              Our tokens will be bridgeable between BRC20 and ERC20.{" "}
            </div>
            <div className="">
              In this manner, our ecosystem harnesses the fairness of the
              Bitcoin ecosystem and the Turing completeness of the Ethereum
              ecosystem, uniting the two major realms of the crypto world for a
              collaborative future.
            </div>
          </div>
        </div>
      </div>
      <div className="text-[24px] mx-auto w-[90%]  mt-[50px] border-[6px] rounded-2xl border-[#000]  relative min-h-[326px] bg-white bg-opacity-80 flex justify-between items-center">
        <div className="  px-[38px] relative flex flex-col ">
          <div className="text-[44px]">Seat-Limited Voice Room</div>
          <div className="italic">
            <div className="">
              There are some alphas that should be kept within a small circle of
              frens...
            </div>
            <div className="mt-[10px]">
              e help to price discover the value of those circles through our
              seat-limited voice rooms.
            </div>
            <div className="mt-[10px]">
              Bid in for the learnings, bid out for the earnings.
            </div>
            <div className="mt-[10px]">
              Enter early for a higher potential upside, enter later for a
              higher chance of landing an exclusive spot.
            </div>
          </div>
        </div>
        <Image
          className=""
          src={Tip2}
          width={350}
          height={350}
          alt="alphaClue alpha-clue"
        ></Image>
      </div>
      <div className="text-[24px] mx-auto w-[90%]  mt-[50px] border-[6px] rounded-2xl border-[#000]  relative min-h-[326px] bg-white bg-opacity-80 flex justify-between items-center">
        <Image
          className=""
          src={Tip3}
          width={325}
          height={325}
          alt="alphaClue alpha-clue"
        ></Image>
        <div className=" px-[38px]  relative flex flex-col">
          <div className="text-[44px]">Bonding Curve + Sliding Bids</div>
          <div className="italic">
            <div className="">
              Alpha Club is a bonding-curve-based social app featuring an
              automatic profit-taking mechanism.
            </div>
            <div className="">
              We have creatively integrated the Bonding Curve with a Bidding
              system, introducing the concept of Sliding Bids.
            </div>
            <div className="">
              Here, prices fluctuate with the number of bidders, and earlier
              bidders replaced by higher offers automatically earn profits.
            </div>
            <div className="">
              Utilizing this "automatic market-making mechanism," we have
              successfully addressed the liquidity issues faced by traditional
              Web3 Social platforms with no counterparty risk against protocols,
              presenting a credible and attractive solution.
            </div>
          </div>
        </div>
      </div>
      <div className="text-[24px] mx-auto w-[90%]  mt-[50px] border-[6px] rounded-2xl border-[#000]  relative min-h-[326px] bg-white bg-opacity-80 flex justify-between items-center">
        <div className="  px-[38px] relative flex flex-col ">
          <div className="text-[44px]">Raid Your Alpha Tickers</div>
          <div className="italic">
            <div className="">
              Alpha Club generates a daily popularity leaderboard based on the
              Tickers associated with the Spaces you create (will soon include
              text streams and "Raiding Inscriptions").
            </div>
            <div className="mt-[10px]">
              Create content for your favorite inscriptions, tokens, and
              memecoins, and propel them up the rankings
            </div>
            <div className="mt-[10px]">
              See who becomes the market's favorite!
            </div>
          </div>
        </div>
        <Image
          className=""
          src={Tip4}
          width={325}
          height={325}
          alt="alphaClue alpha-clue"
        ></Image>
      </div>

      <div
        className="w-[300px] mx-auto flex items-center flex-col
      mt-[130px]"
      >
        <Image src={alphaClueIcon2} alt="" width={103} height={56}></Image>

        <div
          className="flex justify-between mt-[30px] px-[14px] py-[7px] 
          w-[220px] rounded-[32px]
          cursor-pointer
          bg-[#101324]"
        >
          <Image
            onClick={() => {
              window.open("https://twitter.com/tryalpha_club")
            }}
            src={x}
            alt=""
            width={32}
            height={32}
          ></Image>
          <Image
            onClick={() => {
              window.open("https://discord.com/invite/YCv9q5dn5w ")
            }}
            src={discard}
            alt=""
            width={32}
            height={32}
          ></Image>
          <Image
            onClick={() => {
              window.open("https://medium.com/@tryalpha_club")
            }}
            src={x2}
            alt=""
            width={32}
            height={32}
          ></Image>
          <Image
            onClick={() => {
              window.open("https://t.me/tryalphaclub")
            }}
            src={telegram}
            alt=""
            width={32}
            height={32}
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
