
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Blog {
  id: string;
  title: string;
  image_url: string | null;
  content: string;
  tags: string[];
  published: boolean;
  created_at: string;
}

const BlogGrid = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
    
    // Set up real-time subscription for blog updates
    const channel = supabase
      .channel('blog-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blogs'
        },
        () => {

          fetchBlogs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getUniqueCategories = () => {
    const categories = new Set<string>();
    articles.forEach(article => {
      article.tags?.forEach(tag => categories.add(tag));
    });
    return ["All", ...Array.from(categories)];
  };

  const filters = getUniqueCategories();
  
  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === "All" || article.tags?.includes(filter.toLowerCase());
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-raddeals-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-raddeals-yellow mx-auto mb-4"></div>
            <p className="text-raddeals-text">Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
            Latest Articles
          </h2>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-raddeals-text w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-raddeals-yellow/50 font-inter"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? "bg-raddeals-yellow text-raddeals-black"
                    : "bg-white text-raddeals-text hover:bg-raddeals-yellow/20 border border-raddeals-yellow"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div 
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="w-full h-48 bg-raddeals-yellow/20 flex items-center justify-center">
                {article.image_url ? (
                  <img 
                    src={article.image_url} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-raddeals-yellow rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="font-dm-sans font-bold text-raddeals-black">📄</span>
                    </div>
                    <p className="font-inter text-sm text-raddeals-text">Article Cover</p>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-1">
                    {article.tags?.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-raddeals-yellow/20 text-raddeals-black px-3 py-1 rounded-full font-inter font-medium text-sm border border-raddeals-yellow capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-raddeals-text font-inter text-sm">
                    {getReadTime(article.content)}
                  </span>
                </div>
                
                <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-3">
                  {article.title}
                </h3>
                
                <p className="font-inter text-raddeals-text mb-6">
                  {article.content.substring(0, 120)}...
                </p>
                
                <button className="bg-raddeals-yellow text-raddeals-black px-6 py-3 rounded-lg font-inter font-semibold hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 w-full">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-raddeals-text font-inter text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
