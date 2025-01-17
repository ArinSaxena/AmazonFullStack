import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: "Get to Know Us",
      links: ["About Us", "Careers", "Press Releases", "Amazon Cares"],
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Amazon Global Selling",
        "Become an Affiliate",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Your Account",
        "Returns & Replacements",
        "Help",
        "Shipping Rates & Policies",
      ],
    },
  ];

  const additionalLinks = [
    {
      title: "AbeBooks",
      description: "Books, art & collectibles",
    },
    {
      title: "Amazon Web Services",
      description: "Scalable Cloud Computing Services",
    },
    {
      title: "Audible",
      description: "Download Audiobooks",
    },
    {
      title: "IMDb",
      description: "Movies, TV & Celebrities",
    },
  ];

  return (
    <div className="bg-gray-800 text-white">
      {/* Back to Top Button */}
      <div
        className="flex items-center justify-center py-4 bg-gray-700 cursor-pointer hover:bg-gray-700"
        onClick={handleScrollToTop}
      >
        Back to top
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-4">{section.title}</h5>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href="#" className="text-sm hover:text-gray-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Links */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {additionalLinks.map((item, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-4">{item.title}</h5>
              <p className="text-sm hover:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-6 border-t border-gray-700">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo and Buttons */}
            <div className="flex items-center gap-4">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                className="h-10 w-auto"
              />
              <button className="h-10 w-24 border-2 border-gray-400 rounded-md text-sm">
                English
              </button>
              <button className="h-10 w-24 border-2 border-gray-400 rounded-md text-sm">
                India
              </button>
            </div>

            {/* Footer Links */}
            <div className="flex gap-4">
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
          <div className="text-center text-sm mt-4">
            &copy; 2025 Your Company. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
