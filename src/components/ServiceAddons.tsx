import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    FileText,
    Palette,
    Code,
    CreditCard,
    Wrench,
    PenTool,
    Server,
    ClipboardList,
    Info
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceAddons = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const categories = [
        {
            title: "Konsultasi dan Dokumen",
            icon: <FileText className="w-6 h-6" />,
            items: [
                { name: "Consultation / Meeting (Define Scope)", desc: "Diskusi kebutuhan sistem, mapping user flow, platform, feature list", price: "Rp300.000 / sesi" },
                { name: "PRD Basic", desc: "Dokumen kebutuhan produk + flow dasar + sitemap", price: "Rp500.000" },
                { name: "PRD Advanced", desc: "Detail fungsi, ERD, use case, prioritas fitur, dan estimasi sprint", price: "Rp1.000.000 – Rp2.000.000" },
                { name: "Tech Consultation (Stack & Arsitektur)", desc: "Saran stack tech, integrasi API, dan skalabilitas", price: "Rp500.000 / sesi" },
            ]
        },
        {
            title: "Desain dan Branding",
            icon: <Palette className="w-6 h-6" />,
            items: [
                { name: "Wireframe (UX structure)", desc: "Layout dasar tanpa warna", price: "Rp250.000 / layar" },
                { name: "UI Design (Full Figma)", desc: "High fidelity, responsive", price: "Rp300.000 – Rp500.000 / layar" },
                { name: "Prototype (Clickable)", desc: "Interaksi flow demo", price: "Rp500.000 / proyek" },
                { name: "Logo Design", desc: "Minimal 2 konsep logo", price: "Rp750.000 – Rp1.000.000" },
                { name: "Brand Identity Kit", desc: "Logo, color palette, typography, grid, dan mockup", price: "Rp2.000.000 – Rp3.000.000" },
                { name: "Design System / UI Library", desc: "Button, component, layout grid, typography guide", price: "Rp1.000.000 – Rp1.500.000" },
            ]
        },
        {
            title: "Development",
            icon: <Code className="w-6 h-6" />,
            items: [
                { name: "Landing Page (Single Page)", desc: "Frontend only", price: "Rp2.500.000" },
                { name: "Dashboard Basic (CRUD, auth)", desc: "Frontend + backend", price: "Rp10.000.000 – Rp12.000.000" },
                { name: "Module / Feature Add-on", desc: "Tambah 1 fitur (contoh: export data, upload file, dll)", price: "Rp500.000 – Rp1.500.000 / modul" },
                { name: "Integration (API, Payment, Third Party)", desc: "1 endpoint eksternal", price: "Rp750.000 – Rp1.500.000" },
                { name: "Admin Panel / CMS Custom", desc: "Panel kelola konten & data", price: "Rp2.000.000 – Rp3.000.000" },
                { name: "Testing & QA", desc: "Manual test + report", price: "Rp250.000 – Rp500.000 / sesi" },
            ]
        },
        {
            title: "Payment Gateway Integration",
            icon: <CreditCard className="w-6 h-6" />,
            note: "⚠️ Fee transaksi 2.9%–3.2% tetap ditanggung merchant (klien), bukan agency.",
            items: [
                { name: "Basic Integration (Midtrans/Xendit)", desc: "API + callback test", price: "Rp750.000" },
                { name: "Multiple PG / Split Payment", desc: "2+ metode pembayaran", price: "Rp1.000.000 – Rp1.500.000" },
                { name: "Merchant Setup & Verification Help", desc: "Bantuan pendaftaran akun, konfigurasi callback", price: "Rp300.000" },
                { name: "Payment UI Customization", desc: "Desain flow pembayaran di frontend", price: "Rp250.000 – Rp500.000" },
                { name: "Testing (Sandbox + Production)", desc: "QA dan simulasi transaksi", price: "Rp200.000" },
            ]
        },
        {
            title: "Maintenance dan Support",
            icon: <Wrench className="w-6 h-6" />,
            items: [
                { name: "Basic Maintenance", desc: "Bug fix minor 1x / bulan", price: "Rp300.000 / bulan" },
                { name: "Standard Maintenance", desc: "2 meeting + update minor", price: "Rp500.000 / bulan" },
                { name: "Pro Maintenance", desc: "4 meeting, backup + update major", price: "Rp1.000.000 / bulan" },
                { name: "On-demand Fix / Urgent Task", desc: "Request minor <1 jam", price: "Rp150.000 / task" },
                { name: "Feature Update (v2/v3)", desc: "Penambahan modul di sistem lama", price: "Rp500.000 – Rp2.000.000 / modul" },
            ]
        },
        {
            title: "Copywriting dan Konten",
            icon: <PenTool className="w-6 h-6" />,
            items: [
                { name: "Landing Page Copywriting", desc: "Headline, CTA, tagline", price: "Rp300.000 – Rp500.000" },
                { name: "System Microcopy", desc: "UX writing per modul (Button, Label, Empty State)", price: "Rp150.000 / modul" },
                { name: "Brand Voice & Messaging", desc: "Panduan gaya bahasa brand", price: "Rp500.000" },
                { name: "Social Preview (meta + OG image)", desc: "Desain + teks promosi", price: "Rp300.000" },
            ]
        },
        {
            title: "Server, Hosting, dan Domain",
            icon: <Server className="w-6 h-6" />,
            items: [
                { name: "Server Setup (VPS/Droplet)", desc: "Initial setup Ubuntu + Nginx/PM2", price: "Rp300.000 – Rp500.000" },
                { name: "Domain + SSL + Config", desc: "DNS, SSL, dan pointing", price: "Rp250.000" },
                { name: "CI/CD Integration (GitHub – VPS)", desc: "Auto deploy pipeline", price: "Rp500.000" },
                { name: "Backup Automation / Cronjob", desc: "Snapshot, DB backup", price: "Rp300.000" },
                { name: "Monitoring (Uptime / Error Log)", desc: "Setting notifikasi uptime", price: "Rp200.000" },
            ]
        },
        {
            title: "Project Management",
            icon: <ClipboardList className="w-6 h-6" />,
            items: [
                { name: "Project Tracking (Notion / ClickUp Setup)", desc: "Setup + template task board", price: "Rp200.000" },
                { name: "Sprint Management (Agile)", desc: "Estimasi waktu & sprint breakdown", price: "Rp500.000" },
                { name: "Weekly Report / Review Meeting", desc: "Rekap + evaluasi progres", price: "Rp250.000 / minggu" },
                { name: "Client Portal Access", desc: "Tambahan mini dashboard progress", price: "Rp500.000" },
            ]
        },
    ];

    return (
        <section id="addons" className="section-padding bg-secondary/30" ref={ref}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Additional Services & <span className="text-gradient">Add-ons</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Lengkapi kebutuhan proyek Anda dengan layanan tambahan yang kami sediakan.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="h-full p-6 border border-border/50 bg-card/50 backdrop-blur hover:bg-card hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary dark:bg-[#07F0A2]/10 dark:text-[#07F0A2]">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-foreground">{item.name}</h4>
                                                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                            </div>
                                            <div className="text-right">
                                                <Badge variant="outline" className="whitespace-nowrap bg-background font-semibold border-primary/20 text-primary dark:border-[#07F0A2]/20 dark:text-[#07F0A2]">
                                                    {item.price}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {category.note && (
                                    <div className="mt-6 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex gap-2 text-sm text-yellow-600 dark:text-yellow-400">
                                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <p>{category.note}</p>
                                    </div>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAddons;
