
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FeatureCard from "@/components/FeatureCard";
import SeriesCard from "@/components/SeriesCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Film, BookOpen, School, Globe, MessageSquare, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-krimidansk-light-mint to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-krimidansk-navy">KrimiDansk</h1>
        </div>
        <div>
          <Button className="bg-krimidansk-navy hover:bg-krimidansk-navy/90">
            <a href="#contact">Get Early Access</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Learn Danish Through Crime Series
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Take your Danish from A2-B1 to advanced fluency by immersing yourself in popular Nordic noir series
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-krimidansk-navy hover:bg-krimidansk-navy/90 text-white">
              <a href="#features">Learn More</a>
            </Button>
            <Button size="lg" variant="outline" className="border-krimidansk-teal text-krimidansk-teal hover:bg-krimidansk-teal/10">
              <a href="#contact">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 section-margin">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-krimidansk-navy">How KrimiDansk Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our innovative approach combines authentic Danish crime series with interactive learning tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Film />}
            title="Learn With Authentic Content" 
            description="Watch popular Danish crime series with adaptive subtitles and interactive transcripts."
          />
          <FeatureCard 
            icon={<BookOpen />}
            title="Context-Based Vocabulary" 
            description="Build your vocabulary naturally within the context of exciting crime storylines."
          />
          <FeatureCard 
            icon={<MessageSquare />}
            title="Practice Pronunciation" 
            description="Record and compare your pronunciation with native Danish speakers from the series."
          />
          <FeatureCard 
            icon={<Headphones />}
            title="Active Listening Exercises" 
            description="Strengthen your listening skills with scene-based comprehension activities."
          />
          <FeatureCard 
            icon={<Globe />}
            title="Cultural Insights" 
            description="Gain a deeper understanding of Danish culture, society, and idioms."
          />
          <FeatureCard 
            icon={<School />}
            title="Progress Tracking" 
            description="Track your improvement with personalized learning statistics and achievements."
          />
        </div>
      </section>

      {/* Separator */}
      <Separator className="max-w-4xl mx-auto h-0.5 bg-krimidansk-light-blue" />

      {/* Series Showcase */}
      <section id="series" className="container mx-auto px-4 section-margin">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-krimidansk-navy">Featured Danish Series</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in critically acclaimed Danish crime dramas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SeriesCard 
            title="Forbrydelsen (The Killing)" 
            description="Follow Detective Sarah Lund as she investigates a series of murders in Copenhagen. Perfect for learning everyday conversational Danish."
            difficulty="Intermediate"
          />
          <SeriesCard 
            title="Broen (The Bridge)" 
            description="A body is found on the bridge connecting Denmark and Sweden, leading to a complex international investigation with Danish and Swedish dialogue."
            difficulty="Advanced"
          />
          <SeriesCard 
            title="Kastanjemand (The Chestnut Man)" 
            description="A chilling crime thriller set in Copenhagen about a serial killer who leaves chestnut figurines at murder scenes."
            difficulty="Intermediate"
          />
        </div>
      </section>

      {/* For Schools Section */}
      <section className="bg-krimidansk-navy py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">For Language Schools & Organizations</h2>
            <p className="text-xl mb-8">
              KrimiDansk offers special packages for educational institutions looking to enhance their Danish language curriculum with engaging, authentic content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="bg-white/10 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Group Licensing</h3>
                <p>Flexible licensing options for classrooms and language schools with dedicated teacher dashboards.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Custom Integration</h3>
                <p>Integrate KrimiDansk with your existing learning management systems and curriculum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="container mx-auto px-4 section-margin">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-krimidansk-navy">Get Notified When We Launch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be the first to know when KrimiDansk is available and receive exclusive early access offers.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-krimidansk-light-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-krimidansk-navy font-semibold">KrimiDansk © {new Date().getFullYear()}</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-krimidansk-navy hover:text-krimidansk-teal">About</a>
              <a href="#" className="text-krimidansk-navy hover:text-krimidansk-teal">Privacy</a>
              <a href="#" className="text-krimidansk-navy hover:text-krimidansk-teal">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
