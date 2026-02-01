import Image from 'next/image'
import { Stethoscope, MessageCircle, Building2, Handshake } from 'lucide-react'

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Featured Solutions</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Real-world applications of our automation expertise
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Website Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <Handshake className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white opacity-80" />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mr-2" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Digital Solutions</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
              Targeted website design and technical stewardship for businesses. We specialize in building digital storefronts and professional portals that understand your unique journey, managing everything from initial deployment to ongoing updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Custom AI</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Customer Service</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Industry-Specific</span>
              </div>
            </div>
          </div>
          
          {/* VAPilot Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <Image src="/images/vapilot_icon.png" alt="VAPilot Logo" width={80} height={80} 
                className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">VAPilot</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
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
          
          {/* Chatbot Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow sm:col-span-2 md:col-span-1">
            <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white opacity-80" />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mr-2" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Chatbots</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
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
