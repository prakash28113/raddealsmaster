
import { Target, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Execution",
      description: "Every pixel and second counts"
    },
    {
      icon: Lightbulb,
      title: "Radical Creativity",
      description: "Bold ideas drive bold results"
    },
    {
      icon: Zap,
      title: "Built for Speed",
      description: "Timelines that match your ambition"
    }
  ];

  const team = [
    { name: "Prakash Mummidisetti", role: "Creative Director", bio: "Known for blending strategy with storytelling across digital design, branding, and motion graphics." },
    { name: "Anirudh J.", role: "Full-stack Developer", bio: "Frontend & backend excellence" },
    { name: "Chaitanya M.", role: "UI/UX Designer", bio: "Crafting intuitive, user-centered digital experiences that blend form with function seamlessly." },
    { name: "Harini ", role: "Ops Manager", bio: "Seamless project delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left side - Studio image placeholder */}
          <div className="animate-fade-in">
            <div className="w-full h-96 bg-raddeals-yellow/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-raddeals-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-dm-sans font-bold text-2xl text-raddeals-black">RD</span>
                </div>
                <p className="font-inter text-raddeals-text">Creative Studio</p>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
              Who We Are
            </h2>
            <p className="font-inter text-lg text-raddeals-text mb-8 leading-relaxed">
              RadDeals is a full-stack creative agency helping businesses launch, scale, and stay unforgettable. From social posts to film production, we deliver speed, precision, and visual brilliance.
            </p>
            <a
              href="#contact"
              className="bg-raddeals-yellow text-raddeals-black px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              Work With Us
            </a>
          </div>
        </div>

        {/* Our Core Beliefs */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
              Our Core Beliefs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-raddeals-black" />
                </div>
                <h4 className="font-dm-sans font-bold text-xl text-raddeals-black mb-3">
                  {value.title}
                </h4>
                <p className="font-inter text-raddeals-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
              Meet Our Team
            </h3>
            <p className="font-inter text-xl text-raddeals-text">
              A Team of Creators, Builders & Believers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-raddeals-gray p-6 rounded-2xl text-center hover:bg-raddeals-black hover:text-raddeals-yellow transition-all duration-300 hover:scale-105 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-raddeals-yellow rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="font-dm-sans font-bold text-2xl text-raddeals-black">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h4 className="font-dm-sans font-bold text-xl text-raddeals-black group-hover:text-raddeals-yellow mb-2">
                  {member.name}
                </h4>
                <p className="font-inter text-raddeals-text group-hover:text-raddeals-yellow/80 mb-3">
                  {member.role}
                </p>
                
                {/* Bio on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-inter text-sm text-raddeals-yellow">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
