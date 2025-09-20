import { useState, useEffect } from 'react';

const DynamicTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const taglines = [
    'Filmmaker.',
    'Storyteller.',
    'Visual Creative.',
    'Colorist.',
    'Founder, Nova Realm Entertainment.'
  ];

  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentTagline.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTagline.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next tagline
        setCurrentIndex((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex, taglines]);

  return (
    <div className="text-xs font-normal opacity-60 tracking-wider h-4 flex items-center">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </div>
  );
};

export default DynamicTagline;