"use client"

import { DiamondIcon } from "@phosphor-icons/react"
import Marquee from "react-fast-marquee"

const topSkills = ["React", "NEXTJS", "TypeScript", "Tailwind", "NODEJS"]

const bottomSkills = [
  "Collaborative",
  "Leadership",
  "Communicative",
  "Adaptable",
  "Autonomous",
]

const Footer = () => {
  return (
    <footer className="bg-background text-primary overflow-hidden fixed bottom-0 z-0 w-screen">
      <Marquee speed={75} direction="left" className="w-screen">
        {[...topSkills, ...topSkills].map((skill, index) => (
          <div
            key={index}
            className="text-[10rem] leading-[0.95] flex items-center gap-16 font-display font-semibold tracking-tight uppercase mx-8"
          >
            {skill}
            <DiamondIcon size={64} weight="fill" className="text-primary" />
          </div>
        ))}
      </Marquee>

      <Marquee speed={75} direction="right" className="w-screen">
        {[...bottomSkills, ...bottomSkills].map((skill, index) => (
          <div
            key={index}
            className="text-[10rem] leading-[0.95] flex items-center gap-16 font-display font-semibold tracking-tight uppercase mx-8"
          >
            {skill}
            <DiamondIcon size={64} weight="fill" className="text-primary" />
          </div>
        ))}
      </Marquee>
    </footer>
  )
}

export default Footer
