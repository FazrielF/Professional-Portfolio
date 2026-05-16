import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../layouts/SectionWrapper";
import { education } from "../data/education";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading label="My background" title="Education" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-[3px] bg-dark hidden md:block" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="md:pl-16 relative"
            >
              {/* Dot */}
              <div className="absolute left-0 top-0 hidden md:flex w-10 h-10 bg-terra border-[3px] border-dark items-center justify-center shadow-neo-sm">
                <HiAcademicCap size={18} className="text-light" />
              </div>

              <div className="neo-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-dark text-lg">
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-dark/60 text-sm mt-0.5 font-semibold">
                        {edu.institution}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="inline-block text-xs font-display font-bold text-light bg-terra px-4 py-1.5 border-2 border-dark uppercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
