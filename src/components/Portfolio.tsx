import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Copy, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Mobile App Redesign",
      category: "Mobile App Development",
      role: "Lead UI/UX Designer",
      description: "Complete overhaul of a retail mobile app focusing on user experience and conversion optimization. We conducted extensive user research to identify pain points in the existing checkout flow. The new design implements a streamlined 3-step checkout process, improved product discovery with AI-powered recommendations, and a dark mode option. The result was a significant boost in user engagement and sales metrics within the first month of launch.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa0db79b6?q=80&w=800&auto=format&fit=crop",
      results: ["4.8 App Store Rating", "25% Increase in Sales", "Reduced Cart Abandonment"],
      tech: ["Flutter", "Firebase", "Stripe", "Dart", "Figma"],
      rating: 5.0,
      review: "Exceptional work! The new design is sleek and user-friendly. Our customers love it.",
      publishDate: "Dec 11, 2024"
    },
    {
      title: "Corporate Financial Dashboard",
      category: "Web Application",
      role: "Frontend Developer",
      description: "Built a real-time financial data visualization dashboard for a fintech startup. The dashboard aggregates data from multiple sources and presents it in an intuitive, interactive format. Key features include customizable widgets, real-time stock tickers, and automated report generation. Performance optimization was a priority, ensuring smooth rendering of large datasets using virtualization techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      results: ["Real-time Data Sync", "Custom Reporting", "Role-based Access"],
      tech: ["React", "D3.js", "Node.js", "TypeScript", "Redux"],
      rating: 5.0,
      review: "Very professional and knowledgeable. Delivered exactly what we needed ahead of schedule.",
      publishDate: "Nov 28, 2024"
    },
    {
      title: "Healthcare Patient Portal",
      category: "Web Platform",
      role: "Full Stack Developer",
      description: "Developed a secure patient portal for appointment scheduling and medical record access. Security and HIPAA compliance were paramount. The system features 2FA, encrypted data storage, and a secure messaging system between patients and doctors. The UI is designed to be accessible for elderly users, with large text and clear navigation.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      results: ["HIPAA Compliant", "Easy Scheduling", "Secure Messaging"],
      tech: ["Next.js", "PostgreSQL", "AWS", "Docker", "TailwindCSS"],
      rating: 4.9,
      review: "Great attention to detail, especially regarding security and compliance. Highly recommended.",
      publishDate: "Oct 15, 2024"
    },
    {
      title: "Travel Booking System",
      category: "Full Stack Development",
      role: "Backend Engineer",
      description: "Comprehensive booking engine for a travel agency with itinerary management. The backend handles complex logic for flight and hotel availability, pricing rules, and third-party API integrations. We implemented a robust caching strategy to reduce API costs and improve response times. The system also includes an admin panel for managing bookings and content.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
      results: ["Automated Booking", "Payment Integration", "Email Notifications"],
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "PHP"],
      rating: 5.0,
      review: "Solved complex backend challenges with ease. The system is stable and fast.",
      publishDate: "Sep 02, 2024"
    },
    {
      title: "Smart Home IoT Interface",
      category: "IoT / Mobile",
      role: "Mobile Developer",
      description: "Control interface for smart home devices with automation rules. The app communicates with IoT devices via MQTT and allows users to create custom automation scenes. We focused on low-latency communication to ensure instant feedback when controlling lights or locks. The interface is modern and supports voice commands via system integration.",
      image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=800&auto=format&fit=crop",
      results: ["Low Latency Control", "Voice Integration", "Energy Monitoring"],
      tech: ["React Native", "MQTT", "Node-RED", "IoT"],
      rating: 4.8,
      review: "Innovative solution for our smart home product line. The app is very responsive.",
      publishDate: "Aug 20, 2024"
    },
    {
      title: "Educational Learning Management",
      category: "EdTech",
      role: "Lead Developer",
      description: "Platform for online courses with video streaming and progress tracking. Features include quizzes, assignments, and certificate generation. We used a scalable architecture to handle thousands of concurrent users during peak learning hours. The video player supports adaptive bitrate streaming for smooth playback on all devices.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      results: ["Video Streaming", "Quiz System", "Certificate Generation"],
      tech: ["MERN Stack", "AWS S3", "Socket.io", "Express"],
      rating: 5.0,
      review: "Delivered a robust platform that scales perfectly. Our students love the user experience.",
      publishDate: "Jul 10, 2024"
    }
  ];

  const handleNextProject = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(nextIndex);
  };

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Beberapa proyek yang telah kami kerjakan untuk berbagai industri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="group cursor-pointer h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {project.category}
                  </p>
                  <p className="text-sm text-muted-foreground/80 line-clamp-2 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Preview (First 2) */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-card border-border">
          {selectedProject !== null && (
            <div className="flex flex-col h-[90vh] md:h-auto max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-border flex justify-between items-center bg-card z-10">
                <DialogTitle className="text-xl md:text-2xl font-bold">{projects[selectedProject].title}</DialogTitle>
                <div className="flex items-center gap-4">
                  <button className="text-sm text-primary font-medium flex items-center gap-2 hover:underline">
                    <Copy className="w-4 h-4" /> Copy link
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column: Details */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-1">My role</h4>
                      <p className="font-medium text-foreground">{projects[selectedProject].role}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Project description</h4>
                      <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                        {projects[selectedProject].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-3">Skills and deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Review Section */}
                    <div className="bg-secondary/20 p-5 rounded-xl border border-border/50">
                      <h4 className="text-sm font-medium text-primary mb-2">Client Review</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-orange-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(projects[selectedProject].rating) ? "fill-current" : "text-muted"}`} />
                          ))}
                        </div>
                        <span className="font-bold text-foreground">{projects[selectedProject].rating}</span>
                      </div>
                      <p className="text-sm italic text-muted-foreground">"{projects[selectedProject].review}"</p>
                    </div>

                    <div className="text-xs text-muted-foreground pt-4 border-t border-border/50">
                      Published on {projects[selectedProject].publishDate}
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-border bg-muted shadow-sm">
                      <img
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>
              </div>

              {/* Footer: More by */}
              <div className="p-6 border-t border-border bg-secondary/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-sm">More by <span className="text-primary">WednesDev</span></h4>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {projects.map((p, idx) => (
                    idx !== selectedProject && (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-48 cursor-pointer group"
                        onClick={() => setSelectedProject(idx)}
                      >
                        <div className="aspect-video rounded-lg overflow-hidden border border-border mb-2 relative">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <p className="text-xs font-medium truncate group-hover:text-primary transition-colors">{p.title}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
