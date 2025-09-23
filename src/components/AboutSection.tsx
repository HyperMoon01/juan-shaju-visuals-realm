import juanPortrait from "@/assets/juan-portrait.jpg";


const AboutSection = () => {
  const milestones = [
    { year: '2023', event: 'Film Club | President', description: 'Led creative direction and production workflows' },
    { year: '2024', event: 'Signal 86 Release | Director, DOP', description: 'Silent Thriller Sci-fi short film' },
    { year: '2024', event: 'Red Veil Production | Producer', description: 'Psychological horror film in development' },
    { year: '2025', event: 'TMU Image Arts | Vice President', description: 'Advancing craft through formal education' },
    { year: '2025', event: 'Nova Realm Entertainment | Director', description: 'Building a creative studio for compelling stories' },
  ];

  return (
    <section id="about" className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait Side */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-cinematic">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
              
              {/* Juan's cinematic portrait */}
              <img 
                src={juanPortrait}
                alt="Juan Shaju - Filmmaker and Visual Storyteller"
                className="w-full h-full object-cover"
              />
              
              {/* Film grain overlay */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="cinematic-text text-4xl md:text-5xl font-bold mb-6">
                Who I Am
              </h2>
              
              <div className="space-y-4 body-text text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm an 19-year-old filmmaker and storyteller based in Toronto, Canada. 
                  I direct, edit, and produce short films like <em>Signal 86</em> and <em>Red Veil</em>. 
                  My passion is telling raw, human stories that feel alive.
                </p>
                
                <p>
                  I'm building <strong className="text-primary">Nova Realm Entertainment</strong> to create 
                  films and art that move people. Every frame, every cut, every story.. it all matters.
                </p>
                
                <p>
                  Currently studying Image Arts at Toronto Metropolitan University, constantly pushing 
                  the boundaries of visual storytelling and exploring new ways to connect with audiences.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-8 border-t border-border">
              <h3 className="cinematic-text text-2xl font-bold mb-6">Creative Journey</h3>
              
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-16 text-sm font-bold text-primary">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {milestone.event}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;