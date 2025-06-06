import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlexiblePlans from "@/components/FlexiblePlans";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* The FlexiblePlans component will be rendered here */}
        <FlexiblePlans />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
