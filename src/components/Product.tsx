import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users, Calendar, Copy, X } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "ERP System Pro",
      description: "Sistem manajemen sumber daya perusahaan yang komprehensif untuk mengoptimalkan operasional bisnis Anda. Modul lengkap mencakup Keuangan, HR, Inventori, dan Penjualan.",
      category: "Enterprise Software",
      price: "Mulai dari Rp 15.000.000",
      rating: 4.9,
      users: "500+",
      releaseDate: "2024",
      features: ["Multi-user Access", "Real-time Analytics", "Cloud Integration", "Mobile App"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Available",
      review: "Sistem ERP terbaik yang pernah kami gunakan. Sangat membantu efisiensi operasional.",
      role: "Enterprise Solution"
    },
    {
      id: 2,
      name: "Smart Inventory Manager",
      description: "Solusi manajemen inventori cerdas dengan AI untuk prediksi stok dan otomatisasi pemesanan. Hindari kehabisan stok dan overstock dengan algoritma prediksi canggih kami.",
      category: "Inventory Management",
      price: "Mulai dari Rp 8.500.000",
      rating: 4.8,
      users: "300+",
      releaseDate: "2024",
      features: ["AI Prediction", "Barcode Scanner", "Auto Reorder", "Multi-warehouse"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Available",
      review: "Fitur prediksi AI-nya sangat akurat. Kami menghemat biaya penyimpanan hingga 30%.",
      role: "Inventory Solution"
    },
    {
      id: 3,
      name: "Customer Analytics Suite",
      description: "Platform analitik pelanggan untuk memahami perilaku dan meningkatkan engagement. Dapatkan wawasan mendalam tentang perjalanan pelanggan Anda dari akuisisi hingga retensi.",
      category: "Analytics",
      price: "Mulai dari Rp 12.000.000",
      rating: 4.7,
      users: "250+",
      releaseDate: "2024",
      features: ["Behavior Tracking", "Segmentation", "Predictive Analytics", "Dashboard"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Available",
      review: "Dashboard yang sangat intuitif. Membantu kami membuat keputusan berbasis data.",
      role: "Analytics Platform"
    },
    {
      id: 4,
      name: "Digital Workflow Automation",
      description: "Otomatisasi alur kerja digital untuk meningkatkan efisiensi dan mengurangi kesalahan manual. Buat workflow custom tanpa coding dengan drag-and-drop interface.",
      category: "Automation",
      price: "Mulai dari Rp 10.000.000",
      rating: 4.9,
      users: "400+",
      releaseDate: "2024",
      features: ["Process Automation", "Integration APIs", "Custom Workflows", "Monitoring"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Available",
      review: "Mengubah cara kerja tim kami menjadi jauh lebih produktif dan terorganisir.",
      role: "Automation Tool"
    },
    {
      id: 5,
      name: "E-Commerce Platform Plus",
      description: "Platform e-commerce lengkap dengan fitur advanced untuk bisnis online modern. Dukung pertumbuhan bisnis Anda dengan fitur marketing tools dan integrasi marketplace.",
      category: "E-Commerce",
      price: "Mulai dari Rp 20.000.000",
      rating: 4.8,
      users: "600+",
      releaseDate: "2024",
      features: ["Multi-vendor", "Payment Gateway", "SEO Optimized", "Mobile Responsive"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Available",
      review: "Platform yang stabil dan kaya fitur. Penjualan kami meningkat signifikan.",
      role: "E-Commerce Solution"
    },
    {
      id: 6,
      name: "AI Business Intelligence",
      description: "Sistem business intelligence dengan AI untuk insight mendalam dan decision making yang lebih baik. Analisis tren pasar dan performa bisnis secara real-time.",
      category: "Business Intelligence",
      price: "Coming Soon",
      rating: 0,
      users: "0",
      releaseDate: "Q2 2025",
      features: ["AI Insights", "Predictive Models", "Data Visualization", "Real-time Reports"],
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=800&auto=format&fit=crop",
      demoUrl: "#",
      status: "Coming Soon",
      review: "Coming Soon",
      role: "AI Platform"
    }
  ];

  const handleDemoClick = (e: React.MouseEvent, productName: string) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Halo WednesDev, saya tertarik untuk melihat demo dari ${productName}. Bisakah kita jadwalkan presentasi?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  const selectedProductData = selectedProduct !== null ? products.find(p => p.id === selectedProduct) : null;

  return (
    <section id="products" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Katalog <span className="text-gradient">Produk Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jelajahi koleksi lengkap solusi teknologi yang telah kami kembangkan untuk berbagai kebutuhan bisnis.
            Setiap produk dirancang dengan teknologi terdepan dan telah terbukti memberikan hasil nyata.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product.id)}
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
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
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
                    {product.features.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                        +{product.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-primary text-price-dark-accent">{product.price}</p>
                    </div>
                    <Button
                      onClick={(e) => handleDemoClick(e, product.name)}
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Tidak menemukan produk yang sesuai? Kami juga menyediakan solusi kustom!
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            Konsultasi Solusi Kustom
          </Button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-card border-border">
          {selectedProductData && (
            <div className="flex flex-col h-[90vh] md:h-auto max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-border flex justify-between items-center bg-card z-10">
                <DialogTitle className="text-xl md:text-2xl font-bold">{selectedProductData.name}</DialogTitle>
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
                      <h4 className="text-sm text-muted-foreground mb-1">Category</h4>
                      <p className="font-medium text-foreground">{selectedProductData.role}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Description</h4>
                      <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                        {selectedProductData.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm text-muted-foreground mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProductData.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Review */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/20 p-4 rounded-xl border border-border/50">
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Rating</h4>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                          <span className="font-bold">{selectedProductData.rating}</span>
                        </div>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-xl border border-border/50">
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Active Users</h4>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-bold">{selectedProductData.users}</span>
                        </div>
                      </div>
                    </div>

                    {selectedProductData.review && (
                      <div className="bg-secondary/20 p-5 rounded-xl border border-border/50">
                        <h4 className="text-sm font-medium text-primary mb-2">User Feedback</h4>
                        <p className="text-sm italic text-muted-foreground">"{selectedProductData.review}"</p>
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground pt-4 border-t border-border/50">
                      Released in {selectedProductData.releaseDate}
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-border bg-muted shadow-sm">
                      <img
                        src={selectedProductData.image}
                        alt={selectedProductData.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button
                        onClick={(e) => handleDemoClick(e, selectedProductData.name)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-full md:w-auto px-8"
                        disabled={selectedProductData.status === "Coming Soon"}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {selectedProductData.status === "Available" ? "Request Demo / Consult" : "Notify Me"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: More Products */}
              <div className="p-6 border-t border-border bg-secondary/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-sm">More <span className="text-primary">Products</span></h4>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {products.map((p, idx) => (
                    p.id !== selectedProduct && (
                      <div
                        key={p.id}
                        className="flex-shrink-0 w-48 cursor-pointer group"
                        onClick={() => setSelectedProduct(p.id)}
                      >
                        <div className="aspect-video rounded-lg overflow-hidden border border-border mb-2 relative">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <p className="text-xs font-medium truncate group-hover:text-primary transition-colors">{p.name}</p>
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

export default Product;