"use client"

import useMousePosition from "@/hooks/useMousePosition"
import useWindowSize from "@/hooks/useWindowSize"
import Image from "next/image"

const HeroImage = () => {
  const { x, y } = useMousePosition()
  const { width, height } = useWindowSize()

  // Calculate offset from center of screen for image mouse movement
  const offsetX = x !== null && width ? (x - width / 2) * 0.02 : 0
  const offsetY = y !== null && height ? (y - height / 2) * 0.02 : 0

  return (
    <Image
      style={{
        transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + 12px + ${offsetY}px))`,
      }}
      src="/images/hero-pic-cropped.jpg"
      alt="Hero Background"
      width={240}
      height={300}
      className="rounded-4xl absolute top-1/2 left-1/2 shadow-[0px_0px_20px_rgba(0,0,0,0.3)]"
    />
  )
}

export default HeroImage
