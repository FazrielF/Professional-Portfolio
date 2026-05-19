import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Terminal typing effect ─────────────────────────────── */
function useTyping(text, delay = 0, speed = 30) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { displayed, done };
}

function TerminalLine({ prefix, text, delay, color = "text-dark/70" }) {
  const { displayed, done } = useTyping(text, delay, 25);

  return (
    <div className="flex gap-2 font-mono text-sm md:text-[15px] leading-relaxed tracking-wide">
      <span className="text-terra shrink-0 select-none font-bold">
        {prefix}
      </span>
      <span className={color}>
        {displayed}
        {!done && (
          <span className="terminal-cursor">▌</span>
        )}
      </span>
    </div>
  );
}

/* ─── Terminal card — neobrutalism ────────────────────────── */
function TerminalCard() {
  const lines = [
    { prefix: "$", text: 'echo "Fazriel Faddilah"', delay: 800 },
    { prefix: ">", text: "Fullstack Developer", delay: 1600, color: "text-dark font-bold" },
    { prefix: "$", text: "cat tools.txt", delay: 2400 },
    {
      prefix: ">",
      text: "React · Laravel · Flutter · Python · Tailwind",
      delay: 3000,
      color: "text-terra font-semibold",
    },
    { prefix: "$", text: "cat focus.txt", delay: 3800 },
    {
      prefix: ">",
      text: "Building clean, performant digital experiences",
      delay: 4400,
      color: "text-dark",
    },
    { prefix: "$", text: "cat status.txt", delay: 5200 },
    {
      prefix: ">",
      text: "✦ Available for work",
      delay: 5800,
      color: "text-terra font-bold",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      className="terminal-card w-full max-w-md xl:max-w-lg"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b-[3px] border-dark bg-slate/10">
        <div className="flex gap-2">
          <span className="w-[14px] h-[14px] rounded-full bg-terra border-2 border-dark" />
          <span className="w-[14px] h-[14px] rounded-full bg-cream border-2 border-dark" />
          <span className="w-[14px] h-[14px] rounded-full bg-slate border-2 border-dark" />
        </div>
        <span className="text-xs text-dark/60 font-display font-bold ml-2 tracking-wider uppercase">
          ~ bash
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-2 min-h-[260px]">
        <div className="text-xs md:text-sm text-dark/40 font-mono mb-4 select-none font-semibold">
          Last login:{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>

        {lines.map((line, i) => (
          <TerminalLine
            key={i}
            prefix={line.prefix}
            text={line.text}
            delay={line.delay}
            color={line.color}
          />
        ))}

        {/* Blinking cursor */}
        <div className="flex gap-2 font-mono text-sm md:text-[15px] mt-3">
          <span className="text-terra select-none font-bold">$</span>
          <span className="terminal-blink">▌</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* Geometric decorations — floating */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [12, 16, 12] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 right-10 w-20 h-20 border-[3px] border-dark bg-terra/30 rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-32 left-8 w-14 h-14 border-[3px] border-dark rounded-full bg-slate/30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="pointer-events-none absolute top-40 left-20 hidden lg:block"
      >
        <div className="geo-cross" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-48 right-32 w-6 h-6 bg-dark hidden lg:block"
      />

      <div className="max-w-6xl mx-auto w-full pt-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left — Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-2xl"
          >
            {/* Tag */}
            <motion.div variants={item} className="flex items-center gap-3 mb-5">
              <span className="section-label">Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-dark mb-1"
            >
              <span className="text-terra">Fazriel</span> Faddilah
            </motion.h1>

            {/* Role pill */}
            <motion.div variants={item} className="mt-5 mb-6">
              <span className="inline-block bg-dark text-light font-display font-bold tracking-widest uppercase text-xs px-5 py-2.5 border-[3px] border-dark">
                Fullstack Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="max-w-lg text-dark/70 text-sm md:text-base leading-relaxed mb-8 font-body"
            >
              I am a passionate Fullstack Developer who is always interested in
              learning and exploring new things in technology. I build clean,
              performant, and user-centred digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="neo-btn neo-btn-primary"
              >
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href="/CV.pdf"
                download
                className="neo-btn neo-btn-secondary"
              >
                <HiDownload />
                Download Resume
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="mt-16 flex items-center gap-3 text-dark/40 text-xs font-display font-bold uppercase tracking-widest"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[3px] h-8 bg-dark"
              />
              Scroll to explore
            </motion.div>
          </motion.div>

          {/* Right — Terminal card (desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
