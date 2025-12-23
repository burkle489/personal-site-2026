import HeroImage from "@/components/molecules/HeroImage"

const HomeHero = () => {
  return (
    <section className="min-h-screen bg-background z-10 flex flex-col gap-20 items-center justify-center font-display relative">
      <div className="gap-[clamp(12px,24px)] flex flex-col items-center justify-center">
        <div className="relative">
          <HeroImage />
          <h1 className="text-[clamp(128px,284px)] font-bold uppercase text-primary flex flex-col items-center justify-center text-center leading-[0.9] tracking-tighter">
            Tayler
          </h1>
          <h1 className="text-[clamp(128px,284px)] font-bold uppercase text-primary flex flex-col items-center justify-center text-center leading-[0.9] tracking-tighter">
            Burke
          </h1>
        </div>
        <p className="text-[clamp(14px,18px)] mb-0 leading-tight text-center font-medium uppercase font-sans text-secondary">
          providing real value since{" "}
          <span className="lowercase font-serif italic text-[clamp(12px,16px)]">
            c.2019
          </span>
        </p>
      </div>
      <div>
        <p className="text-[clamp(16px,24px)] max-w-lg text-center font-sans text-foreground">
          Hey! I&apos;m Tayler, a product-minded software engineer with a
          passion for building products that provide true value to real people.
        </p>
      </div>
    </section>
  )
}

export default HomeHero
