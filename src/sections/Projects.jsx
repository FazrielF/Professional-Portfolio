import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../layouts/SectionWrapper";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { HiExternalLink, HiPhotograph } from "react-icons/hi";

function TechBadge({ label }) {
  return (
    <span className="text-[10px] font-display font-bold tracking-wider uppercase bg-slate/20 text-dark px-2.5 py-1 border-2 border-dark">
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="carousel-card w-72 md:w-80 neo-card overflow-hidden group">
      <div className="h-44 bg-cream flex items-center justify-center relative overflow-hidden border-b-[3px] border-dark">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
        ) : (
          <div className="text-5xl font-display font-extrabold text-dark/10 select-none">
            {project.id.toString().padStart(2, "0")}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-dark text-base mb-2 uppercase tracking-wide">{project.title}</h3>
        <p className="text-dark/60 text-xs leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (<TechBadge key={t} label={t} />))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-terra hover:text-dark uppercase tracking-wider animated-link transition-colors duration-200">
          View Project <HiExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

function CertImageCard({ cert, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }} className="cert-image-card">
      {cert.image ? (
        <>
          <img src={cert.image} alt={`Certificate ${cert.id}`} className="aspect-[4/3]" />
          <div className="cert-overlay" />
        </>
      ) : (
        <div className="cert-placeholder">
          <HiPhotograph size={32} />
          <span className="text-[10px] uppercase tracking-widest font-display font-bold">Certificate {cert.id}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState("projects");

  return (
    <SectionWrapper id="projects">
      <SectionHeading label="What I've built & learned" title="Projects & Certifications" />

      <div className="flex gap-0 w-fit mb-10 border-[3px] border-dark">
        {["projects", "certifications"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`relative px-6 py-3 text-sm font-display font-bold capitalize uppercase tracking-wider transition-all duration-200 ${tab === t ? "bg-terra text-light" : "bg-light text-dark hover:bg-cream"} ${t === "certifications" ? "border-l-[3px] border-dark" : ""}`}>
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tab === "projects" ? (
          <motion.div key="projects" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <div className="carousel-track pb-4">
              {projects.map((p) => (<ProjectCard key={p.id} project={p} />))}
            </div>
            <p className="text-dark/40 text-xs mt-2 text-center font-display font-bold uppercase tracking-widest">← Scroll to see more →</p>
          </motion.div>
        ) : (
          <motion.div key="certs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c, i) => (<CertImageCard key={c.id} cert={c} index={i} />))}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
