import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"

export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const fontJetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
