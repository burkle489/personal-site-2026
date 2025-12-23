import SectionHeader from "@/components/atoms/SectionHeader"
import AboutCard from "@/components/molecules/AboutCard"
import {
  LightbulbFilamentIcon,
  UsersIcon,
  VectorThreeIcon,
} from "@phosphor-icons/react"

const HomeAbout = () => {
  return (
    <section className="z-10 relative bg-background">
      <div className="flex flex-col gap-4 max-w-5xl mx-auto py-12 ">
        <SectionHeader title="About" />
        <div className="grid grid-cols-2 px-4 gap-20">
          <div className="relative flex flex-col gap-4">
            <div className="h-fit w-full sticky top-20">
              <p className="text-2xl font-sans leading-relaxed text-secondary">
                My passion is building products that make people&apos;s lives
                easier, more productive and seamless. <br />
                User experience is at the core of everything I do.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-sans font-medium text-foreground">
                I am a Full-Stack Engineer with 6+ years of experience building
                production web apps using React, Next.js, TypeScript and
                Node.js. I have experience in full-stack architecture, database
                design, and API development.
              </p>
              <p className="text-xl font-sans font-medium text-foreground">
                I have led development teams and delivered scalable solutions
                for B2B and B2C platforms. I have a strong product mindset,
                translating business needs into user-focused technical
                solutions.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <AboutCard
                title="Agile"
                description="Rapid Discovery, Prototyping and Iteration"
                icon={
                  <VectorThreeIcon
                    size={80}
                    weight="regular"
                    className="text-background"
                  />
                }
              />
              <AboutCard
                title="Product-Minded"
                description="Business needs translated to user-focused solutions"
                icon={
                  <LightbulbFilamentIcon
                    size={80}
                    weight="regular"
                    className="text-background"
                  />
                }
              />
              <AboutCard
                title="Collaborative"
                description={`Working together to build great things`}
                icon={
                  <UsersIcon
                    size={80}
                    weight="regular"
                    className="text-background"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
