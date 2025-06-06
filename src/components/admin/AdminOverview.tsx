
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, FileText, Mail, TrendingUp } from "lucide-react";

const AdminOverview = () => {
  const [stats, setStats] = useState({
    totalJobs: 0,
    openJobs: 0,
    totalBlogs: 0,
    publishedBlogs: 0,
    totalContacts: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch jobs stats
      const { data: jobs } = await supabase.from("jobs").select("status");
      const totalJobs = jobs?.length || 0;
      const openJobs = jobs?.filter(job => job.status === "open").length || 0;

      // Fetch blogs stats
      const { data: blogs } = await supabase.from("blogs").select("published");
      const totalBlogs = blogs?.length || 0;
      const publishedBlogs = blogs?.filter(blog => blog.published).length || 0;

      // Fetch contacts stats
      const { data: contacts } = await supabase.from("contacts").select("id");
      const totalContacts = contacts?.length || 0;

      setStats({
        totalJobs,
        openJobs,
        totalBlogs,
        publishedBlogs,
        totalContacts,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const statCards = [
    {
      title: "Total Job Openings",
      value: stats.totalJobs,
      subtitle: `${stats.openJobs} Open Positions`,
      icon: Briefcase,
      color: "text-blue-600"
    },
    {
      title: "Blog Posts",
      value: stats.totalBlogs,
      subtitle: `${stats.publishedBlogs} Published`,
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Contact Submissions",
      value: stats.totalContacts,
      subtitle: "Total Inquiries",
      icon: Mail,
      color: "text-purple-600"
    },
    {
      title: "Growth Rate",
      value: "12%",
      subtitle: "This Month",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-dm-sans font-bold text-raddeals-black">
        Dashboard Overview
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-raddeals-text">
                  {card.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-raddeals-black">
                  {card.value}
                </div>
                <p className="text-xs text-raddeals-text">
                  {card.subtitle}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-raddeals-black">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-raddeals-text">New job posting: UI Designer</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-raddeals-text">Blog post published: Design Trends 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-raddeals-text">3 new contact submissions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-raddeals-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left p-2 rounded-lg hover:bg-raddeals-gray transition-colors">
                <span className="text-raddeals-text">📝 Create new blog post</span>
              </button>
              <button className="w-full text-left p-2 rounded-lg hover:bg-raddeals-gray transition-colors">
                <span className="text-raddeals-text">💼 Add job opening</span>
              </button>
              <button className="w-full text-left p-2 rounded-lg hover:bg-raddeals-gray transition-colors">
                <span className="text-raddeals-text">📧 Review contact submissions</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
