
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "RadDeals took our campaign visuals to cinematic heights! Their attention to detail and creative vision exceeded all expectations.",
      author: "Renu Sharma",
      role: "Brand Strategist",
      company: "TechVision"
    },
    {
      id: 2,
      quote: "Working with RadDeals transformed our entire brand identity. The results speak for themselves - 300% increase in brand recognition.",
      author: "Arjun Patel",
      role: "Marketing Director",
      company: "GrowthCorp"
    },
    {
      id: 3,
      quote: "The team's creative strategy and execution helped us launch our product with unprecedented success. Truly world-class work.",
      author: "Priya Singh",
      role: "Founder & CEO",
      company: "InnovateLabs"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  // Note: Infinite scroll for logos will be handled by CSS animation

  return (
    <section className="py-20 bg-raddeals-black w-full">
      <div className="w-full px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-yellow mb-6">
            Trusted by Bold Brands
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
            We've powered 50+ visionaries and changemakers with designs that drive results.
          </p>
        </div>

        {/* Testimonial Carousel - Full Width */}
        <div className="w-full">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <blockquote className="text-center">
                    <p className="font-inter text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed italic max-w-5xl mx-auto">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mb-4">
                        <span className="font-dm-sans font-bold text-raddeals-black text-xl">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-dm-sans font-bold text-xl text-raddeals-yellow">
                        {testimonial.author}
                      </h4>
                      <p className="font-inter text-white/70">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? "bg-raddeals-yellow" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos - Infinite Scroll */}
        <div className="mt-20 w-full overflow-hidden">
          {/* Apply animation to this div */}
          <div className="flex items-center opacity-50 animate-infinite-scroll w-fit space-x-8">
            {/* Duplicate your logo elements here for infinite scroll effect */}
            {/* Example with placeholders (replace with your img tags) */}
            {[...Array(6)].map((_, i) => (
              <div key={`logo-1-${i}`} className="flex-shrink-0 w-40 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="font-dm-sans font-bold text-white text-sm">BRAND {i + 1}</span>
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`logo-2-${i}`} className="flex-shrink-0 w-40 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="font-dm-sans font-bold text-white text-sm">BRAND {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
