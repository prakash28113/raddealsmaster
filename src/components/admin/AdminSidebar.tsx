
import { LayoutDashboard, Briefcase, FileText, Mail, LogOut } from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "careers", label: "Careers Manager", icon: Briefcase },
    { id: "blog", label: "Blog Manager", icon: FileText },
    { id: "contacts", label: "Contact Submissions", icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-raddeals-black text-white shadow-lg">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-dm-sans font-bold text-raddeals-yellow">
          RadDeals Admin
        </h2>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-raddeals-yellow text-raddeals-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon size={20} />
              <span className="font-inter">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;
