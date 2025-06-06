
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const OpenRoles = () => {
  const [filter, setFilter] = useState("All");
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("status", "open")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRoles(data || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      setLoading(false);
    }
  };

  const filters = ["All", "Design", "Video", "Development"];
  
  const filteredRoles = filter === "All" 
    ? roles 
    : roles.filter(role => role.department === filter);

  if (loading) {
    return (
      <section className="py-20 bg-raddeals-gray">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="animate-pulse">Loading job openings...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl text-raddeals-black mb-6">
            Open Roles
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? "bg-raddeals-yellow text-raddeals-black"
                    : "bg-white text-raddeals-text hover:bg-raddeals-yellow/20"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoles.map((role, index) => (
            <div 
              key={role.id}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-3">
                {role.role}
              </h3>
              <div className="flex gap-4 mb-4 text-sm font-inter text-raddeals-text">
                <span>{role.location}</span>
                <span>•</span>
                <span>Full-time</span>
              </div>
              <p className="font-inter text-raddeals-text mb-6">
                {role.description}
              </p>
              <button className="bg-raddeals-yellow text-raddeals-black px-6 py-3 rounded-lg font-inter font-semibold hover:bg-raddeals-yellow/90 transition-all duration-300 hover:scale-105 w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredRoles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-raddeals-text text-lg">
              No open positions available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenRoles;
