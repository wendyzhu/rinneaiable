import { FileText, Stethoscope, MessageCircle, Building2 } from 'lucide-react'

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Solutions</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-world applications of our automation expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* VAPilot Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <FileText className="w-20 h-20 text-white opacity-80" />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-slate-900">VAPilot</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                An automated system for JVIR editors that generates Visual Abstracts for medical articles. 
                Streamlines the editorial workflow by transforming complex research into clear, 
                visual summaries that enhance reader comprehension.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Medical Publishing</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI Automation</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Visual Abstracts</span>
              </div>
            </div>
          </div>

          {/* Enterprise Chatbots Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <MessageCircle className="w-20 h-20 text-white opacity-80" />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-teal-600 mr-2" />
                <h3 className="text-2xl font-bold text-slate-900">Enterprise Chatbots</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Custom-built customer service AI for specialized industries. From server rack manufacturers 
                to niche B2B sectors, we create intelligent chatbots that understand industry-specific 
                terminology and provide accurate, contextual support.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Custom AI</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Customer Service</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Industry-Specific</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
