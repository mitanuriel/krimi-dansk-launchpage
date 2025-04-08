
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // In a real app, this would send the email to your backend
    toast({
      title: "Thanks for signing up!",
      description: "We'll notify you when KrimiDansk launches.",
      duration: 5000,
    });
    
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Your email address"
        className="bg-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="bg-krimidansk-navy hover:bg-krimidansk-navy/90 text-white">
        Notify Me
      </Button>
    </form>
  );
};

export default NewsletterForm;
