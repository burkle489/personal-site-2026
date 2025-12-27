const AboutCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => {
  return (
    <div className=" sticky top-20 z-10 w-full max-w-xl mx-auto">
      <div className="w-full  h-12 absolute bottom-[calc(100%-12px)] bg-linear-to-t z-0 from-[rgb(242,206,174,0.2)] to-transparent left-0"></div>
      <div className="bg-primary  h-32  flex items-center rounded-xl px-6 md:px-10 py-4 md:py-6 relative z-10">
        <div className="flex-1">
          <h3 className="text-[clamp(20px,30px)] font-display uppercase md:mb-1 font-semibold text-background">
            {title}
          </h3>
          <p className="text-background text-[clamp(16px,18px)] font-sans font-medium">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="mx-[clamp(16px,32px)] w-[2.5px] h-2/3 bg-[rgba(242,206,174,0.2)] rounded-full"></div>
        </div>
        <div className="relative flex items-center justify-end w-[clamp(3rem,5rem)] h-[clamp(3rem,5rem)]">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default AboutCard
