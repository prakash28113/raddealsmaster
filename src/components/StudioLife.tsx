
const StudioLife = () => {
  const photos = [
    { id: 1, alt: "Team collaboration session", span: "col-span-2 row-span-2" },
    { id: 2, alt: "Design workshop", span: "col-span-1 row-span-1" },
    { id: 3, alt: "Creative brainstorming", span: "col-span-1 row-span-2" },
    { id: 4, alt: "Team celebration", span: "col-span-2 row-span-1" },
    { id: 5, alt: "Studio workspace", span: "col-span-1 row-span-1" },
    { id: 6, alt: "Project presentation", span: "col-span-1 row-span-1" }
  ];

  const testimonials = [
    {
      quote: "The creative freedom and team spirit here is unmatched.",
      author: "Sneha R., Brand Strategist",
      position: { top: "20%", left: "15%" }
    },
    {
      quote: "Every day brings new challenges and growth opportunities.",
      author: "Ravi M., Full-stack Developer", 
      position: { top: "60%", right: "10%" }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
            Life at RadDeals
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-2xl mx-auto">
            Behind every great project is an amazing team. See what it's like to be part of the RadDeals family.
          </p>
        </div>

        {/* Photo Gallery with Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-4 grid-rows-4 gap-4 h-96 md:h-[600px]">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className={`${photo.span} bg-raddeals-yellow/20 rounded-2xl overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-raddeals-yellow rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="font-dm-sans font-bold text-raddeals-black">📸</span>
                    </div>
                    <p className="font-inter text-sm text-raddeals-text">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="absolute bg-raddeals-black text-raddeals-yellow p-6 rounded-2xl max-w-xs animate-scale-in hidden md:block"
              style={{ 
                ...testimonial.position,
                animationDelay: `${index * 0.3 + 0.8}s`
              }}
            >
              <p className="font-inter text-sm mb-3 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-inter text-xs text-raddeals-yellow/80">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioLife;
