import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500); // Flash effect duration
          }, 500);
          return 100;
        }
        // Varying speed for more realistic loading
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-500 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Flash effect */}
      <div className={`absolute inset-0 bg-primary transition-opacity duration-50 ${
        isComplete ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='reelNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23reelNoise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Loading content */}
      <div className="relative z-10 text-center">
        
        {/* Counter */}
        <div className="mb-8">
          <div className="font-mono text-6xl md:text-8xl font-bold text-primary mb-4 tracking-wider">
            {Math.floor(progress).toString().padStart(3, '0')}
          </div>
          
          {/* Progress bar */}
          <div className="w-48 h-px bg-border mx-auto relative">
            <div 
              className="absolute left-0 top-0 h-full bg-primary transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-0">
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            Loading your reel...
          </p>
          
          {/* Film perforations */}
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className={`w-1 h-4 rounded-full transition-all duration-200 ${
                  i <= (progress / 12.5) ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vintage film lab text */}
        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wider">
            VISUARealm FILM LAB
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;