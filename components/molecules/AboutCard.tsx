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
    <div className=" sticky top-20 z-10">
      <div className="w-full h-12 absolute bottom-[calc(100%-12px)] bg-linear-to-t z-0 from-[rgb(242,206,174,0.2)] to-transparent left-0"></div>
      <div className="bg-primary h-full flex items-center rounded-xl px-10 py-6 relative z-10">
        <div className="flex-1">
          <h3 className="text-3xl font-display uppercase mb-1 font-semibold text-background">
            {title}
          </h3>
          <p className="text-background text-lg font-sans font-medium">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="mx-8 w-[2.5px] h-2/3 bg-[rgba(242,206,174,0.2)] rounded-full"></div>
        </div>
        <div className="relative flex items-center justify-end">{icon}</div>
      </div>
    </div>
  )
}

export default AboutCard
