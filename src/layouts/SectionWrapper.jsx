import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative py-20 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}

// Section heading — neobrutalism style
export function SectionHeading({ label, title }) {
  return (
    <div className="mb-12">
      <span className="section-label mb-4">{label}</span>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mt-4 tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-[4px] w-16 bg-dark" />
    </div>
  );
}
