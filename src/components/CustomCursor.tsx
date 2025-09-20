import { useEffect, useState, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add trail point when hovering over interactive elements
      if (isHovering) {
        const newTrailPoint: TrailPoint = {
          x: newPosition.x,
          y: newPosition.y,
          timestamp: Date.now(),
          id: trailIdRef.current++
        };
        
        setTrailPoints(prev => {
          const filtered = prev.filter(point => Date.now() - point.timestamp < 300);
          return [...filtered, newTrailPoint];
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup trail points
    const interval = setInterval(() => {
      setTrailPoints(prev => prev.filter(point => Date.now() - point.timestamp < 300));
    }, 50);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <>
      {/* Trail points */}
      {trailPoints.map((point) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 300);
        const scale = Math.max(0.2, 1 - age / 300);
        
        return (
          <div
            key={point.id}
            className="fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-[9997] mix-blend-difference"
            style={{
              left: point.x - 2,
              top: point.y - 2,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              transition: 'opacity 0.1s ease-out',
            }}
          />
        );
      })}

      {/* Cursor dot */}
      <div
        className="cursor-dot"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="cursor-ring"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 0.8 : 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;