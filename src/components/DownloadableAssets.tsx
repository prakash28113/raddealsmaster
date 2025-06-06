
import { Download } from "lucide-react";

const DownloadableAssets = () => {
  const assets = [
    {
      title: "Social Media Design Checklist",
      description: "Essential guidelines for creating scroll-stopping social content.",
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "How to Brief a Creative Team",
      description: "Complete framework for communicating your vision effectively.",
      type: "PDF Template", 
      size: "1.8 MB"
    },
    {
      title: "Brand Guidelines Template",
      description: "Professional template for documenting your brand standards.",
      type: "Design Kit",
      size: "4.2 MB"
    },
    {
      title: "Video Production Timeline",
      description: "Step-by-step planning guide for video projects of any scale.",
      type: "PDF Worksheet",
      size: "1.2 MB"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
            Free Resources
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-2xl mx-auto">
            Download our professional templates and guides to level up your creative process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assets.map((asset, index) => (
            <div 
              key={asset.title}
              className="bg-raddeals-gray p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-raddeals-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-raddeals-black" />
              </div>
              
              <h3 className="font-dm-sans font-bold text-lg text-raddeals-black mb-3 text-center">
                {asset.title}
              </h3>
              
              <p className="font-inter text-sm text-raddeals-text mb-4 text-center">
                {asset.description}
              </p>
              
              <div className="flex justify-between items-center mb-6 text-xs font-inter text-raddeals-text">
                <span>{asset.type}</span>
                <span>{asset.size}</span>
              </div>
              
              <button className="bg-raddeals-yellow text-raddeals-black px-6 py-3 rounded-lg font-inter font-semibold hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 w-full flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadableAssets;
