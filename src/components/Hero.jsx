import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OrbScene } from "./Scene3D";
import { profile } from "../data/resume";

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="font-mono text-cyan-300">
      {text}
      <span className="animate-blink text-violet-400">▌</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* radial glow */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 grid md:grid-cols-2 gap-8 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-green-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for work
            </span>
            <span className="font-mono text-violet-400 text-sm">$ whoami</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_35px_rgba(139,92,246,0.45)]"
          >
            Ahmer{" "}
            <span className="text-gradient">Rehman</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 text-xl md:text-2xl h-9 font-medium">
            <Typewriter words={profile.taglines} />
          </motion.div>

          <motion.p variants={item} className="mt-6 text-slate-400 max-w-lg leading-relaxed">
            I build <span className="text-violet-300">secure</span>,{" "}
            <span className="text-cyan-300">real-time</span>, and{" "}
            <span className="text-pink-300">production-ready</span> web platforms — from
            SaaS document workflows to WebRTC communication systems.
          </motion.p>

          <motion.p variants={item} className="mt-3 font-mono text-xs text-slate-500">
            📍 {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="glow-border px-7 py-3 rounded-xl font-semibold text-violet-300 hover:text-white hover:bg-violet-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex gap-5 font-mono text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
              linkedin ↗
            </a>
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-cyan-300 transition-colors">
              email ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="h-[380px] md:h-[560px] cursor-grab active:cursor-grabbing"
        >
          <OrbScene />
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-current animate-scroll-wheel" />
        </div>
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
      </motion.a>
    </section>
  );
}
