import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Digital Transformation for SMEs: Where to Start?",
            excerpt: "Panduan lengkap bagi UMKM yang ingin memulai perjalanan digitalisasi bisnis mereka. Pelajari langkah-langkah fundamental untuk transformasi yang sukses.",
            date: "Dec 12, 2024",
            author: "WednesDev Team",
            category: "Business",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Optimizing User Experience in 2025",
            excerpt: "Tren UX design terbaru yang perlu Anda ketahui. Fokus pada aksesibilitas, kecepatan, dan personalisasi untuk meningkatkan konversi.",
            date: "Dec 10, 2024",
            author: "UI/UX Division",
            category: "Design",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Why Your Business Needs a Custom ERP",
            excerpt: "Mengapa software ERP off-the-shelf mungkin tidak cukup untuk bisnis Anda yang sedang berkembang. Kelebihan solusi kustom untuk efisiensi maksimal.",
            date: "Dec 05, 2024",
            author: "Tech Lead",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "The Future of AI in E-Commerce",
            excerpt: "Bagaimana kecerdasan buatan mengubah cara kita berbelanja online. Dari rekomendasi produk hingga layanan pelanggan otomatis.",
            date: "Nov 28, 2024",
            author: "AI Research",
            category: "Innovation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Building a Scalable Backend Infrastructure",
            excerpt: "Tips teknis untuk membangun backend yang dapat menangani jutaan request. Pembahasan tentang microservices, caching, dan database scaling.",
            date: "Nov 15, 2024",
            author: "DevOps Team",
            category: "Engineering",
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Effective Social Media Marketing Strategies",
            excerpt: "Strategi pemasaran media sosial yang terbukti efektif untuk meningkatkan brand awareness dan engagement dengan audiens target Anda.",
            date: "Nov 01, 2024",
            author: "Marketing Lead",
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
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
                            Our <span className="text-gradient">Blog</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Wawasan, tips, dan berita terbaru seputar teknologi, desain, dan pengembangan bisnis.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col group cursor-pointer">
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-background/80 backdrop-blur text-foreground hover:bg-background">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-border">
                                            <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
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

export default Blog;
