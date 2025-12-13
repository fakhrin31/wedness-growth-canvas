import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Copy, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogClose,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const staticProjects = [
    {
      image: "/portofolio1.png",
      results: ["Content-Based LMS", "Strapi CMS Integration", "Stable & Scalable Core"],
      tech: ["React", "Strapi", "Node.js", "Video Streaming"],
      rating: 5.0,
      publishDate: "2024",
      link: "https://folearn.id"
    },
    {
      image: "/portofolio2.png",
      results: ["AI Assessment Engine", "Integrated Ecosystem", "Multi-Hub Architecture"],
      tech: ["Next.js", "NestJS", "PostgreSQL", "Python AI", "AWS"],
      rating: 5.0,
      publishDate: "2024",
      link: "https://sinergiumkmindonesia.com"
    },
    {
      image: "/portofolio3.png",
      results: ["Omnichannel Integration", "Real-time Dashboard", "Automated Logging"],
      tech: ["WhatsApp API", "WebSocket", "Node.js", "MySQL", "React"],
      rating: 5.0,
      publishDate: "2024",
      link: "https://pull-whatsapp.vercel.app/"
    }
  ];

  const projects = (t('portfolio.items') || []).map((item: any, index: number) => ({
    ...item,
    ...(staticProjects[index] || {})
  }));

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
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary dark:group-hover:text-[#07F0A2] transition-colors line-clamp-1">
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
                  <Button
                    variant="default"
                    size="sm"
                    className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(projects[selectedProject].link, "_blank")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {t('portfolio.modal.visitWebsite')} ({projects[selectedProject].title})
                  </Button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column: Details */}
                  <div className="space-y-8">

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">{t('portfolio.modal.description')}</h4>
                      <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                        {projects[selectedProject].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-3">{t('portfolio.modal.skills')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Only CTA */}
                    <Button
                      variant="default"
                      className="w-full md:hidden bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(projects[selectedProject].link, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {t('portfolio.modal.visitWebsite')}
                    </Button>

                    {/* Review Section */}
                    <div className="bg-secondary/20 p-5 rounded-xl border border-border/50">
                      <h4 className="text-sm font-medium text-primary mb-2">{t('portfolio.modal.clientReview')}</h4>
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
                      {t('portfolio.modal.publishedOn')} {projects[selectedProject].publishDate}
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
                    <p className="text-xs text-center text-muted-foreground">{t('portfolio.modal.screenshot')}</p>
                  </div>
                </div>
              </div>

              {/* Footer: More by */}
              <div className="p-6 border-t border-border bg-secondary/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-sm">{t('portfolio.modal.moreBy')} <span className="text-primary">WednesDev</span></h4>
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
                        <p className="text-xs font-medium truncate group-hover:text-primary dark:group-hover:text-[#07F0A2] transition-colors">{p.title}</p>
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
