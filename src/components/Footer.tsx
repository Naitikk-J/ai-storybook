import { BookOpen, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:aiclub@university.edu", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative text-primary-foreground py-16 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6">
        {/* Quote */}
        <div className="text-center mb-12">
          <BookOpen className="w-10 h-10 mx-auto mb-6 text-gold" />
          <blockquote className="font-display text-2xl md:text-3xl italic text-primary-foreground/90 max-w-2xl mx-auto">
            "Every great story begins with curiosity."
          </blockquote>
        </div>

        {/* Social Links as Wax Seals */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center hover:bg-gold hover:text-ink hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-20 h-px bg-primary-foreground/20" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="w-20 h-px bg-primary-foreground/20" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} AI Club. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40 mt-2">
            Crafted with curiosity and code
          </p>
        </div>

        {/* The End */}
        <div className="text-center mt-12">
          <span className="font-display text-lg italic text-gold/60">
            ~ The End ~
          </span>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-gold/20 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-gold/20 rounded-br-lg" />
    </footer>
  );
};

export default Footer;
