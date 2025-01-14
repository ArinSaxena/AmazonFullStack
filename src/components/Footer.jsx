import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="flex items-center space-x-6">Back to top</div>
      <div className="container mx-auto px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Get to Know Us</h5>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Amazon Cares
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Connect with Us</h5>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Make Money with Us</h5>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Sell under Amazon Accelerator
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Amazon Global Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Become an Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Let Us Help You</h5>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Returns & Replacements
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Shipping Rates & Policies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="flex items-center justify-center sm:flex-wrap sm:justify-center border-t border-gray-400 py-6">
            <div className="flex items-center space-x-6">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </div>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div>
              <h5 className="text-lg font-semibold mb-4">AbeBooks</h5>
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-gray-400">
                    Books, art & collectibles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">
                Amazon Web Services
              </h5>
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-gray-400">
                    Scalable Cloud Computing Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Audible</h5>
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-gray-400">
                    Download Audiobooks
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">IMDb</h5>
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-gray-400">
                    Movies, TV & Celebrities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 text-center text-sm">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="text-sm hover:text-gray-400">
                Privacy
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                Terms
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
