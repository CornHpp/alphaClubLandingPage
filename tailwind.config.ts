import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // "whitelist-taskbg": "url('~@/assets/whitelist/taskBg.png')",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "finish-mintbg1": "url('~@/assets/home/mint.png')",
        "finish-mintbg2": "url('~@/assets/home/publicMint.png')",
      },
      fontFamily: {
        lowerCase: ["var(--font-lowercase)"],
      },
    },
  },
  plugins: [],
}
export default config
