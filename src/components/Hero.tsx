import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="fade-in-up">
          {/* Avatar */}
          <div className="mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/188887958?v=4"
              alt="Nghĩa Trần"
              className="w-32 h-32 rounded-full mx-auto portfolio-card floating"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Nghĩa Trần</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student & Aspiring Backend Developer
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            🎓 Studying at Ho Chi Minh University of Technology (BKU) <br />
            🚀 Passionate about backend development and software engineering <br />
            🙌 Enthusiastic learner always striving for new knowledge
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="w-12 h-12" asChild>
              <a 
                href="https://github.com/NewtakaNghia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12" asChild>
              <a 
                href="https://www.linkedin.com/in/tr%E1%BA%A7n-ngh%C4%A9a-23ba28339/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12" asChild>
              <a href="#contact" aria-label="Contact">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};