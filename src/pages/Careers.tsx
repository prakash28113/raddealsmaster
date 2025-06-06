
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHero from "@/components/CareersHero";
import OpenRoles from "@/components/OpenRoles";
import StudioLife from "@/components/StudioLife";
import CultureValues from "@/components/CultureValues";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CareersHero />
      <OpenRoles />
      <StudioLife />
      <CultureValues />
      <Footer />
    </div>
  );
};

export default Careers;
