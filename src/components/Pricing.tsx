
const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "₹15,000",
      period: "/month",
      description: "Perfect for growing businesses and startups",
      features: [
        "10 creative assets per month",
        "2 revisions per project",
        "Basic brand guidelines",
        "Email support",
        "Standard turnaround (5-7 days)"
      ],
      cta: "Subscribe Now",
      popular: false
    },
    {
      name: "Growth",
      price: "₹35,000",
      period: "/month",
      description: "For established businesses scaling up",
      features: [
        "25 creative assets per month",
        "Unlimited revisions",
        "Complete brand system",
        "Priority support",
        "Fast turnaround (3-5 days)",
        "Dedicated account manager",
        "Strategic consulting included"
      ],
      cta: "Subscribe Now",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited creative assets",
        "White-label solutions",
        "Custom brand systems",
        "24/7 priority support",
        "Same-day turnaround",
        "Dedicated creative team",
        "Advanced analytics & reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
            Transparent <span className="text-raddeals-yellow">Pricing</span>
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-3xl mx-auto">
            Choose the plan that fits your creative needs. All plans include our signature quality and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-raddeals-gray rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in ${
                plan.popular ? "ring-4 ring-raddeals-yellow shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-raddeals-yellow text-raddeals-black px-6 py-2 rounded-full font-inter font-semibold text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-dm-sans font-bold text-2xl text-raddeals-black mb-2">
                  {plan.name}
                </h3>
                <p className="font-inter text-raddeals-text mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="font-dm-sans font-bold text-4xl text-raddeals-black">
                    {plan.price}
                  </span>
                  <span className="font-inter text-raddeals-text">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 bg-raddeals-yellow rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-raddeals-black text-xs">✓</span>
                    </div>
                    <span className="font-inter text-raddeals-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-raddeals-yellow text-raddeals-black hover:bg-raddeals-yellow/90"
                    : "bg-raddeals-black text-white hover:bg-raddeals-black/90"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-raddeals-text">
            Need a custom solution? 
            <a href="#contact" className="text-raddeals-yellow hover:text-raddeals-black transition-colors ml-1">
              Contact our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
