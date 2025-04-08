
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);
        
      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already on our notification list.",
            duration: 5000,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Thanks for signing up!",
          description: "We'll notify you when KrimiDansk launches.",
          duration: 5000,
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error saving email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Your email address"
        className="bg-white border-krimidansk-navy"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <Button 
        type="submit" 
        className="bg-krimidansk-navy hover:bg-krimidansk-dark-blue text-white"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Notify Me"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
