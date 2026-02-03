import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-3 sm:mb-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <Image 
                src="/images/rinne_icon.png" 
                alt="RINNE AIABLE LLC Logo" 
                width={35} 
                height={30} 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <span className="text-base sm:text-xl font-bold">RINNE AIABLE LLC</span>
            </div>
            <p className="text-sm sm:text-base text-slate-400">
              Automating complexity through high-end technical solutions and AI-driven efficiency.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#why" className="hover:text-blue-400 transition-colors">Why Us</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Workflow Automation</li>
              <li>AI Solutions</li>
              <li>Custom Development</li>
              <li>Enterprise Integration</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-4 text-center text-slate-400">
          <p>&copy; 2026 RINNE AIABLE LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
