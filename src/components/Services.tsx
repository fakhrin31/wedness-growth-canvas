import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Shield,
      title: "Analisis Risiko",
      description: "Identifikasi potensi ancaman dan celah dalam sistem Anda sebelum menjadi masalah besar.",
      features: [
        "Security Assessment",
        "Performance Audit",
        "Infrastructure Review",
        "Risk Mapping"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: "Mitigasi Masalah",
      description: "Solusi tepat sasaran untuk mengatasi bottleneck dan meningkatkan reliabilitas sistem.",
      features: [
        "Bug Resolution",
        "System Debugging",
        "Architecture Refactoring",
        "Technical Debt Reduction"
      ],
      color: "from-accent to-orange-500"
    },
    {
      icon: Zap,
      title: "Optimasi Sistem",
      description: "Maksimalkan performa dan efisiensi sistem untuk mendukung pertumbuhan bisnis yang berkelanjutan.",
      features: [
        "Performance Tuning",
        "Database Optimization",
        "API Enhancement",
        "Scalability Planning"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan <span className="text-gradient">Unggulan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tiga pilar utama yang kami tawarkan untuk memastikan sistem Anda siap berkembang
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative h-full p-8 border-2 border-border hover:border-accent/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow cursor-pointer">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
