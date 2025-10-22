export const StatsSection = () => {
  return (
    <section className="w-full bg-[#F7C35F]">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <div
          className="rounded-[7.2px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 py-8"
          style={{ background: 'var(--Secondary, #F7C35F)' }}
        >
          {/* Stat 1 */}
          <div className="text-center relative">
            <div className="text-3xl font-bold text-gray-900 mb-2">$20m</div>
            <div className="text-sm text-gray-800">Net Income generated</div>
            <div className="hidden md:block absolute top-3/4 -right-4 transform -translate-y-1/2 w-px h-8 bg-gray-700/30"></div>
          </div>

          {/* Stat 2 */}
          <div className="text-center relative">
            <div className="text-3xl font-bold text-gray-900 mb-2">$130m</div>
            <div className="text-sm text-gray-800">Income generated for our partners</div>
            <div className="hidden md:block absolute top-3/4 -right-4 transform -translate-y-1/2 w-px h-8 bg-gray-700/30"></div>
          </div>

          {/* Stat 3 */}
          <div className="text-center relative">
            <div className="text-3xl font-bold text-gray-900 mb-2">83</div>
            <div className="text-sm text-gray-800">Partner farmers and growers</div>
            <div className="hidden md:block absolute top-3/4 -right-4 transform -translate-y-1/2 w-px h-8 bg-gray-700/30"></div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-800">Staff recruited from local communities</div>
          </div>
        </div>
      </div>
    </section>
  );
};