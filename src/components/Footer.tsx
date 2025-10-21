import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Analisis Risiko", href: "#services" },
      { name: "Mitigasi Masalah", href: "#services" },
      { name: "Optimasi Sistem", href: "#services" },
    ],
    Company: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    Contact: [
      { name: "Hubungi Kami", href: "#contact" },
      { name: "WhatsApp", href: "https://wa.me/6281234567890" },
      { name: "Email", href: "mailto:hello@wednessdev.com" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@wednessdev.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Wedness Dev</h3>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              Your Growth Partner in System & Strategy. Kami membangun sistem yang berdampak untuk pertumbuhan bisnis Anda.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent transition-all duration-300 flex items-center justify-center group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4 text-lg">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Wedness Dev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
