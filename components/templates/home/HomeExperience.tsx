import SectionHeader from "@/components/atoms/SectionHeader"

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    title: "Lead Product Engineer",
    company: "Flooencer - B2B Influencer Marketing SaaS",
    period: "2025 — Present",
    description:
      "Led full-stack development as sole engineer, rebuilding no-code application into production-ready platform using Next.js, TypeScript, Supabase, and tRPC. Designed scalable architecture for campaign management, influencer discovery, and analytics features.",
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Fluid Digital - Gaming & Entertainment",
    period: "2022 — Present",
    description:
      "Delivered end-to-end web applications for high-profile gaming clients including Tetris, Bandai Namco Mobile & PLAYERUNKNOWN Productions. Built responsive frontends with React, Next.js, and Tailwind, and RESTful APIs using Node.js and PostgreSQL.",
  },
  {
    title: "Web Developer",
    company: "Equator - Financial Services Platform",
    period: "2022 — 2022",
    description:
      "Developed React-based front-end features and integrated RESTful APIs for financial services web application.",
  },
  {
    title: "App Software Engineer",
    company: "AVAMAE - Multi-Industry Digital Solutions",
    period: "2020 — 2022",
    description:
      "Built and maintained web and mobile applications across healthcare, retail, and enterprise sectors. Worked in agile environment on both legacy codebases and greenfield projects.",
  },
  {
    title: "Optimization Web Developer",
    company: "WeTeachCRO - Conversion Rate Optimization",
    period: "2019 — 2020",
    description:
      "Implemented A/B testing frameworks and developed internal tools using JavaScript and jQuery.",
  },
]

const HomeExperience = () => {
  return (
    <section className="bg-background z-10 relative mb-[clamp(11rem,20rem)]">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto py-[clamp(32px,48px)]">
        <SectionHeader title="Experience" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 pb-12 last:border-b-0 border-b border-secondary/20"
            >
              <div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-secondary font-medium text-lg">
                  {exp.company}
                </p>
                <p className="text-secondary text-base mt-1">{exp.period}</p>
              </div>

              <p className="text-foreground font-medium leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeExperience
