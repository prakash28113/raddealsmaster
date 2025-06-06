
const FeaturedArticle = () => {
  const featuredPost = {
    title: "Design Trends to Watch in 2025",
    summary: "From AI-enhanced creativity to sustainable design practices, discover the trends shaping the future of digital design.",
    category: "Design",
    readTime: "5 min read",
    featured: true
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-raddeals-gray rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-raddeals-yellow text-raddeals-black px-4 py-2 rounded-full font-inter font-medium text-sm">
                  Featured
                </span>
                <span className="text-raddeals-text font-inter text-sm">
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
                {featuredPost.title}
              </h2>
              
              <p className="font-inter text-lg text-raddeals-text mb-8">
                {featuredPost.summary}
              </p>
              
              <button className="bg-raddeals-yellow text-raddeals-black px-8 py-4 rounded-lg font-inter font-semibold hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105">
                Read Article
              </button>
            </div>
            
            <div className="w-full h-80 bg-raddeals-yellow/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-raddeals-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-dm-sans font-bold text-2xl text-raddeals-black">📖</span>
                </div>
                <p className="font-inter text-raddeals-text">Featured Article Cover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
