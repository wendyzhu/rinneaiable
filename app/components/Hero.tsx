export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-3 sm:py-4 md:py-5" aria-label="Hero section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Automating Complexity
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-3 sm:mb-4 leading-relaxed px-2">
            We provide high-end technical solutions to automate complex workflows. 
            We bridge the gap between manual labor and AI-driven efficiency.
          </p>
          <a 
            href="#solutions" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-1 sm:py-1 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            aria-label="Navigate to solutions section"
          >
            View Solutions
          </a>
        </div>
      </div>
    </section>
  )
}
