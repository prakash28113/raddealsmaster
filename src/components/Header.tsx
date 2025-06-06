
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-raddeals-black/95 backdrop-blur-sm border-b border-raddeals-yellow/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <button 
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 bg-raddeals-yellow rounded-lg flex items-center justify-center">
            <img src="/Raddeals-logo1.png" alt="RadDeals Logo" className="h-8 w-auto" />
            </div>
            <span className="font-dm-sans font-bold text-2xl text-raddeals-yellow">
              RadDeals
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-white hover:text-raddeals-yellow transition-colors duration-300 font-inter ${
                  isActive(link.href) ? 'text-raddeals-yellow' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("/contact")}
              className="bg-raddeals-yellow text-raddeals-black px-6 py-2 rounded-lg font-inter font-medium hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-raddeals-yellow transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-raddeals-black/95 backdrop-blur-sm border-b border-raddeals-yellow/20">
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-white hover:text-raddeals-yellow transition-colors duration-300 font-inter text-left ${
                    isActive(link.href) ? 'text-raddeals-yellow' : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/contact")}
                className="bg-raddeals-yellow text-raddeals-black px-6 py-2 rounded-lg font-inter font-medium hover:bg-raddeals-yellow/90 transition-all duration-300 text-center mt-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
