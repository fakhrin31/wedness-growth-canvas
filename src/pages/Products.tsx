import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users, ArrowRight } from "lucide-react";

const Products = () => {
    const products = [
        {
            id: 1,
            name: "ERP System Pro",
            description: "Sistem manajemen sumber daya perusahaan yang komprehensif untuk mengoptimalkan operasional bisnis Anda. Modul lengkap mencakup Keuangan, HR, Inventori, dan Penjualan.",
            category: "Enterprise Software",
            price: "Mulai dari Rp 15.000.000",
            rating: 4.9,
            users: "500+",
            features: ["Multi-user Access", "Real-time Analytics", "Cloud Integration"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 2,
            name: "Smart Inventory Manager",
            description: "Solusi manajemen inventori cerdas dengan AI untuk prediksi stok dan otomatisasi pemesanan. Hindari kehabisan stok dan overstock dengan algoritma prediksi canggih kami.",
            category: "Inventory Management",
            price: "Mulai dari Rp 8.500.000",
            rating: 4.8,
            users: "300+",
            features: ["AI Prediction", "Barcode Scanner", "Auto Reorder"],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 3,
            name: "Customer Analytics Suite",
            description: "Platform analitik pelanggan untuk memahami perilaku dan meningkatkan engagement. Dapatkan wawasan mendalam tentang perjalanan pelanggan Anda dari akuisisi hingga retensi.",
            category: "Analytics",
            price: "Mulai dari Rp 12.000.000",
            rating: 4.7,
            users: "250+",
            features: ["Behavior Tracking", "Segmentation", "Predictive Analytics"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 4,
            name: "Digital Workflow Automation",
            description: "Otomatisasi alur kerja digital untuk meningkatkan efisiensi dan mengurangi kesalahan manual. Buat workflow custom tanpa coding dengan drag-and-drop interface.",
            category: "Automation",
            price: "Mulai dari Rp 10.000.000",
            rating: 4.9,
            users: "400+",
            features: ["Process Automation", "Integration APIs", "Custom Workflows"],
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 5,
            name: "E-Commerce Platform Plus",
            description: "Platform e-commerce lengkap dengan fitur advanced untuk bisnis online modern. Dukung pertumbuhan bisnis Anda dengan fitur marketing tools dan integrasi marketplace.",
            category: "E-Commerce",
            price: "Mulai dari Rp 20.000.000",
            rating: 4.8,
            users: "600+",
            features: ["Multi-vendor", "Payment Gateway", "SEO Optimized"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 6,
            name: "AI Business Intelligence",
            description: "Sistem business intelligence dengan AI untuk insight mendalam dan decision making yang lebih baik. Analisis tren pasar dan performa bisnis secara real-time.",
            category: "Business Intelligence",
            price: "Coming Soon",
            rating: 0,
            users: "0",
            features: ["AI Insights", "Predictive Models", "Data Visualization"],
            image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=800&auto=format&fit=crop",
            status: "Coming Soon"
        },
        {
            id: 7,
            name: "HR Management System",
            description: "Sistem manajemen SDM terintegrasi untuk mengelola karyawan, absensi, payroll, dan rekrutmen. Dilengkapi dengan portal karyawan mandiri.",
            category: "HR Tech",
            price: "Mulai dari Rp 7.500.000",
            rating: 4.6,
            users: "150+",
            features: ["Payroll", "Attendance", "Recruitment"],
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        },
        {
            id: 8,
            name: "POS Retail Solution",
            description: "Aplikasi Point of Sales modern untuk bisnis retail dan F&B. Mendukung multi-outlet, manajemen stok real-time, dan laporan penjualan harian.",
            category: "Retail",
            price: "Mulai dari Rp 5.000.000",
            rating: 4.8,
            users: "800+",
            features: ["Multi-outlet", "Inventory Sync", "Sales Report"],
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
            status: "Available"
        }
    ];

    const handleDemoClick = (productName: string) => {
        const message = encodeURIComponent(`Halo WednesDev, saya tertarik untuk melihat demo dari ${productName}. Bisakah kita jadwalkan presentasi?`);
        window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
    };

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
                            Product <span className="text-gradient">Showcase</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Jelajahi koleksi lengkap solusi teknologi kami yang dirancang untuk mempercepat pertumbuhan bisnis Anda.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                        {/* Status Badge */}
                                        <div className="absolute top-3 right-3">
                                            <Badge
                                                variant={product.status === "Available" ? "default" : "secondary"}
                                                className={product.status === "Available" ? "bg-primary text-primary-foreground" : "bg-background/80 backdrop-blur text-foreground"}
                                            >
                                                {product.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="mb-2">
                                            <Badge variant="outline" className="text-xs mb-2">
                                                {product.category}
                                            </Badge>
                                            <h3 className="text-lg font-bold group-hover:text-primary dark:group-hover:text-[#07F0A2] transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <span key={idx} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="pt-4 border-t border-border mt-auto">
                                            <div className="flex items-center justify-between mb-3">
                                                <p className="font-bold text-primary text-price-dark-accent">{product.price}</p>
                                            </div>
                                            <Button
                                                onClick={() => handleDemoClick(product.name)}
                                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                                                disabled={product.status === "Coming Soon"}
                                                size="sm"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                {product.status === "Available" ? "Request Demo" : "Notify Me"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
