
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface AdminNavbarProps {
  adminUser: { email: string };
  onLogout: () => void;
}

const AdminNavbar = ({ adminUser, onLogout }: AdminNavbarProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-dm-sans font-bold text-raddeals-black">
          Admin Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-raddeals-text font-inter">
            Welcome, {adminUser.email}
          </span>
          <Button
            onClick={onLogout}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
