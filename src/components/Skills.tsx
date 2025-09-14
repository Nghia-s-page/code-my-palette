import { Code, Database, Globe, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "C++"]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "HTML/CSS", "Responsive Design", "UI/UX"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "API Development", "HTTP Protocols", "RESTful Services"]
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MySQL", "Git/GitHub", "Mathematical Modeling", "Data Structures"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="portfolio-card p-8 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Most Used Languages Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Most Used Languages</h3>
          <div className="portfolio-card p-8 rounded-xl max-w-2xl mx-auto">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=NewtakaNghia&layout=compact&theme=radical&hide_border=true"
              alt="Most Used Languages"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};