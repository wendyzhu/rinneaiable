import { Zap, Target, TrendingUp } from 'lucide-react'

export default function WhySection() {
  return (
    <section id="why" className="py-4 sm:py-6 md:py-8 bg-white" aria-labelledby="why-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6">
          <h2 id="why-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Why Rinne AIable</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            We design AI-powered automation, RAG chatbots, and industry-specific tools that help organizations scale operations without increasing headcount or operational complexity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Efficiency */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" /> 
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Efficiency</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Transform time-consuming manual processes into automated workflows that operate 24/7, 
              reducing operational costs and increasing productivity.
            </p>
          </div>

          {/* Precision */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Precision</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              AI-driven systems that deliver consistent, accurate results with minimal human intervention, 
              eliminating errors and ensuring quality at scale.
            </p>
          </div>

          {/* Scalability */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Scalability</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Solutions designed to grow with your business, handling increased volume and complexity 
              without proportional increases in resources or costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
