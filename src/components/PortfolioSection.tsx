import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';
import Signal86 from "@/assets/signal86.jpg";
import redVeil from "@/assets/red-veil.jpg";

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'signal-86',
      title: 'Signal 86',
      category: 'Sci-Fi Film',
      description: 'A silent sci-fi thriller  that explores personal curiosity through visual storytelling',
      year: '2024',
      status: 'Released',
      image: Signal86,
      video: 'https://vimeo.com/example', // Placeholder
      tags: ['Thriller', 'Silent Film', 'Sci-FI']
    },
    {
      id: 'red-veil',
      title: 'Subject V',
      category: 'Horror Film',
      description: 'A psychological horror film exploring the depths of human consciousness',
      year: '2024',
      status: 'Post Production',
      image: redVeil,
      video: 'https://vimeo.com/example', // Placeholder
      tags: ['Horror', 'Psychology', 'Thriller']
    },
    {
      id: 'photography',
      title: 'Red Veil',
      category: 'Thriller Film',
      description: 'Curated collection of cinematic photography exploring light and shadow',
      year: '2024',
      status: 'Pre-Production',
      image: '/placeholder.svg',
      video: 'https://pinterest.com/example', // Placeholder
      tags: ['Photography', 'Portraits', 'Cinematic']
    },
    {
      id: 'color-grading',
      title: 'Color Grading Reel',
      category: 'Post-Production',
      description: 'Hip-hop paced reel showcasing color grading and visual enhancement work',
      year: '2024',
      status: 'Pre-Production',
      image: '/placeholder.svg',
      video: 'https://vimeo.com/example', // Placeholder
      tags: ['Color Grading', 'Post-Production', 'Music Video']
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="cinematic-text text-4xl md:text-6xl font-bold mb-6">
            Selected Works
          </h2>
          <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of films, photography, and visual projects that define my creative journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Project Image/Video Preview */}
              <div className="aspect-video relative overflow-hidden bg-surface-elevated">
                
                {/* Project image with Play icon overlay */}
                <div className="w-full h-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Play icon for video projects */}
                  {project.video && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                      <Play size={48} className="mb-2 opacity-80 text-white" />
                      <p className="text-sm text-white drop-shadow">{project.title}</p>
                    </div>
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-background/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center">
                    {project.video ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                        <Play size={16} />
                        Watch Film
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="cinematic-text text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {project.category} • {project.year}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded font-medium ${
                    project.status === 'Released' 
                      ? 'bg-primary/20 text-primary'
                      : project.status === 'In Production'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="body-text text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-surface-elevated text-xs rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 hover:bg-surface-elevated hover:border-primary group">
            View Full Portfolio
            <ExternalLink 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;