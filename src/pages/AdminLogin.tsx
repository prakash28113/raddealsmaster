
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@raddeals.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      
      // Try Supabase auth first
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });



      if (!error && data.user) {
        // Store admin session
        localStorage.setItem("raddeals_admin_session", JSON.stringify({
          user: { email: data.user.email },
          expires_at: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        }));
        
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard!",
        });
        

        navigate("/admin", { replace: true });
        return;
      }

      // If we get here, login failed
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please check your email and password.",
        variant: "destructive",
      });

    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setIsResetting(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        "connect.raddeals@gmail.com",
        {
          redirectTo: `${window.location.origin}/admin/reset-password`
        }
      );

      if (error) {
        toast({
          title: "Info",
          description: "For password reset, please contact support.",
        });
      } else {
        toast({
          title: "Reset Link Sent",
          description: "Reset link sent to admin@raddeals.com",
        });
      }
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-raddeals-gray flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/Raddeals-logo.png" alt="RadDeals Logo" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-dm-sans font-bold text-raddeals-black">
            Admin Login
          </CardTitle>
          <p className="text-raddeals-text">Sign in to RadDeals Dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-raddeals-text mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@raddeals.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-raddeals-text mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-raddeals-text hover:text-raddeals-black"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
          
            </div>
            
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={isResetting}
                className="text-sm text-raddeals-yellow hover:text-raddeals-yellow/80 transition-colors"
              >
                {isResetting ? "Sending..." : "Forgot Password?"}
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-raddeals-yellow text-raddeals-black hover:bg-raddeals-yellow/90"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
