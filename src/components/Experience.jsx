import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title="Work" subtitle="Experience" />

        <div className="relative ml-3 md:ml-0">
          {/* vertical glowing line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-400/50 to-transparent" />

          {experience.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <div key={job.company} className="relative mb-10 md:grid md:grid-cols-2 md:gap-14 items-start">
                {/* node dot */}
                <span className="absolute top-3 -left-2 md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.9)] z-10">
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-violet-400 animate-ping" />
                  )}
                </span>

                {/* date on the opposite side (desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: left ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`hidden md:flex flex-col gap-1 pt-2 ${
                    left
                      ? "order-2 items-start pl-2"
                      : "order-1 items-end pr-2 text-right"
                  }`}
                >
                  <p className="font-mono text-sm text-cyan-300 tracking-wide">
                    {job.period}
                  </p>
                  <p className="font-display text-3xl font-bold text-white/10 select-none leading-none">
                    0{i + 1}
                  </p>
                  <div className={`mt-2 flex flex-wrap gap-2 ${left ? "" : "justify-end"}`}>
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-200 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* card */}
                <motion.div
                  initial={{ opacity: 0, x: left ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`pl-10 md:pl-0 ${left ? "order-1 md:pr-2" : "order-2 md:pl-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass glow-border rounded-2xl p-6 relative overflow-hidden group"
                  >
                    {/* hover sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/10 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {job.role}
                      </h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-green-500/15 text-green-300 border border-green-500/30">
                          ● CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-violet-300 font-medium">{job.company}</p>
                    <p className="font-mono text-xs text-slate-500 mt-1 md:hidden">
                      {job.period}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {job.points.map((p, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▹</span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2 md:hidden">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-200 border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
