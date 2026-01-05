import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Dynamic Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      />

      {/* Floating Film Frames and Dust */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute w-px h-px bg-primary/30 rounded-full animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
        
        {/* Abstract film frame shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`frame-${i}`}
            className="absolute border border-primary/10 rounded-sm opacity-20"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${15 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.2 + Math.random() * 0.4)}px) rotate(${Math.random() * 45}deg)`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Title with Film Frame Animation */}
        <div className="film-title-container">
          <h1 className="cinematic-text text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none film-title-flicker">
            <span className="inline-block film-frame-appear" style={{ animationDelay: '0.2s' }}>Step</span>{' '}
            <span className="inline-block film-frame-appear" style={{ animationDelay: '0.4s' }}>Into</span>{' '}
            <span className="inline-block film-frame-appear" style={{ animationDelay: '0.6s' }}>My</span>
            <br />
            <span className="relative inline-block film-frame-appear" style={{ animationDelay: '0.8s' }}>
              Realm
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }} />
            </span>
          </h1>
        </div>

        <div className="fade-in-up opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          <p className="body-text text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm Juan Shaju — filmmaker, storyteller, and student. 
            <br className="hidden md:block" />
            This is my space to share the worlds I create.
          </p>
        </div>

        <div className="fade-in-up opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
          <button
            onClick={scrollToPortfolio}
            className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground font-medium tracking-wide transition-all duration-500 hover:scale-110 hover:shadow-glow animate-glow group overflow-hidden"
          >
            {/* Pulsing background */}
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            
            {/* Button content */}
            <div className="relative z-10 flex flex-col items-center">
              <ArrowDown 
                size={24} 
                className="transition-transform duration-300 group-hover:translate-y-1 mb-1" 
              />
              <span className="text-xs hidden md:block">Explore</span>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up opacity-0" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;