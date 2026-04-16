import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Weddings", "Engagements & Receptions", "Corporate Events",
  "Concerts & Live Shows", "House Warming", "Flower Decor",
  "Catering", "Private Celebrations", "Cultural Events",
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/sankalpaevents22?igsh=MWFwN2NhbWhwYjRrcQ%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-teal-deepest text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-2">Sankalpa Events</h3>
            <p className="text-teal-light/60 font-body text-xs leading-relaxed">
              Tradition Meets Elegance. Memories Begin Here.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-8 h-8 border border-teal-light/20 flex items-center justify-center hover:border-teal-light/50 hover:bg-primary-foreground/5 transition-all duration-300">
                  <s.icon size={14} className="text-teal-light/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-teal-light/50 font-body font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-teal-light/70 font-body text-xs hover:text-primary-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-teal-light/50 font-body font-bold mb-4">Services</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-4">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-teal-light/70 font-body text-xs">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-teal-light/50 font-body font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-teal-light/70 font-body text-xs">
              <li>+91 XXXXX XXXXX</li>
              <li>hello@sankalpaevents.com</li>
              <li>Karnataka, India</li>
              <li>Mon – Sat | 9 AM – 7 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-teal-light/10 py-4 text-center">
        <p className="text-[10px] text-teal-light/40 font-body tracking-widest">
          © {new Date().getFullYear()} Sankalpa Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
