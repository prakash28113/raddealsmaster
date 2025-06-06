
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-raddeals-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-raddeals-yellow rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-raddeals-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-raddeals-yellow/20 rounded-full blur-xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 right-1/3 w-16 h-20 bg-raddeals-yellow/10 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-16 bg-raddeals-yellow/10 rounded-lg transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="font-dm-sans font-bold text-5xl md:text-7xl lg:text-8xl text-raddeals-yellow mb-6 leading-tight">
            Design Beyond
            <br />
            <span className="text-white">Imagination</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            RadDeals delivers full-stack creative services — from bold banners to story-driven video campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-raddeals-yellow text-raddeals-black px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-raddeals-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-raddeals-yellow rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
