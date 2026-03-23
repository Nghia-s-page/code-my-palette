import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CourseCamp - Online Course Management",
    description: "Architected the backend infrastructure and database schema utilizing a strict MVC pattern. Developed core RESTful APIs for course management and successfully integrated third-party services including OAuth for authentication and VNPay for seamless transactions.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "VNPay API"],
    githubUrl: "https://github.com/NewtakaNghia/CourseCamp-Backend",
    type: "Backend Project"
  },
  {
    title: "1-on-1 Tutor Support System",
    description: "Engineered the core scheduling logic and RESTful APIs to facilitate accurate mentor-student pairing. Designed a maintainable PostgreSQL database and actively coordinated backend-frontend integration to deliver a fully functional matching platform.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "API Design"],
    githubUrl: "https://github.com/luquocphap/Tutor-Support-System-Backend",
    type: "Full-Stack Integration"
  },
  {
    title: "Mathematical Modeling Assignment",
    description: "Advanced mathematical modeling project using Python for computational analysis and algorithmic problem-solving. Demonstrates proficiency in mathematical concepts and programming implementation.",
    technologies: ["Python", "Mathematical Modeling", "Algorithms", "Data Analysis"],
    githubUrl: "https://github.com/NewtakaNghia/MM241-Assignment",
    type: "Academic Project"
  },
  {
    title: "HTTP Communication Simulator",
    description: "Comprehensive simulation of HTTP communication protocols with CRUD operations for product management. Features both backend API development and React frontend interface.",
    technologies: ["C++", "HTTP Protocols", "CRUD Operations", "API Design"],
    githubUrl: "https://github.com/NewtakaNghia/CS23_FW_Task_2",
    type: "Full-Stack Project"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, from academic projects to practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card p-8 rounded-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="mb-2">
                  {project.type}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">GitHub Activity</h3>
          <div className="portfolio-card p-8 rounded-xl max-w-4xl mx-auto">
            <img
              src="https://github-readme-stats.vercel.app/api?username=NewtakaNghia&show_icons=true&theme=radical&hide_border=true"
              alt="GitHub Stats"
              className="w-full max-w-md mx-auto mb-6"
            />
            <div className="text-sm text-muted-foreground">
              <p>🎯 Focused on quality over quantity in project development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};