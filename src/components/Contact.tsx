
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 30) {
      newErrors.message = "Message must be at least 30 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contacts")
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          }
        ]);

      if (error) {
        throw error;
      }

      // Success
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-raddeals-yellow">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
              Let's Create Something
              <br />
              <span className="text-raddeals-black">Amazing Together</span>
            </h2>
            
            <p className="font-inter text-xl text-raddeals-black/80 mb-8 leading-relaxed">
              Ready to elevate your brand? Get in touch and let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-raddeals-black rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-raddeals-yellow" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-raddeals-black">Email</p>
                  <p className="font-inter text-raddeals-black/70">connect@raddeals.in</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-raddeals-black rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-raddeals-yellow" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-raddeals-black">Phone</p>
                  <p className="font-inter text-raddeals-black/70">+91 7981524909</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-raddeals-black rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-raddeals-yellow" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-raddeals-black">Location</p>
                  <p className="font-inter text-raddeals-black/70">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter font-medium text-raddeals-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-raddeals-yellow transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-inter">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-inter font-medium text-raddeals-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-raddeals-yellow transition-all ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-inter">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-inter font-medium text-raddeals-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-raddeals-yellow transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us about your project (minimum 30 characters)"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 font-inter">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-raddeals-black text-raddeals-yellow py-4 rounded-lg font-inter font-semibold text-lg hover:bg-raddeals-black/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
