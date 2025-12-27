const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-20 mb-4 md:mb-8 px-2">
      <h2 className="text-[clamp(28px,40px)] font-display font-semibold uppercase">
        {title}
      </h2>
      <div className="relative w-full">
        <div className="w-full h-1 bg-secondary opacity-30 relative rounded-full"></div>
        <div className="w-[clamp(40px,80px)] h-full bg-primary absolute top-0 right-0 z-10 rounded-full"></div>
      </div>
    </div>
  )
}

export default SectionHeader
