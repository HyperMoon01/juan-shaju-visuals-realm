import { useState } from 'react';
import { Play, X } from 'lucide-react';

const CinematicIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const playIntro = () => {
    setIsPlaying(true);
    setShowVideo(true);
    
    // Auto-close after 6 seconds
    setTimeout(() => {
      setShowVideo(false);
      setTimeout(() => setIsPlaying(false), 500);
    }, 6000);
  };

  const closeIntro = () => {
    setShowVideo(false);
    setTimeout(() => setIsPlaying(false), 500);
  };

  return (
    <>
      {/* Play Intro Button */}
      <button
        onClick={playIntro}
        className="fixed bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 bg-surface-glass backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
      >
        <Play size={16} className="transition-transform group-hover:scale-110" />
        Play Intro
      </button>

      {/* Cinematic Intro Overlay */}
      {isPlaying && (
        <div className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-500 ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Close button */}
          <button
            onClick={closeIntro}
            className="absolute top-8 right-8 z-10 w-10 h-10 rounded-full bg-surface-glass backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>

          {/* Film grain background */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='introGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23introGrain)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Intro content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
            
            {/* Main title animation */}
            <div className="mb-8">
              <h1 className="cinematic-text text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                VISUAREALM
              </h1>
              
              <div className="w-32 h-px bg-primary mx-auto opacity-0 animate-fade-in-up"
                   style={{ animationDelay: '1s', animationFillMode: 'forwards' }} />
            </div>

            {/* Subtitle */}
            <p className="body-text text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in-up"
               style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              A cinematic journey through visual storytelling
            </p>

            {/* Director credit */}
            <div className="opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <p className="font-mono text-sm text-muted-foreground tracking-wider mb-2">
                DIRECTED BY
              </p>
              <p className="cinematic-text text-2xl font-bold">
                Juan Shaju
              </p>
            </div>

            {/* Film perforations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="flex justify-between h-full">
                {/* Left perforations */}
                <div className="flex flex-col justify-between py-8">
                  {[...Array(12)].map((_, i) => (
                    <div key={`left-${i}`} className="w-2 h-4 bg-border rounded-sm opacity-30" />
                  ))}
                </div>
                
                {/* Right perforations */}
                <div className="flex flex-col justify-between py-8">
                  {[...Array(12)].map((_, i) => (
                    <div key={`right-${i}`} className="w-2 h-4 bg-border rounded-sm opacity-30" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CinematicIntro;