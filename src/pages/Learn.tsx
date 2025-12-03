import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Learn = () => {
    const resources = [
        {
            id: 1,
            title: "Introduction to Web Development",
            description: "Pelajari dasar-dasar pengembangan web modern dengan HTML, CSS, dan JavaScript. Cocok untuk pemula yang ingin memulai karir di bidang tech.",
            type: "Video Course",
            duration: "4h 30m",
            level: "Beginner",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            description: "Panduan mendalam tentang React Hooks. Pahami useState, useEffect, useContext, dan custom hooks untuk membangun aplikasi yang efisien.",
            type: "Article Series",
            duration: "1h 15m",
            level: "Intermediate",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            description: "Prinsip dasar desain antarmuka dan pengalaman pengguna. Pelajari tentang hierarki visual, tipografi, warna, dan usability testing.",
            type: "Video Course",
            duration: "3h 45m",
            level: "Beginner",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Advanced Backend Architecture",
            description: "Eksplorasi arsitektur backend skala besar. Microservices, event-driven architecture, dan database scaling strategies.",
            type: "Workshop",
            duration: "2h 00m",
            level: "Advanced",
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "SEO Fundamentals for Developers",
            description: "Teknik SEO teknis yang wajib diketahui developer. Core Web Vitals, semantic HTML, dan optimasi performa website.",
            type: "E-Book",
            duration: "45m read",
            level: "Intermediate",
            image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Digital Marketing 101",
            description: "Dasar-dasar pemasaran digital untuk bisnis. Social media marketing, content strategy, dan email marketing basics.",
            type: "Video Course",
            duration: "5h 15m",
            level: "Beginner",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Learning <span className="text-gradient">Hub</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Tingkatkan skill Anda dengan koleksi materi pembelajaran terkurasi dari para ahli kami.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col group cursor-pointer">
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={resource.image}
                                            alt={resource.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary text-primary-foreground">
                                                {resource.type}
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <Badge variant="secondary" className="backdrop-blur bg-background/80">
                                                {resource.level}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                            <Clock className="w-3 h-3" />
                                            {resource.duration}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {resource.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                            {resource.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-border">
                                            <Button className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground transition-colors group-hover:shadow-md">
                                                Start Learning <PlayCircle className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Learn;
