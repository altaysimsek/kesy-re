const FeatureSection = () => {
  return (
    <section id="features">
      <h3 className="transition hover:opacity-100 font-bold text-2xl text-white opacity-80">
        Features
      </h3>
      <div className="flex justify-between px-16 mt-5">
        <div className="flex flex-col items-center p-4 gap-4 h-80 rgBorder rounded-lg drop-shadow-md">
          <p className="text-[#81ECAE] font-medium">Custom Shortcuts</p>
          <p className="text-xs font-medium text-white/[.6] text-center">
            Create custom URLs that are easy
            <br />
            to remember and reflect your brand.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 gap-4 h-80 rgBorder rounded-lg drop-shadow-md">
          <p className="text-[#81ECAE] font-medium">Analytics</p>
          <p className="text-xs font-medium text-white/[.6] text-center">
            Track clicks and other engagement
            <br /> metrics to gain insights into your <br />
            audience&apos;s behavior.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 gap-4 h-80 rgBorder rounded-lg drop-shadow-md">
          <p className="text-[#81ECAE] font-medium">Superfast</p>
          <p className="text-xs font-medium text-white/[.6] text-center">
            Spend less time managing URLs <br />
            and more time growing your business.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
