import { motion } from "framer-motion";
import { Check } from "lucide-react";

type PackageItem = {
  name: string;
  priceLabel: string; // e.g. "Rp 5.000.000" atau "Rp 15.000.000 – 20.000.000"
  target?: string;
  features: string[];
  duration: string; // durasi pengerjaan
  optionalNote?: string; // catatan opsional singkat
  popular?: boolean;
};

const PACKAGES: PackageItem[] = [
  {
    name: "Starter",
    priceLabel: "Rp 5.000.000",
    target: "Untuk landing page & company profile",
    features: [
      "PRD mini & konsultasi",
      "UI/UX basic (1–2 layar)",
      "Development 1 halaman",
      "Testing & deployment",
      "1x revisi minor",
      "Project PIC & laporan",
    ],
    duration: "1 Bulan",
    optionalNote: "Opsional: Maintenance Rp 250.000/meeting",
  },
  {
    name: "Growth / Startup",
    priceLabel: "Rp 15.000.000 – 20.000.000",
    target: "Untuk sistem kecil & dashboard dasar",
    features: [
      "PRD standard",
      "UI/UX 5–7 layar",
      "Frontend + backend CRUD & auth",
      "API dasar",
      "Testing & QA",
      "2x revisi fungsional",
      "Deployment & server setup",
      "Project PIC",
    ],
    duration: "3 Bulan",
    optionalNote: "Opsional: Maintenance modul Rp 500.000 – 800.000",
  },
  {
    name: "Complex System",
    priceLabel: "Rp 35.000.000 – 40.000.000",
    target: "Untuk sistem menengah–besar, multi-role, integrasi API",
    features: [
      "PRD advanced (10–20 halaman)",
      "UI/UX system design (10–20 layar)",
      "Frontend & backend lengkap",
      "Integrasi API / Payment / Chat",
      "User testing",
      "VPS/Docker deployment",
      "3x revisi fungsional",
      "Training & dokumentasi",
    ],
    duration: "6 Bulan",
    optionalNote: "Opsional: Maintenance Rp 1.000.000 – 2.000.000/bulan",
  },
  {
    name: "Enterprise / Custom",
    priceLabel: "Custom (by request)",
    target: "Sistem skala besar, integrasi penuh, project khusus lembaga & korporasi",
    features: [
      "Business consulting",
      "Full PRD workshop",
      "Multi-team development",
      "Infrastruktur skala besar",
      "SLA & support prioritas",
    ],
    duration: "Disepakati bersama",
  },
];

const ServicePackages = () => {
  return (
    <section id="service-packages" className="section-padding bg-background relative overflow-hidden">
      {/* Section Header */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Service Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to kickstart your digital journey.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="group relative h-full p-8 border-2 border-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow cursor-pointer bg-card card-dark-accent">
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 bg-[rgba(7,240,162,0.12)] text-accent border border-accent/40 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur">
                    POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold group-hover-dark-accent">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <p className="text-2xl md:text-3xl font-extrabold text-price-dark-accent">
                    {pkg.priceLabel}
                  </p>
                </div>

                {/* Target */}
                <p className="text-sm text-muted-foreground mb-4">{pkg.target}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                {pkg.optionalNote && (
                  <p className="-mt-4 mb-6 text-xs text-muted-foreground italic">
                    {pkg.optionalNote}
                  </p>
                )}

                {/* Meta */}
                <div className="mb-6 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground">Durasi</p>
                    <p className="font-semibold">{pkg.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Kategori</p>
                    <p className="font-semibold">{pkg.target ?? "—"}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a href="#contact" className="inline-flex items-center justify-center w-full font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg transition-colors">
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;