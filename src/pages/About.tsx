
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const founders = [
    {
      id: 1,
      name: "Prakash Mummidisetti",
      role: "Founder & Creative Director",
      photo: "/api/placeholder/300/300",
      bio: "With over 5 years in design, Prakash leads our creative vision and ensures every project delivers exceptional visual storytelling.",
      linkedin: "https://linkedin.com/in/arjunsharma",
      portfolio: "https://arjunsharma.design"
    },
    {
      id: 2,
      name: "Venkata Lakshmikanth Avadhanula",
      role: "Co-Founder & Strategy Director",
      photo: "/api/placeholder/300/300",
      bio: "Lakshmikanth brings strategic thinking and business acumen, helping brands connect with their audiences through data-driven creative solutions.",
      linkedin: "https://linkedin.com/in/priyapatel",
      portfolio: "https://priyapatel.co"
    },
    {
      id: 3,
      name: "Sk Md Khaza Mohiddin",
      role: "Co-Founder & Technical Director",
      photo: "/api/placeholder/300/300",
      bio: "Khaza ensures our creative visions come to life with cutting-edge technology and seamless user experiences across all platforms.",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      portfolio: "https://rajeshkumar.dev"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-raddeals-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-dm-sans font-bold text-5xl md:text-6xl text-white mb-6">
              Meet Our <span className="text-raddeals-yellow">Founders</span>
            </h1>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The visionary minds behind RadDeals who bring together creativity, strategy, 
              and technology to deliver exceptional brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-raddeals-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={founder.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-raddeals-yellow flex items-center justify-center mx-auto mb-4">
                    <span className="font-dm-sans font-bold text-raddeals-black text-3xl">
                      {founder.name.split(' ')[0][0]}{founder.name.split(' ')[founder.name.split(' ').length - 1][0]}
                    </span>
                  </div>
                  <h3 className="font-dm-sans font-bold text-2xl text-raddeals-black mb-2">
                    {founder.name}
                  </h3>
                  <p className="font-inter text-raddeals-yellow font-semibold">
                    {founder.role}
                  </p>
                </div>
                
                <p className="font-inter text-raddeals-text leading-relaxed mb-6">
                  {founder.bio}
                </p>
                
                {/* <div className="flex gap-3">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-raddeals-black text-white py-2 px-4 rounded-lg font-inter font-medium text-center hover:bg-raddeals-black/90 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={founder.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-raddeals-yellow text-raddeals-black py-2 px-4 rounded-lg font-inter font-medium text-center hover:bg-raddeals-yellow/90 transition-colors duration-300"
                  >
                    Portfolio
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-8">
              Our <span className="text-raddeals-yellow">Mission</span>
            </h2>
            <p className="font-inter text-xl text-raddeals-text leading-relaxed mb-8">
              At RadDeals, we believe in the power of exceptional design to transform businesses 
              and create meaningful connections between brands and their audiences. Our mission is 
              to deliver creative solutions that not only look stunning but drive real business results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-raddeals-black">💡</span>
                </div>
                <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-2">Innovation</h3>
                <p className="font-inter text-raddeals-text">Pushing creative boundaries with cutting-edge design solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-raddeals-black">🤝</span>
                </div>
                <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-2">Partnership</h3>
                <p className="font-inter text-raddeals-text">Building lasting relationships through collaborative excellence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-raddeals-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-raddeals-black">📈</span>
                </div>
                <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-2">Results</h3>
                <p className="font-inter text-raddeals-text">Delivering measurable impact that drives business growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
