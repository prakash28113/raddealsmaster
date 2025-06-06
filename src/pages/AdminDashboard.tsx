
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminOverview from "@/components/admin/AdminOverview";
import CareersManager from "@/components/admin/CareersManager";
import BlogManager from "@/components/admin/BlogManager";
import ContactSubmissions from "@/components/admin/ContactSubmissions";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [adminUser, setAdminUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {

      
      try {
        // Check for local admin session first
        const localSession = localStorage.getItem("raddeals_admin_session");

        
        if (localSession) {
          const session = JSON.parse(localSession);

          
          if (session.expires_at > Date.now()) {

            setAdminUser(session.user);
            setIsLoading(false);
            return;
          } else {

            localStorage.removeItem("raddeals_admin_session");
          }
        }

        // Fallback to Supabase session

        const { data: { session } } = await supabase.auth.getSession();

        
        if (!session) {

          navigate("/admin/login");
          return;
        }


        setAdminUser(session.user);
      } catch (error) {
        console.error("Auth check error:", error);
        navigate("/admin/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {

      
      if (event === 'SIGNED_OUT' || !session) {

        localStorage.removeItem("raddeals_admin_session");
        navigate("/admin/login");
      } else if (session) {

        setAdminUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {

    localStorage.removeItem("raddeals_admin_session");
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-raddeals-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-raddeals-yellow mx-auto mb-4"></div>
          <p className="text-raddeals-text">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) {

    return null;
  }

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminOverview />;
      case "careers":
        return <CareersManager />;
      case "blog":
        return <BlogManager />;
      case "contacts":
        return <ContactSubmissions />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-raddeals-gray">
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 ml-64">
          <AdminNavbar adminUser={adminUser} onLogout={handleLogout} />
          <main className="p-6">
            {renderActiveComponent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
