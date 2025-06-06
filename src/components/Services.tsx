
import { Palette, Video, Megaphone, Globe, Camera, Code, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Digital Design",
      description: "UI, social media, and web design that captures attention and drives engagement.",
      deliverables: "UI/UX, Social Graphics, Web Assets"
    },
    {
      icon: Globe,
      title: "Print & Media Design",
      description: "Brochures, ads, and signage that make lasting impressions in the physical world.",
      deliverables: "Brochures, Ads, Signage, Print Materials"
    },
    {
      icon: Video,
      title: "Video & Animation",
      description: "Ads, explainers, and reels that bring your brand story to life with motion.",
      deliverables: "Video Ads, Explainers, Motion Graphics"
    },
    {
      icon: Megaphone,
      title: "Content & Strategy",
      description: "Messaging, copy, and taglines that resonate with your target audience.",
      deliverables: "Copywriting, Brand Messaging, Strategy"
    },
    {
      icon: Camera,
      title: "Photography & Visuals",
      description: "Professional shoots, editing, and retouching for stunning visual content.",
      deliverables: "Product Shoots, Editing, Retouching"
    },
    {
      icon: Code,
      title: "Development",
      description: "Websites and landing pages that convert visitors into customers.",
      deliverables: "Websites, Landing Pages, Web Apps"
    },
    {
      icon: Film,
      title: "Rad Studios",
      description: "Full film production and creative direction for premium content.",
      deliverables: "Film Production, Creative Direction"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
            Explore Our Creative <span className="text-raddeals-yellow">Verticals</span>
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-3xl mx-auto">
            Tailored teams. Specialized output. Cinematic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-raddeals-gray p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-raddeals-yellow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-raddeals-black" />
                </div>
              </div>
              
              <h3 className="font-dm-sans font-bold text-2xl text-raddeals-black mb-4">
                {service.title}
              </h3>
              
              <p className="font-inter text-raddeals-text mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-inter text-sm text-raddeals-yellow font-semibold mb-2">
                  Deliverables:
                </p>
                <p className="font-inter text-sm text-raddeals-text">
                  {service.deliverables}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
