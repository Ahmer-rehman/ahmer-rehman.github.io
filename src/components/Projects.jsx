import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/resume";

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass glow-border rounded-2xl p-6 h-full group relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35)]"
      >
        {/* accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
        />

        {/* hover accent glow */}
        <div
          className="absolute -top-24 -right-24 w-44 h-44 rounded-full blur-[90px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: project.accent }}
        />

        <div style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-start justify-between mb-4">
            <span
              className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl border group-hover:scale-110 transition-transform duration-300"
              style={{
                borderColor: `${project.accent}50`,
                background: `${project.accent}15`,
                boxShadow: `0 0 24px ${project.accent}25`,
              }}
            >
              {project.icon}
            </span>
            <span className="font-display text-4xl font-bold text-white/5 select-none">
              0{index + 1}
            </span>
          </div>

          <h3
            className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-[color:var(--accent)]"
            style={{ "--accent": project.accent }}
          >
            {project.title}
          </h3>
          <p className="font-mono text-xs mt-1" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="Featured" subtitle="Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Ahmer-rehman"
            target="_blank"
            rel="noreferrer"
            className="inline-block glow-border rounded-xl px-8 py-3 font-semibold text-violet-300 hover:text-white hover:bg-violet-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
