import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import JournalSection from "@/components/JournalSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior and fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <JournalSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-center md:text-left">
              <div className="cinematic-text text-xl font-bold mb-1">
                Juan Shaju
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 Juan Shaju | Designed with love
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground italic">
                "Built in my realm. You just visited it."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
