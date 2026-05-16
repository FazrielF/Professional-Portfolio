import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const socials = [
  { label: "GitHub", icon: FiGithub, href: "https://github.com/FazrielF" },
  { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/muhammad-fazriel-faddilah-1a436b382/" },
  { label: "Instagram", icon: FiInstagram, href: "https://www.instagram.com/zree.l/" },
  { label: "Email", icon: FiMail, href: "mailto:muhammadfazrielfaddilah@gmail.com" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate border-t-[4px] border-dark mt-8 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl text-light mb-3">
              <span className="text-terra">F</span>azriel
            </p>
            <p className="text-light/70 text-sm leading-relaxed max-w-xs">
              Fullstack Developer building clean, performant digital experiences.
            </p>
            <a href="public/resume-fazriel.pdf" download className="mt-5 neo-btn neo-btn-primary text-xs inline-flex">
              <HiDownload size={14} /> Download Resume
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-widest text-light/50 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-light/80 text-sm font-display font-semibold hover:text-terra transition-colors uppercase tracking-wider">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-widest text-light/50 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-light/80 text-sm font-display font-semibold hover:text-terra group transition-colors duration-200">
                  <span className="w-9 h-9 bg-light border-2 border-dark flex items-center justify-center group-hover:bg-terra group-hover:text-light transition-all shadow-neo-sm">
                    <s.icon size={15} className="text-dark group-hover:text-light" />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t-[3px] border-dark/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-light/50 text-xs font-display font-bold uppercase tracking-widest">
            © {year} Muhammad Fazriel Faddilah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
