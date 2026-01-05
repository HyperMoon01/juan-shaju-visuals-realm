import { Calendar, ArrowRight } from 'lucide-react';

const JournalSection = () => {
  const articles = [
    {
      id: 'signal-86-journey',
      title: 'The Making of Signal 86: A Silent Comedy Love Letter',
      excerpt: 'Behind the scenes of creating a modern silent film that celebrates friendship and the power of visual storytelling.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Production Diary',
      image: '/placeholder.svg', // Placeholder for article image
    },
    {
      id: 'red-veil-development',
      title: 'Red Veil: Exploring Psychological Horror Through Cinema',
      excerpt: 'The development process and creative decisions behind my upcoming psychological horror film.',
      date: '2024-11-28',
      readTime: '7 min read',
      category: 'Film Development',
      image: '/placeholder.svg', // Placeholder for article image
    },
    {
      id: 'color-grading-philosophy',
      title: 'Color as Emotion: My Approach to Visual Storytelling',
      excerpt: 'How color grading and visual enhancement can transform the emotional impact of any story.',
      date: '2024-11-10',
      readTime: '4 min read',
      category: 'Technique',
      image: '/placeholder.svg', // Placeholder for article image
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="journal" className="min-h-screen bg-surface py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="cinematic-text text-4xl md:text-6xl font-bold mb-6">
            Journal
          </h2>
          <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto">
           Currently being worked on!
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              {/* Article Image */}
              <div className="aspect-video bg-surface-elevated relative overflow-hidden">
                
                {/* Placeholder for article image */}
                <div className="w-full h-full bg-gradient-to-br from-surface to-surface-elevated flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Calendar size={32} className="mx-auto mb-2 opacity-60" />
                    <p className="text-xs">{article.category}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 text-xs rounded-full text-primary font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="cinematic-text text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="body-text text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 group-hover:translate-x-1">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default JournalSection;