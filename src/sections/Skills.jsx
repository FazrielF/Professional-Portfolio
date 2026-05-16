import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../layouts/SectionWrapper";
import { technicalSkills, softSkills } from "../data/skills";

// Duplicate items for seamless infinite loop
const techLoop = [...technicalSkills, ...technicalSkills];
const softLoop = [...softSkills, ...softSkills];

function MarqueeTrack({ children, direction = "left", duration = 30 }) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-wrapper overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <div
        className={`flex gap-5 w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading label="What I work with" title="Skills" />

      {/* ── Technical Skills — Marquee Row 1 (left) ─────── */}
      <div className="mb-10">
        <p className="text-sm font-display font-bold uppercase tracking-widest text-dark/50 mb-6 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-dark" />
          Technical
        </p>

        <MarqueeTrack direction="left" duration={25}>
          {techLoop.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="marquee-card px-6 py-4 flex items-center gap-4 cursor-default group shrink-0"
            >
              <div className="w-12 h-12 bg-cream border-2 border-dark flex items-center justify-center group-hover:bg-terra/20 transition-colors duration-300">
                <skill.icon size={24} style={{ color: skill.color }} />
              </div>
              <span className="font-display font-bold text-sm text-dark whitespace-nowrap uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </MarqueeTrack>
      </div>

      {/* ── Soft Skills — Marquee Row 2 (right) ───────── */}
      <div>
        <p className="text-sm font-display font-bold uppercase tracking-widest text-dark/50 mb-6 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-dark" />
          Soft Skills
        </p>

        <MarqueeTrack direction="right" duration={20}>
          {softLoop.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="marquee-card px-6 py-5 flex items-center gap-4 cursor-default group shrink-0 min-w-[240px]"
            >
              <div className="w-12 h-12 bg-terra/15 border-2 border-dark flex items-center justify-center group-hover:bg-terra/30 transition-all duration-300">
                <skill.icon size={22} className="text-terra" />
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-sm uppercase tracking-wider">
                  {skill.name}
                </h3>
                <p className="text-dark/50 text-xs leading-relaxed mt-0.5">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </MarqueeTrack>
      </div>
    </SectionWrapper>
  );
}
