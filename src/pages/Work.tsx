
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const WorkPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
