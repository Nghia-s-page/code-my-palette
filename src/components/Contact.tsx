import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="portfolio-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  Let's discuss opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:contact@nghiatran.dev">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Location</CardTitle>
                <CardDescription>
                  Ho Chi Minh City, Vietnam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Available for remote work and local opportunities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Card */}
          <div className="lg:col-span-2">
            <Card className="portfolio-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Work Together</CardTitle>
                <CardDescription className="text-base">
                  I'm actively seeking opportunities in backend development and software engineering.
                  Whether you're looking for a dedicated team member or have an exciting project in mind,
                  I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Interests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Backend Development</li>
                      <li>• API Design & Development</li>
                      <li>• Database Management</li>
                      <li>• Software Engineering</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Available For</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Internship Opportunities</li>
                      <li>• Junior Developer Roles</li>
                      <li>• Open Source Projects</li>
                      <li>• Learning Collaborations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1" asChild>
                    <a href="mailto:contact@nghiatran.dev">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://github.com/NewtakaNghia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://www.linkedin.com/in/tr%E1%BA%A7n-ngh%C4%A9a-23ba28339/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};