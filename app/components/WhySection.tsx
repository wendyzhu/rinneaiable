import { Zap, Target, TrendingUp } from 'lucide-react'

export default function WhySection() {
  return (
    <section id="why" className="py-6 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose RINNE AIABLE</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Engineering-first solutions that deliver measurable results
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Efficiency */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-blue-600" /> 
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Efficiency</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Transform time-consuming manual processes into automated workflows that operate 24/7, 
              reducing operational costs and increasing productivity.
            </p>
          </div>

          {/* Precision */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Precision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              AI-driven systems that deliver consistent, accurate results with minimal human intervention, 
              eliminating errors and ensuring quality at scale.
            </p>
          </div>

          {/* Scalability */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Scalability</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Solutions designed to grow with your business, handling increased volume and complexity 
              without proportional increases in resources or costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
