
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <svg width="32" height="24" viewBox="0 0 42 32" className="text-dropbox-blue" fill="currentColor">
                <path d="M10.5 0L0 6.5L10.5 13L21 6.5L10.5 0ZM31.5 0L21 6.5L31.5 13L42 6.5L31.5 0ZM0 19.5L10.5 26L21 19.5L10.5 13L0 19.5ZM31.5 13L21 19.5L31.5 26L42 19.5L31.5 13ZM10.5 28.5L21 35L31.5 28.5L21 22L10.5 28.5Z" />
              </svg>
              <span className="font-semibold text-lg">Dropbox Brand</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Our brand guidelines help define the Dropbox identity and ensure consistency across all touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Brand</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Guidelines</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Assets</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Logo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Templates</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Icons</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Typography</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">About</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Contact</a></li>
                <li><a href="/" className="text-gray-600 hover:text-dropbox-blue transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2023 Dropbox Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
