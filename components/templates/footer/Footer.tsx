"use client"

import { DiamondIcon } from "@phosphor-icons/react"
import Marquee from "react-fast-marquee"

const topSkills = [
  "React",
  "NEXTJS",
  "TypeScript",
  "Tailwind",
  "NODEJS",
  "PostgreSQL",
  "AI Automations",
]

const bottomSkills = [
  "Collaborative",
  "Leadership",
  "Communicative",
  "Adaptable",
  "Autonomous",
  "Agency",
]

const Footer = () => {
  return (
    <footer className="bg-background text-primary overflow-hidden fixed bottom-0 z-0 w-screen">
      <Marquee speed={75} direction="left" className="w-screen">
        {[...topSkills, ...topSkills].map((skill, index) => (
          <div
            key={index}
            className="text-[clamp(5rem,10rem)] leading-[0.95] flex items-center gap-[clamp(2rem,4rem)] font-display font-semibold tracking-tight uppercase mx-[clamp(1rem,2rem)]"
          >
            {skill}
            <DiamondIcon
              weight="fill"
              className="text-primary size-[clamp(3rem,6rem)]"
            />
          </div>
        ))}
      </Marquee>

      <Marquee speed={75} direction="right" className="w-screen">
        {[...bottomSkills, ...bottomSkills].map((skill, index) => (
          <div
            key={index}
            className="text-[clamp(5rem,10rem)] leading-[0.95] flex items-center gap-[clamp(2rem,4rem)] font-display font-semibold tracking-tight uppercase mx-[clamp(1rem,2rem)]"
          >
            {skill}
            <DiamondIcon
              weight="fill"
              className="text-primary size-[clamp(3rem,6rem)]"
            />
          </div>
        ))}
      </Marquee>
    </footer>
  )
}

export default Footer
