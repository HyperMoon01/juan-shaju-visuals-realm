import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react'; // Added ExternalLink icon
import DynamicTagline from './DynamicTagline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Updated navItems with type property
  const navItems = [
    { name: 'Home', id: 'hero', type: 'section' },
    { name: 'About', id: 'about', type: 'section' },
    { name: 'Portfolio', id: 'portfolio', type: 'section' },
    { name: 'Journal', id: 'journal', type: 'section' },
    { name: 'Contact', id: 'contact', type: 'section' },
    { 
      name: 'Resume', 
      id: 'resume', 
      type: 'external',
      url: 'https://www.canva.com/design/DAG9giPFl2c/r3YtaF0kYxdQbGurIMJ_SQ/edit?utm_content=DAG9giPFl2c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' // Your Canva link here
    },
  ];

  const handleNavClick = (item) => {
    if (item.type === 'external' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cinematic-text text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          Juan Shaju
          <DynamicTagline />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              {item.type === 'external' ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
                >
                  {item.name}
                  <ExternalLink size={14} className="opacity-70" />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-surface-elevated rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass-effect border-t border-border md:hidden">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                item.type === 'external' ? (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full text-left text-lg font-medium tracking-wide py-2 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-lg font-medium tracking-wide py-2 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;