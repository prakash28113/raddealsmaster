
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const CultureValues = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Execution",
      description: "Every pixel and second counts",
      example: "We deliver pixel-perfect designs on time, every time"
    },
    {
      icon: Lightbulb,
      title: "Radical Creativity", 
      description: "Bold ideas drive bold results",
      example: "We push boundaries to create unforgettable experiences"
    },
    {
      icon: Users,
      title: "Empathetic Collaboration",
      description: "We listen, understand, and create together",
      example: "Every voice matters in our creative process"
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Always learning, always improving",
      example: "We embrace challenges as opportunities to excel"
    }
  ];

  return (
    <section className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
            Our Culture Values
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-2xl mx-auto">
            The principles that guide everything we do and shape who we are as a team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-raddeals-black" />
              </div>
              <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-3">
                {value.title}
              </h3>
              <p className="font-inter text-raddeals-text mb-4">
                {value.description}
              </p>
              
              {/* Hover reveal example */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-inter text-sm text-raddeals-yellow bg-raddeals-black px-4 py-2 rounded-lg">
                  {value.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureValues;
