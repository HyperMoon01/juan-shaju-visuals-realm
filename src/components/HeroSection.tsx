import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Abstract Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animation: 'glow 4s ease-in-out infinite alternate',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in-up">
          <h1 className="cinematic-text text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
            Step Into My
            <br />
            <span className="relative">
              Realm
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </h1>
        </div>

        <div className="fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <p className="body-text text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm Juan Shaju — filmmaker, storyteller, and visual creative. 
            <br className="hidden md:block" />
            This is my space to share the worlds I create.
          </p>
        </div>

        <div className="fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium tracking-wide transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-glow group"
          >
            Explore My Work
            <ArrowDown 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-y-1" 
            />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;