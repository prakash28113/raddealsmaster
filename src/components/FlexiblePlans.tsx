
import { Check } from "lucide-react";

const FlexiblePlans = () => {
  const features = [
    "Access to all services",
    "Dedicated project manager",
    "12-hour turnarounds",
    "AI enhancements",
    "Global timezone team",
    "Unlimited users, brands, storage",
  ];

  return (
    <section id="pricing" className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
            Flexible Plans for <span className="text-raddeals-yellow">Every Business</span>
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-4xl mx-auto mb-8">
            From simple graphic requests to video production and brand strategy — your budget becomes your creative playground.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Main Content */}
          <div className="animate-fade-in">
            <h3 className="font-dm-sans font-bold text-3xl md:text-4xl text-raddeals-black mb-6">
              Why Choose <span className="text-raddeals-yellow">Flexible?</span>
            </h3>
            
            <p className="font-inter text-lg text-raddeals-text mb-8 leading-relaxed">
              Every business has unique creative needs that change month to month. Our flexible approach means you're never locked into services you don't need, and you can scale up or down based on your current projects and goals.
            </p>

            <p className="font-inter text-lg text-raddeals-text leading-relaxed">
              Whether you need a quick social media refresh or a complete brand overhaul with video content, our subscription model adapts to your business rhythm.
            </p>
          </div>

          {/* Right Side - Features List */}
          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-raddeals-yellow/10 to-raddeals-black/5 rounded-2xl blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-dm-sans font-bold text-2xl text-raddeals-black mb-6">
                Included in All Plans
              </h4>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-raddeals-yellow rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <Check className="w-4 h-4 text-raddeals-black" />
                    </div>
                    <span className="font-inter text-raddeals-text leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-raddeals-yellow text-raddeals-black px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlexiblePlans;
