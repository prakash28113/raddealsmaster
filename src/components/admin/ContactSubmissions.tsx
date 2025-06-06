
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Eye } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
}

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast({
        title: "Error",
        description: "Failed to fetch contact submissions",
        variant: "destructive",
      });
    }
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-dm-sans font-bold text-raddeals-black">
        Contact Submissions
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell className="max-w-xs">
                    <p className="truncate">{contact.message}</p>
                  </TableCell>
                  <TableCell>
                    {new Date(contact.submitted_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewContact(contact)}
                    >
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {contacts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-raddeals-text">
                    No contact submissions yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Submission Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-raddeals-text">Name:</label>
                <p className="font-medium">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-raddeals-text">Email:</label>
                <p className="font-medium">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-raddeals-text">Submitted:</label>
                <p className="font-medium">
                  {new Date(selectedContact.submitted_at).toLocaleString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-raddeals-text">Message:</label>
                <div className="mt-2 p-4 bg-raddeals-gray rounded-lg">
                  <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => window.open(`mailto:${selectedContact.email}`, '_blank')}
                  className="bg-raddeals-yellow text-raddeals-black hover:bg-raddeals-yellow/90"
                >
                  Reply via Email
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactSubmissions;
