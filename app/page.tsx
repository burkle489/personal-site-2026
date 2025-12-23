"use client"

import HomeAbout from "@/components/templates/home/HomeAbout"
import HomeExperience from "@/components/templates/home/HomeExperience"
import HomeHero from "@/components/templates/home/HomeHero"
import Footer from "@/components/templates/footer/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans relative">
      <HomeHero />
      <HomeAbout />
      <HomeExperience />
      <Footer />
    </div>
  )
}
