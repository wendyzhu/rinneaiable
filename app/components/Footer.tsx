export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#footerLogoGradient)"/>
                <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="white" opacity="0.9"/>
                <circle cx="20" cy="20" r="3" fill="#007BFF"/>
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#007BFF"/>
                    <stop offset="1" stopColor="#0056b3"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold">RINNE AIABLE LLC</span>
            </div>
            <p className="text-slate-400">
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
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 RINNE AIABLE LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
