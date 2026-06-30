import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../layouts/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image side */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              rotate: 0,
              y: -4,
              transition: { duration: 0.3 },
            }}
            className="relative bg-light p-3 pb-14 border-[3px] border-dark shadow-neo-lg max-w-sm w-full"
          >
            {/* Tape effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-7 bg-cream border-2 border-dark/30 rotate-[-4deg]" />

            {/* Image */}
            <img
              src="/Fazriel.jpeg"
              alt="Profile"
              className="w-full h-[420px] object-cover border-2 border-dark"
            />

            {/* Bottom text */}
            <div className="absolute bottom-4 left-0 w-full text-center">
              <p className="text-dark/60 text-sm font-display font-bold uppercase tracking-wider">
                Fullstack Developer
              </p>
            </div>
          </motion.div>
        </div>

        {/* Text side */}
        <div>
          <SectionHeading label="Who I am" title="About Me" />
          <div className="space-y-4 text-dark/70 leading-relaxed text-[15px]">
            <p>
              Hi, I'm —{" "}
              <span className="text-dark font-bold border-b-[3px] border-terra">
                Muhammad Fazriel Faddilah
              </span>{" "}
              — a Fullstack Developer based in Indonesia with a genuine passion
              for crafting digital products that are both functional and
              beautiful.
            </p>
            <p>
              I enjoy working across the entire development spectrum: designing
              intuitive interfaces, building scalable backends, and everything
              in between. My toolkit includes React, Flutter, Laravel, and
              Python.
            </p>
            <p>
              Outside of code, I'm constantly reading about new technologies,
              explore new things, and finding better ways to solve
              problems with software.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
