
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import FeaturedArticle from "@/components/FeaturedArticle";
import BlogGrid from "@/components/BlogGrid";
import DownloadableAssets from "@/components/DownloadableAssets";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <FeaturedArticle />
      <BlogGrid />
      <DownloadableAssets />
      <Footer />
    </div>
  );
};

export default Blog;
