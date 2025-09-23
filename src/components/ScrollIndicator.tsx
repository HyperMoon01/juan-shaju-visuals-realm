import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        
        {/* Vertical line */}
        <div className="w-px h-32 bg-border relative">
          <div 
            className="absolute w-px bg-primary transition-all duration-500"
            style={{
              height: '25%',
              top: `${(sections.findIndex(s => s.id === activeSection) / (sections.length - 1)) * 75}%`
            }}
          />
        </div>

        {/* Section dots */}
        <div className="space-y-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary scale-125'
                  : 'bg-border hover:bg-muted-foreground'
              }`} />
              
              {/* Tooltip */}
              <div className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-surface border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                  {section.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;