export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Upper Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Column - Shop Branding and App Downloads */}
          <div className="lg:col-span-1 space-y-6">
            {/* Shop Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">sh</span>
              <div className="w-6 h-6 bg-purple-600"></div>
              <span className="text-3xl font-bold text-gray-900">p</span>
            </div>
            
            {/* Mission Statement */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Shop is the next step on our mission to make commerce better for everyone.
            </p>
            
            {/* App Download Section */}
            <div className="flex items-start space-x-4">
              {/* QR Code */}
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-900 rounded flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* App Store Buttons */}
              <div className="space-y-3">
                {/* App Store Button */}
                <button className="flex items-center space-x-3 bg-gray-900 text-white rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </button>
                
                {/* Google Play Button */}
                <button className="flex items-center space-x-3 bg-gray-900 text-white rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Columns - Information, Social, Legal */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Information Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Shop Pay</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Help center</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">For brands</a></li>
              </ul>
            </div>
            
            {/* Social Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">X (Twitter)</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Do Not Sell or Share My Personal Information</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Powered by Shopify */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>Powered by</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                  </svg>
                </div>
                <span className="font-medium text-gray-900">shopify</span>
              </div>
            </div>
            
            {/* Language */}
            <div className="text-gray-600 text-sm">
              <button className="hover:text-gray-900 transition-colors">Language</button>
            </div>
            
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © Shopify Inc. 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

