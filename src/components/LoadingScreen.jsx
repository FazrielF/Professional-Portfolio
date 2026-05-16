import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("drawing"); // drawing → filling → done

  useEffect(() => {
    const fillTimer = setTimeout(() => setPhase("filling"), 1000);
    const doneTimer = setTimeout(() => setPhase("done"), 2200);
    const exitTimer = setTimeout(() => onComplete?.(), 2900);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(doneTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "done" ? 0 : 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="loading-screen"
      >
        {/* Geometric decorations */}
        <div
          className="absolute top-12 left-12 w-8 h-8 border-[3px] border-dark bg-terra"
          style={{ transform: "rotate(12deg)" }}
        />
        <div
          className="absolute bottom-20 right-16 w-12 h-12 border-[3px] border-dark rounded-full bg-slate"
        />
        <div className="geo-cross absolute top-20 right-24" />

        <div className="loading-letter-container">
          {/* SVG stroke outline */}
          <svg
            viewBox="0 0 120 160"
            className={`loading-svg ${phase === "drawing" ? "drawing" : "drawn"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              className="loading-letter-stroke"
            >
              F
            </text>
          </svg>

          {/* Filled letter reveal */}
          <div
            className={`loading-letter-fill ${
              phase === "filling" || phase === "done" ? "reveal" : ""
            }`}
          >
            <svg
              viewBox="0 0 120 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="loading-letter-solid"
              >
                F
              </text>
            </svg>
          </div>
        </div>

        {/* Loading bar — neobrutalism style */}
        <div className="loading-bar-track">
          <motion.div
            className="loading-bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === "drawing" ? 0.4 : phase === "filling" ? 0.85 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
