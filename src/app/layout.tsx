import type { Metadata } from "next"
import "../style/globals.css"
import Header from "@/components/header"
import BottomNotification from "@/components/bottomNatification"
import localFont from "next/font/local"

const myFont = localFont({
  src: [
    {
      path: "../lib/Pixeboy.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/PlaymegamesReguler-2OOee.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-lowercase",
})

export const metadata: Metadata = {
  title: "Alpha Clue",
  description: "Alpha Clue",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="max-w-[1920px] flex flex-col mx-auto my-0">
          <Header></Header>
          {children}
          <BottomNotification></BottomNotification>
        </div>
      </body>
    </html>
  )
}
