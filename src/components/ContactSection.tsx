import { Mail, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/juan.shaju',
      handle: '@juan.shaju'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/juanshaju',
      handle: '/in/juanshaju'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:juanshaju511@gmail.com',
      handle: 'juanshaju511@gmail.com'
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="cinematic-text text-4xl md:text-6xl font-bold mb-6">
            Let's Create Something
            <br />
            Together
          </h2>
          <p className="body-text text-xl text-muted-foreground">
            Have a project in mind? Want to collaborate? 
            <br className="hidden md:block" />
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium tracking-wide transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-glow"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="cinematic-text text-2xl font-bold mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-surface rounded-lg transition-all duration-300 hover:bg-surface-elevated hover:scale-[1.02] group"
                    >
                      <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">
                Based in Toronto, Canada
              </h4>
              <p className="body-text text-sm text-muted-foreground leading-relaxed">
                Currently available for film projects, creative collaborations, 
                and visual storytelling opportunities. Always excited to work 
                with fellow creatives who share a passion for meaningful art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;