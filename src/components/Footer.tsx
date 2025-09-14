export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold gradient-text">TN</span>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Computer Science Student & Aspiring Backend Developer
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nghĩa Trần. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};