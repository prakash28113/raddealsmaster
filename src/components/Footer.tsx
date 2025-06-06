
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Print & Media Design",
    "Motion Graphics",
    "Brand Identity",
    "Digital Campaigns"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "/",
      icon: Linkedin
    },
    {
      name: "Instagram", 
      href: "/",
      icon: Instagram
    },
    {
      name: "YouTube",
      href: "/",
      icon: Youtube
    }
  ];

  return (
    <footer className="bg-raddeals-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Raddeals-logo1.png" alt="RadDeals Logo" className="h-10 w-auto" />
              <span className="font-dm-sans font-bold text-3xl text-raddeals-yellow">
                RadDeals
              </span>
            </div>
            <p className="font-inter text-white/80 mb-6 max-w-md leading-relaxed">
              Design beyond imagination. We deliver cinematic creative services 
              that scale ambition and drive real business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-raddeals-yellow text-raddeals-black rounded-lg flex items-center justify-center hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dm-sans font-bold text-lg text-raddeals-yellow mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-white/80 hover:text-raddeals-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-dm-sans font-bold text-lg text-raddeals-yellow mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-white/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-white/60 text-sm">
              © {currentYear} RadDeals. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-inter text-white/60 hover:text-raddeals-yellow transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-inter text-white/60 hover:text-raddeals-yellow transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
